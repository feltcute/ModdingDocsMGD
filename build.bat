@echo off

echo MGD Documentation Build (Windows)
echo Calling Python build script...
echo.

python build.py

if errorlevel 1 (
    echo.
    echo Build failed. Press any key to exit...
    pause >nul
    exit /b 1
)

echo.
echo Build completed successfully!
pause
