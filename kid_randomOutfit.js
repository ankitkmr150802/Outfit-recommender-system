document.addEventListener('DOMContentLoaded', () => {
    // Function to shuffle array elements
    function shuffleArray(array) {
        if (!Array.isArray(array)) {
            return []; // Return an empty array if 'array' is not valid
        }
        return array.sort(() => Math.random() - 0.5);
    }

    // Function to set random background images for .box-img elements
    function setRandomImages(imagesArray) {
        const boxImgElements = document.querySelectorAll('.box-img');

        // Shuffle the images array
        const shuffledImages = shuffleArray(imagesArray);

        // Take the first 3 images from the shuffled array
        const selectedImages = shuffledImages.slice(0, 3);

        // Apply random images to each .box-img element
        boxImgElements.forEach((boxImgElement, index) => {
            const imageUrl = selectedImages[index % selectedImages.length]; // Cycle through selected images
            boxImgElement.style.backgroundImage = `url('${imageUrl}')`;
            boxImgElement.style.backgroundSize = 'contain';
            boxImgElement.style.backgroundPosition = 'center';

            console.log(`Setting image ${index + 1} to ${imageUrl}`);
        });
    }

    // Determine category based on the current page URL
    function getCategoryFromPage() {
        const pageName = window.location.pathname.split('/').pop(); // Get page name (e.g., 'women_interview.html')
        const category = pageName.split('_')[1].split('.')[0]; // Extract category from page name (e.g., 'interview')

        console.log(`Detected category: ${category}`);

        return category;
    }

    // Define image arrays for different categories (kids's section)
    const imagesByCategory = {
        casual: ['kid_casual1.webp', 'kid_casual2.webp', 'kid_casual3.webp', 'kid_casual4.webp', 'kid_casual5.jpeg'],
        party: ['kid_birthday1.avif', 'kid_birthday2.jpg', 'kid_birthday3.jpg', 'kid_birthday4.webp', 'kid_birthday5.jpg'],
        sport: ['kid_sport1.jpg', 'kid_sport2.webp', 'kid_sport3.jpg', 'kid_sport4.avif', 'kid_sport5.png']

    };

    // Get category based on the current page
    let category = getCategoryFromPage();

    // If the category is not found or not valid, default to 'casual'
    if (!imagesByCategory[category]) {
        console.warn(`Invalid category detected: ${category}. Defaulting to 'casual'.`);
        category = 'casual';
    }

    // Retrieve image array based on the category
    const imagesArray = imagesByCategory[category];

    console.log(`Images array for ${category}:`, imagesArray);

    // Set random images for the current category
    setRandomImages(imagesArray);
});
