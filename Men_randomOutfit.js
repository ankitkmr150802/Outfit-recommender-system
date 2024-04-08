document.addEventListener('DOMContentLoaded', () => {
  // Function to shuffle array elements
  function shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
  }

  // Function to set random background images for .box-img elements
  function setRandomImages(imagesArray) {
      const boxImgElements = document.querySelectorAll('.box-img');

      // Shuffle the images array
      const shuffledImages = shuffleArray(imagesArray);

      // Apply random images to each .box-img element
      boxImgElements.forEach((boxImgElement, index) => {
          const imageUrl = shuffledImages[index % shuffledImages.length]; // Cycle through images array
          boxImgElement.style.backgroundImage = `url('${imageUrl}')`;
          boxImgElement.style.backgroundSize = 'contain';
          boxImgElement.style.backgroundPosition = 'center';
      });
  }

  // Determine category based on the current page URL
  function getCategoryFromPage() {
      const pageName = window.location.pathname.split('/').pop(); // Get page name (e.g., 'men_casual.html')
      const category = pageName.split('_')[1].split('.')[0]; // Extract category from page name (e.g., 'casual')
      return category;
  }

  // Define image arrays for different categories
  const imagesByCategory = {
      interview: ['men_interview1.webp', 'men_interview2.jpg', 'men_interview3.jpg', 'men_interview4.jpg', 'men_interview5.jpg'],
      casual: ['Men_casual1.jpg', 'Men_casual2.jpg', 'Men_casual3.jpg', 'Men_casual4.jpg', 'Men_casual5.png'],
      marriage: ['men_marriage1.jpg', 'men_marriage2.png', 'men_marriage3.jpg', 'men_marriage4.avif', 'men_marriage5.avif'],
      sports: ['men_sport1.jpg', 'men_sport2.jpg', 'men_sport3.jpg', 'men_sport4.jpeg', 'men_sport5.webp'],
      nightwear: ['men_night1.jpg', 'men_night2.jpg', 'men_night3.webp', 'men_night4.webp', 'men_night5.webp']
  };

  // Get category based on the current page
  const category = getCategoryFromPage();

  // Set random images for the current category
  setRandomImages(imagesByCategory[category]);
});
