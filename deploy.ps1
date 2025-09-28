# Manual Deployment Script for GitHub Pages
# This script builds the site and deploys to gh-pages branch

Write-Host "🚀 Starting manual deployment to GitHub Pages..." -ForegroundColor Green

# Step 1: Build the static site
Write-Host "📦 Building static site..." -ForegroundColor Yellow
npm run build:gh-pages

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

# Step 2: Switch to gh-pages branch
Write-Host "🔄 Switching to gh-pages branch..." -ForegroundColor Yellow
git checkout gh-pages

# Step 3: Remove all files except .git
Write-Host "🧹 Cleaning gh-pages branch..." -ForegroundColor Yellow
Get-ChildItem -Path . -Exclude .git | Remove-Item -Recurse -Force

# Step 4: Copy built files from out/ to root
Write-Host "📋 Copying built files..." -ForegroundColor Yellow
robocopy out . /E /MOVE

# Step 5: Add and commit changes
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git add .
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# Step 6: Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
git push origin gh-pages

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Deployment successful!" -ForegroundColor Green
    Write-Host "🌐 Your site is live at: https://shreyakarkun025.github.io" -ForegroundColor Cyan
} else {
    Write-Host "❌ Push failed!" -ForegroundColor Red
    exit 1
}

# Step 7: Switch back to main branch
Write-Host "🔄 Switching back to main branch..." -ForegroundColor Yellow
git checkout main

Write-Host "🎉 Deployment complete!" -ForegroundColor Green
