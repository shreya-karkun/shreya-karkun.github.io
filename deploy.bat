@echo off
echo 🚀 Starting manual deployment to GitHub Pages...

echo 📦 Building static site...
call npm run build:gh-pages
if errorlevel 1 (
    echo ❌ Build failed!
    exit /b 1
)

echo 🔄 Switching to gh-pages branch...
git checkout gh-pages

echo 🧹 Cleaning gh-pages branch...
for /f "delims=" %%i in ('dir /b /a-d') do del "%%i" /q
for /f "delims=" %%i in ('dir /b /ad ^| findstr /v ".git"') do rmdir "%%i" /s /q

echo 📋 Copying built files...
robocopy out . /E /MOVE

echo 💾 Committing changes...
git add .
git commit -m "Deploy: %date% %time%"

echo 🚀 Pushing to GitHub...
git push origin gh-pages
if errorlevel 1 (
    echo ❌ Push failed!
    exit /b 1
)

echo 🔄 Switching back to main branch...
git checkout main

echo ✅ Deployment successful!
echo 🌐 Your site is live at: https://shreyakarkun025.github.io
echo 🎉 Deployment complete!
pause
