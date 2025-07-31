# Monster Girl Dreams Modding Documentation

Built using MkDocs Material.

## Building

To get started, run one of:

```bash
./build.bat       # Windows wrapper to build.py
./build.sh        # Unix wrapper to build.py
python ./build.py # The actual build script
```

## Manual Build

Note the dependencies listed. Can also see them in mkdocs.yml

```bash
pip install mkdocs mkdocs-material mkdocs-macros-plugin mkdocs-redirects neoteroi_mkdocs
python generate_nav.py
mkdocs build
```

Use mkdocs build for more error information.

## Iterating

`mkdocs serve` gives you live reloading in the browser.
The best choice for editing existing files or even css. `mkdocs build`
can be used for manual rebuilds but is slower for iterating.
Use `python ./build.py` to regenerate navigation.

## Resources

MkDocs is formatted in a variant of markdown, so if you've used Discord at all
you are already off to a good start.

- [MkDocs User Guide](https://www.mkdocs.org/user-guide/)
- [MkDocs Material Reference](https://squidfunk.github.io/mkdocs-material/reference/)
- [MkDocs Macros Plugin](https://mkdocs-macros-plugin.readthedocs.io/en/latest/)
- [MkDocs Redirects](https://github.com/mkdocs/mkdocs-redirects#using)
- [neoteroi spantables](https://www.neoteroi.dev/mkdocs-plugins/spantable/)

Minor design rules:

- Use spantables instead of normal tables as that is the only one themed at the moment.
- Index pages should be the only use of cards,
use spantables instead for situations needing horizontal density.
