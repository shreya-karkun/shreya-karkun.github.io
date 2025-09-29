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

      // Add hash routing support to index.html
      if (file === 'index.html') {
        const hashRoutingScript = `
<script>
// Handle hash routing for GitHub Pages SPA
(function() {
  // Check if we have a hash in the URL
  if (window.location.hash) {
    var hash = window.location.hash.substring(1);
    // Remove the hash and navigate to the actual route
    if (hash.startsWith('/')) {
      window.history.replaceState(null, null, hash);
      // Trigger a page reload to load the correct content
      window.location.reload();
    }
  }
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

// Fix paths in the out directory
const outDir = path.join(__dirname, '..', 'out');
if (fs.existsSync(outDir)) {
  console.log('Fixing asset paths for GitHub Pages...');
  fixPaths(outDir);
  console.log('Path fixing completed!');
} else {
  console.log('Out directory not found. Please build the project first.');
}
