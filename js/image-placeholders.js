// JavaScript to add placeholder classes to images that fail to load

document.addEventListener('DOMContentLoaded', function() {
    // Replace all images in subdirectories with AI-generated placeholders
    const aiImages = Array.from({ length: 10 }, (_, i) => `ai${i+1}.jpg`);
    let counter = 0;
    const allImgs = document.querySelectorAll('img');
    allImgs.forEach(img => {
        const srcAttr = img.getAttribute('src') || '';
        // Skip logo images and top-level images
        if (/^images\/[^\/]+\/.+\.(jpg|png|jpeg|gif)$/i.test(srcAttr) &&
            !srcAttr.includes('logo') ) {
            // Determine relative path prefix
            const prefix = window.location.pathname.includes('/pages/') ? '../images/' : 'images/';
            const aiFile = aiImages[counter % aiImages.length];
            img.src = `${prefix}${aiFile}`;
            counter++;
        }
    });
    
    // Process all images on the page
    const images = document.querySelectorAll('img:not(.logo-img):not(.footer-logo)');
    
    images.forEach(function(img) {
        // Check if image is already loaded and valid
        if (img.complete && img.naturalHeight !== 0) {
            return; // Image loaded successfully
        }
        
        // Handle error when image fails to load
        img.addEventListener('error', function() {
            handleImageError(img);
        });
        
        // Check again after a short delay (for already loaded but broken images)
        setTimeout(function() {
            if (img.naturalHeight === 0) {
                handleImageError(img);
            }
        }, 100);
    });
    
    // Process background images in hero sections
    const heroSections = document.querySelectorAll('.page-hero[style*="background-image"]');
    heroSections.forEach(function(section) {
        const bgUrl = section.style.backgroundImage;
        if (!bgUrl || bgUrl === 'none') {
            section.classList.add('placeholder');
        }
        
        // Create a test image to check if the background loads
        const testImg = new Image();
        testImg.onload = function() {
            // Background image loaded successfully
        };
        testImg.onerror = function() {
            section.classList.add('placeholder');
        };
        
        // Extract URL from the background-image style
        const urlMatch = bgUrl.match(/url\(['"]?(.*?)['"]?\)/);
        if (urlMatch && urlMatch[1]) {
            testImg.src = urlMatch[1];
        } else {
            section.classList.add('placeholder');
        }
    });
});

// Helper function to handle image errors
function handleImageError(img) {
    // Create a placeholder div
    const placeholder = document.createElement('div');
    placeholder.className = 'img-placeholder';
    
    // Determine placeholder type based on image context or path
    const imgSrc = img.getAttribute('src') || '';
    const imgAlt = img.getAttribute('alt') || '';
    
    if (imgSrc.includes('product') || imgAlt.toLowerCase().includes('product')) {
        placeholder.classList.add('product');
    } else if (imgSrc.includes('service') || imgAlt.toLowerCase().includes('service')) {
        placeholder.classList.add('service');
    } else if (imgSrc.includes('tech') || imgAlt.toLowerCase().includes('tech')) {
        placeholder.classList.add('technology');
    } else if (imgSrc.includes('team') || imgAlt.toLowerCase().includes('team')) {
        placeholder.classList.add('team');
    } else if (imgSrc.includes('news') || imgAlt.toLowerCase().includes('news')) {
        placeholder.classList.add('news');
    }
    
    // Match dimensions of the original image
    placeholder.style.width = img.width + 'px';
    placeholder.style.height = img.height + 'px';
    if (img.height > 0) {
        placeholder.style.minHeight = img.height + 'px';
    }
    
    // Replace the image with the placeholder
    img.parentNode.replaceChild(placeholder, img);
}
