document.addEventListener('DOMContentLoaded', function() {
    // Get references to form elements and the submit button
    const occassionSelect = document.getElementById('occassion');
    const submitButton = document.getElementById('submitButton');
    const loaderContainer = document.getElementById('loaderContainer');

    // Add event listener to the submit button
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Get selected value from the dropdown
        const selectedValue = occassionSelect.value;

        // Show loader animation
        showLoader();

        // Simulate delay (5 seconds) before proceeding
        setTimeout(function() {
            // Hide loader animation
            hideLoader();

            // Redirect to corresponding page based on the selected value
            switch (selectedValue) {
                case 'interview':
                    window.location.href = 'Men_interview.html';
                    break;
                case 'marrige':
                    window.location.href = 'Men_marriage.html';
                    break;
                case 'sport':
                    window.location.href = 'Men_sports.html';
                    break;
                case 'nightWear':
                    window.location.href = 'Men_nightwear.html';
                    break;
                case 'casual':
                    window.location.href = 'Men_casual.html';
                    break;
                default:
                    // Do nothing if no selection is made
                    break;
            }
        }, 4000); // 5-second delay
    });

    // Function to show loader animation
    function showLoader() {
        loaderContainer.style.display = 'flex'; // Show loader container
    }

    // Function to hide loader animation
    function hideLoader() {
        loaderContainer.style.display = 'none'; // Hide loader container
    }
});
