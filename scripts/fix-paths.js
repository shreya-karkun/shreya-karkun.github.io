const fs = require('fs');
const path = require('path');

function fixPaths(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixPaths(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');

      // Replace absolute paths with relative paths
      content = content.replace(/\/_next\//g, './_next/');
      content = content.replace(/href="\/_next\//g, 'href="./_next/');
      content = content.replace(/src="\/_next\//g, 'src="./_next/');

      // Also fix any remaining absolute paths in the content
      content = content.replace(/href="\/_next\//g, 'href="./_next/');
      content = content.replace(/src="\/_next\//g, 'src="./_next/');
      content = content.replace(/url\(\/_next\//g, 'url(./_next/');

      // Fix any paths in script content
      content = content.replace(/"\/_next\//g, '"./_next/');
      content = content.replace(/'\/_next\//g, "'./_next/");

      // Fix the loading spinner issue - remove the persistent loading div
      content = content.replace(/<div class="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-zinc-900" style="opacity:1"><div class="w-16 h-16 border-4 border-indigo-200 dark:border-indigo-800 border-t-indigo-600 dark:border-t-indigo-400 rounded-full"><\/div><\/div>/g, '');
      
      // Remove any other loading spinners or loading states
      content = content.replace(/<div class="fixed inset-0 z-50[^>]*>.*?<\/div>/gs, '');
      content = content.replace(/style="opacity:1"[^>]*>/g, '>');
      
      // Remove any loading-related scripts that might cause issues
      content = content.replace(/<script[^>]*>.*?loading.*?<\/script>/gis, '');
      
      // Remove any framer-motion loading states
      content = content.replace(/<div[^>]*class="[^"]*fixed[^"]*inset-0[^"]*"[^>]*>.*?<\/div>/gs, '');
      
      // Remove any elements with loading-related classes
      content = content.replace(/<div[^>]*class="[^"]*loading[^"]*"[^>]*>.*?<\/div>/gs, '');
      
      // Remove any elements with opacity: 1 that might be loading overlays
      content = content.replace(/<div[^>]*style="[^"]*opacity:\s*1[^"]*"[^>]*>.*?<\/div>/gs, '');

      // Add hash routing support to all HTML files for direct URL access
      if (file.endsWith('.html')) {
        const hashRoutingScript = `
<script>
// Handle hash routing for GitHub Pages SPA
(function() {
  // Immediate routing without delays
  // Check if we have a hash in the URL
  if (window.location.hash) {
    var hash = window.location.hash.substring(1);
    // Remove the hash and navigate to the actual route
    if (hash.startsWith('/')) {
      window.history.replaceState(null, '', hash);
      // Don't reload, let Next.js handle the routing
    }
  }
  
  // Handle direct URL access - if we're on a path that should be handled by the SPA
  var currentPath = window.location.pathname;
  var isSPARoute = currentPath !== '/' && 
                   currentPath !== '/index.html' && 
                   !currentPath.startsWith('/_next/') && 
                   !currentPath.startsWith('/images/') && 
                   !currentPath.startsWith('/papers/') && 
                   !currentPath.startsWith('/posters/') &&
                   !currentPath.startsWith('/404') &&
                   !currentPath.endsWith('.html');
  
  if (isSPARoute) {
    // This is a SPA route, redirect to index.html with hash
    var redirectUrl = window.location.protocol + '//' + window.location.hostname + 
      (window.location.port ? ':' + window.location.port : '') + 
      '/index.html' + '#' + currentPath + window.location.search;
    window.location.replace(redirectUrl);
  }
  
  // Ensure content is visible immediately
  function ensureContentVisible() {
    // Remove any loading overlays
    var loadingElements = document.querySelectorAll('.fixed.inset-0.z-50');
    loadingElements.forEach(function(el) {
      el.remove();
    });
    
    // Make sure main content is visible
    var mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.style.display = 'block';
      mainContent.style.opacity = '1';
    }
    
    // Force visibility of all content
    var allElements = document.querySelectorAll('*');
    allElements.forEach(function(el) {
      if (el.style.opacity === '0' || el.style.display === 'none') {
        el.style.opacity = '1';
        el.style.display = 'block';
      }
    });
  }
  
  // Ensure content is visible immediately for all cases
  ensureContentVisible();
  
  // Also run on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', ensureContentVisible);
})();
</script>`;
        
        // Insert the script before the closing body tag
        content = content.replace('</body>', hashRoutingScript + '</body>');
      }

      fs.writeFileSync(filePath, content);
      console.log(`Fixed paths in ${filePath}`);
    }
  });
}

// Copy build.json to out directory
function copyBuildJson() {
  const sourcePath = path.join(__dirname, '..', 'images', 'shreya', 'build.json');
  const destDir = path.join(__dirname, '..', 'out', 'images', 'shreya');
  const destPath = path.join(destDir, 'build.json');
  
  if (fs.existsSync(sourcePath)) {
    // Create destination directory if it doesn't exist
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    // Copy the file
    fs.copyFileSync(sourcePath, destPath);
    console.log('Copied build.json to out directory');
  } else {
    console.log('build.json not found in source directory');
  }
}

// Fix paths in the out directory
const outDir = path.join(__dirname, '..', 'out');
if (fs.existsSync(outDir)) {
  console.log('Fixing asset paths for GitHub Pages...');
  fixPaths(outDir);
  copyBuildJson();
  console.log('Path fixing completed!');
} else {
  console.log('Out directory not found. Please build the project first.');
}

