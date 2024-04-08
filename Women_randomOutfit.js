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

    // Define image arrays for different categories (women's section)
    const imagesByCategory = {
        interview: ['Women_inter1.png', 'Women_inter2.png', 'Women_inter3.jpg', 'Women_inter4.webp', 'Women_inter5.jpg'],
        casual: ['Women_casual1.jpg', 'Women_casual2.avif', 'Women_casual3.jpg', 'Women_casual4.avif', 'Women_casual5.avif'],
        marriage: ['Women_marriage1.webp', 'Women_marriage2.avif', 'Women_marriage3.png', 'women_marriage4.jpg', 'women_marriage5.jpg'],
        party: ['Women_party1.jpg', 'Women_party2.webp', 'Women_party3.jpg', 'Women_party4.webp', 'Women_party5.jpg'],
        night: ['women_night1.jpg', 'women_night2.jpg', 'women_night3.webp', 'women_night4.jpg', 'women_night5.webp']
    };

    // Get category based on the current page
    let category = getCategoryFromPage();

    // If the category is not found or not valid, default to 'interview'
    if (!imagesByCategory[category]) {
        console.warn(`Invalid category detected: ${category}. Defaulting to 'interview'.`);
        category = 'interview';
    }

    // Retrieve image array based on the category
    const imagesArray = imagesByCategory[category];

    console.log(`Images array for ${category}:`, imagesArray);

    // Set random images for the current category
    setRandomImages(imagesArray);
});
