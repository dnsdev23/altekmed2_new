const fs = require('fs');
const path = require('path');

// Directory containing images and subdirectories
const imagesDir = path.join(__dirname, 'images');

// List of AI placeholder images in the root images directory
const aiFiles = Array.from({ length: 10 }, (_, i) => `ai${i+1}.jpg`);
let counter = 0;

function replaceImages(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      replaceImages(fullPath);
    } else if (!/^ai\d+\.jpg$/.test(entry.name)) {
      // Select an AI placeholder in sequence
      const aiFile = aiFiles[counter % aiFiles.length];
      counter++;
      const source = path.join(imagesDir, aiFile);
      try {
        fs.copyFileSync(source, fullPath);
        console.log(`Replaced ${fullPath} with ${aiFile}`);
      } catch (err) {
        console.error(`Error replacing ${fullPath}:`, err);
      }
    }
  }
}

replaceImages(imagesDir);
console.log('Image replacement complete.');
