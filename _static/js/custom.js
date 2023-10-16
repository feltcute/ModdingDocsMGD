// Also all borrowed from the Godot custom.js: https://github.com/godotengine/godot-docs - fcmcl

// Handle page scroll and adjust sidebar accordingly.

// Each page has two scrolls: the main scroll, which is moving the content of the page;
// and the sidebar scroll, which is moving the navigation in the sidebar.
// We want the logo to gradually disappear as the main content is scrolled, giving
// more room to the navigation on the left. This means adjusting the height
// available to the navigation on the fly. There is also a banner below the navigation
// that must be dealt with simultaneously.
const registerOnScrollEvent = (function(){
    // Configuration.
  
    // The number of pixels the user must scroll by before the logo is completely hidden.
    const scrollTopPixels = 87; // Formula is a base of 14px + image height. - fcmcl
    // The target margin to be applied to the navigation bar when the logo is hidden.
    const menuTopMargin = 70;
    // The max-height offset when the logo is completely visible.
    const menuHeightOffset_default = 162;
    // The max-height offset when the logo is completely hidden.
    const menuHeightOffset_fixed = 80;
    // The distance between the two max-height offset values above; used for intermediate values.
    const menuHeightOffset_diff = (menuHeightOffset_default - menuHeightOffset_fixed);
  
    // Media query handler.
    return function(mediaQuery) {
      // We only apply this logic to the "desktop" resolution (defined by a media query at the bottom).
      // This handler is executed when the result of the query evaluation changes, which means that
      // the page has moved between "desktop" and "mobile" states.
  
      // When entering the "desktop" state, we register scroll events and adjust elements on the page.
      // When entering the "mobile" state, we clean up any registered events and restore elements on the page
      // to their initial state.
  
      const $window = $(window);
      const $sidebar = $('.wy-side-scroll');
      const $search = $sidebar.children('.wy-side-nav-search');
      const $menu = $sidebar.children('.wy-menu-vertical');
      const $ethical = $sidebar.children('.ethical-rtd');
  
      // This padding is needed to correctly adjust the height of the scrollable area in the sidebar.
      // It has to have the same height as the ethical block, if there is one.
      let $menuPadding = $menu.children('.wy-menu-ethical-padding');
      if ($menuPadding.length == 0) {
        $menuPadding = $('<div class="wy-menu-ethical-padding"></div>');
        $menu.append($menuPadding);
      }
  
      if (mediaQuery.matches) {
        // Entering the "desktop" state.
  
        // The main scroll event handler.
        // Executed as the page is scrolled and once immediately as the page enters this state.
        const handleMainScroll = (currentScroll) => {
          if (currentScroll >= scrollTopPixels) {
            // After the page is scrolled below the threshold, we fix everything in place.
            $search.css('margin-top', `-${scrollTopPixels}px`);
            $menu.css('margin-top', `${menuTopMargin}px`);
            $menu.css('max-height', `calc(100% - ${menuHeightOffset_fixed}px)`);
          }
          else {
            // Between the top of the page and the threshold we calculate intermediate values
            // to guarantee a smooth transition.
            $search.css('margin-top', `-${currentScroll}px`);
            $menu.css('margin-top', `${menuTopMargin + (scrollTopPixels - currentScroll)}px`);
  
            if (currentScroll > 0) {
              const scrolledPercent = (scrollTopPixels - currentScroll) / scrollTopPixels;
              const offsetValue = menuHeightOffset_fixed + menuHeightOffset_diff * scrolledPercent;
              $menu.css('max-height', `calc(100% - ${offsetValue}px)`);
            } else {
              $menu.css('max-height', `calc(100% - ${menuHeightOffset_default}px)`);
            }
          }
        };
  
        // The sidebar scroll event handler.
        // Executed as the sidebar is scrolled as well as after the main scroll. This is needed
        // because the main scroll can affect the scrollable area of the sidebar.
        const handleSidebarScroll = () => {
          const menuElement = $menu.get(0);
          const menuScrollTop = $menu.scrollTop();
          const menuScrollBottom = menuElement.scrollHeight - (menuScrollTop + menuElement.offsetHeight);
  
          // As the navigation is scrolled we add a shadow to the top bar hanging over it.
          if (menuScrollTop > 0) {
            $search.addClass('fixed-and-scrolled');
          } else {
            $search.removeClass('fixed-and-scrolled');
          }
  
          // Near the bottom we start moving the sidebar banner into view.
          if (menuScrollBottom < ethicalOffsetBottom) {
            $ethical.css('display', 'block');
            $ethical.css('margin-top', `-${ethicalOffsetBottom - menuScrollBottom}px`);
          } else {
            $ethical.css('display', 'none');
            $ethical.css('margin-top', '0px');
          }
        };
  
        $search.addClass('fixed');
        $ethical.addClass('fixed');
  
        // Adjust the inner height of navigation so that the banner can be overlaid there later.
        const ethicalOffsetBottom = $ethical.height() || 0;
        if (ethicalOffsetBottom) {
          $menuPadding.css('height', `${ethicalOffsetBottom}px`);
        } else {
          $menuPadding.css('height', `0px`);
        }
  
        $window.scroll(function() {
          handleMainScroll(window.scrollY);
          handleSidebarScroll();
        });
  
        $menu.scroll(function() {
          handleSidebarScroll();
        });
  
        handleMainScroll(window.scrollY);
        handleSidebarScroll();
      } else {
        // Entering the "mobile" state.
  
        $window.unbind('scroll');
        $menu.unbind('scroll');
  
        $search.removeClass('fixed');
        $ethical.removeClass('fixed');
  
        $search.css('margin-top', `0px`);
        $menu.css('margin-top', `0px`);
        $menu.css('max-height', 'initial');
        $menuPadding.css('height', `0px`);
        $ethical.css('margin-top', '0px');
        $ethical.css('display', 'block');
      }
    };
  })();
  
  // Subscribe to DOM changes in the sidebar container, because there is a
  // banner that gets added at a later point, that we might not catch otherwise.
  const registerSidebarObserver = (function(){
    return function(callback) {
      const sidebarContainer = document.querySelector('.wy-side-scroll');
  
      let sidebarEthical = null;
      const registerEthicalObserver = () => {
        if (sidebarEthical) {
          // Do it only once.
          return;
        }
  
        sidebarEthical = sidebarContainer.querySelector('.ethical-rtd');
        if (!sidebarEthical) {
          // Do it only after we have the element there.
          return;
        }
  
        // This observer watches over the ethical block in sidebar, and all of its subtree.
        const ethicalObserverConfig = { childList: true, subtree: true };
        const ethicalObserverCallback = (mutationsList, observer) => {
          for (let mutation of mutationsList) {
            if (mutation.type !== 'childList') {
              continue;
            }
  
            callback();
          }
        };
  
        const ethicalObserver = new MutationObserver(ethicalObserverCallback);
        ethicalObserver.observe(sidebarEthical, ethicalObserverConfig);
      };
      registerEthicalObserver();
  
      // This observer watches over direct children of the main sidebar container.
      const observerConfig = { childList: true };
      const observerCallback = (mutationsList, observer) => {
        for (let mutation of mutationsList) {
          if (mutation.type !== 'childList') {
            continue;
          }
  
          callback();
          registerEthicalObserver();
        }
      };
  
      const observer = new MutationObserver(observerCallback);
      observer.observe(sidebarContainer, observerConfig);
  
      // Default TOC tree has links that immediately navigate to the selected page. Our
      // theme adds an extra button to fold and unfold the tree without navigating away.
      // But that means that the buttons are added after the initial load, so we need to
      // improvise to detect clicks on these buttons.
      const scrollElement = document.querySelector('.wy-menu-vertical');
      const registerLinkHandler = (linkChildren) => {
        linkChildren.forEach(it => {
          if (it.nodeType === Node.ELEMENT_NODE && it.classList.contains('toctree-expand')) {
            it.addEventListener('click', () => {
              // Toggling a different item will close the currently opened one,
              // which may shift the clicked item out of the view. We correct for that.
              const menuItem = it.parentNode;
              const baseScrollOffset = scrollElement.scrollTop + scrollElement.offsetTop;
              const maxScrollOffset = baseScrollOffset + scrollElement.offsetHeight;
  
              if (menuItem.offsetTop < baseScrollOffset || menuItem.offsetTop > maxScrollOffset) {
                menuItem.scrollIntoView();
              }
  
              callback();
            });
          }
        });
      }
  
      const navigationSections = document.querySelectorAll('.wy-menu-vertical ul');
      navigationSections.forEach(it => {
        if (it.previousSibling == null || typeof it.previousSibling === 'undefined' || it.previousSibling.tagName != 'A') {
          return;
        }
  
        const navigationLink = it.previousSibling;
        registerLinkHandler(navigationLink.childNodes);
  
        const linkObserverConfig = { childList: true };
        const linkObserverCallback = (mutationsList, observer) => {
          for (let mutation of mutationsList) {
            registerLinkHandler(mutation.addedNodes);
          }
        };
  
        const linkObserver = new MutationObserver(linkObserverCallback);
        linkObserver.observe(navigationLink, linkObserverConfig);
      });
    };
  })();
  
  $(document).ready(() => {
    // Remove the search match highlights from the page, and adjust the URL in the
    // navigation history.
    const url = new URL(location.href);
    if (url.searchParams.has('highlight')) {
      Documentation.hideSearchWords();
    }
  
    // Initialize handlers for page scrolling and our custom sidebar.
    const mediaQuery = window.matchMedia('only screen and (min-width: 769px)');
  
    registerOnScrollEvent(mediaQuery);
    mediaQuery.addListener(registerOnScrollEvent);
  
    registerSidebarObserver(() => {
      registerOnScrollEvent(mediaQuery);
    });
  
    // Add line-break suggestions to the sidebar navigation items in the class reference section.
    //
    // Some class reference pages have very long PascalCase names, such as
    //    VisualShaderNodeCurveXYZTexture
    // Those create issues for our layout, as we can neither make them wrap with CSS without
    // breaking normal article titles, nor is it good to have them overflow their containers.
    // So we use a <wbr> tag to insert mid-word suggestions for appropriate splits, so the browser
    // knows that it's okay to split it like
    //    Visual Shader Node Curve XYZTexture
    // and add a new line at an opportune moment.
    const classReferenceLinks = document.querySelectorAll('.wy-menu-vertical > ul:last-of-type .reference.internal');
    for (const linkItem of classReferenceLinks) {
      let textNode = null;
      linkItem.childNodes.forEach(it => {
        if (it.nodeType === Node.TEXT_NODE) {
          // If this is a text node and if it needs to be updated, store a reference.
          let text = it.textContent;
          if (!(text.includes(" ") || text.length < 10)) {
            textNode = it;
          }
        }
      });
  
      if (textNode != null) {
          let text = textNode.textContent;
          // Add suggested line-breaks and replace the original text.
          // The regex looks for a lowercase letter followed by a number or an uppercase
          // letter. We avoid splitting at the last character in the name, though.
          text = text.replace(/([a-z])([A-Z0-9](?!$))/gm, '$1<wbr>$2');
  
          linkItem.removeChild(textNode);
          linkItem.insertAdjacentHTML('beforeend', text);
      }
    }
  
    // Make sections in the sidebar togglable.
    let hasCurrent = false;
    let menuHeaders = document.querySelectorAll('.wy-menu-vertical .caption[role=heading]');
    menuHeaders.forEach(it => {
        let connectedMenu = it.nextElementSibling;
  
        // Enable toggling.
        it.addEventListener('click', () => {
            if (connectedMenu.classList.contains('active')) {
              connectedMenu.classList.remove('active');
              it.classList.remove('active');
            } else {
              connectedMenu.classList.add('active');
              it.classList.add('active');
            }
  
            // Hide other sections.
            menuHeaders.forEach(ot => {
              if (ot !== it && ot.classList.contains('active')) {
                ot.nextElementSibling.classList.remove('active');
                ot.classList.remove('active');
              }
            });
  
            registerOnScrollEvent(mediaQuery);
        }, true);
  
        // Set the default state, expand our current section.
        if (connectedMenu.classList.contains('current')) {
          connectedMenu.classList.add('active');
          it.classList.add('active');
  
          hasCurrent = true;
        }
    });
  
    // Unfold the first (general information) section on the home page.
    if (!hasCurrent && menuHeaders.length > 0) {
      menuHeaders[0].classList.add('active');
      menuHeaders[0].nextElementSibling.classList.add('active');
  
      registerOnScrollEvent(mediaQuery);
    }
  });
  
  // Override the default implementation from doctools.js to avoid this behavior.
  Documentation.highlightSearchWords = function() {
    // Nope.
  }