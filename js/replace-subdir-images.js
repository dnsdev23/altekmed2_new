// Replace images under subdirectories with AI placeholder images
document.addEventListener('DOMContentLoaded', () => {
    const subdirs = ['careers', 'news', 'products', 'services', 'solutions', 'tech'];
    let aiIndex = 1;
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        // Only replace images in specified subdirectories
        if (subdirs.some(dir => src.includes(`/images/${dir}/`))) {
            // Assign next AI image
            img.src = `/images/ai${aiIndex}.jpg`;
            aiIndex = aiIndex < 10 ? aiIndex + 1 : 1;
        }
    });

    // Also replace background images for elements with inline styles
    const elements = document.querySelectorAll('[style]');
    elements.forEach(el => {
        const bg = el.style.backgroundImage;
        if (bg && subdirs.some(dir => bg.includes(`/images/${dir}/`))) {
            el.style.backgroundImage = `url('/images/ai${aiIndex}.jpg')`;
            aiIndex = aiIndex < 10 ? aiIndex + 1 : 1;
        }
    });
});
