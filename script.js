// getElementsById()

// getElementsByClassName()

// getElementsByTagName()

// querySelector()

// querySelectorAll()



// DOM elements 
const mainPage = document.getElementsByClassName('rating-page')[0];

const thankyouPage = document.getElementsByClassName('thank-you-page')[0];

const submitBtn = document.getElementsByClassName('submit-btn')[0];

const rateValue = document.getElementsByClassName('rate')[0];

const roundBtns = document.querySelectorAll('.round-btn');

const closeBtn = document.querySelector('.close-btn'); 

// Variable to store the selected rating
let selectedRating = null;

// Add event listeners to round buttons
roundBtns.forEach((button) => {
    button.addEventListener('click', () => {
        // Remove active state from all buttons
        roundBtns.forEach((btn) => btn.classList.remove('active'));
        
        // Add active state to the clicked button
        button.classList.add('active');
        
        // Set the selected rating
        selectedRating = button.textContent;
    });
});
// Submit Function
function submit() {
    if (selectedRating) {
        // Disable the submit button
        submitBtn.disabled = true; // Disable the button
        console.log('Submit button disabled'); // Debugging log
        submitBtn.textContent = 'Submitting...'; // Temporary visual feedback

        setTimeout(() => {
            // Hide the main page and show the thank-you page
            mainPage.style.display = 'none';
            thankyouPage.style.display = 'flex';

            // Display the selected rating
            rateValue.textContent = selectedRating;

            // Re-enable the submit button after transition
            submitBtn.disabled = false; // Enable the button again
            console.log('Submit button enabled'); // Debugging log
            submitBtn.textContent = 'Submit'; // Reset button text
        }, 800);
    } else {
        alert('Please select a rating before submitting.');
    }
}

// Submitting on button
submitBtn.addEventListener('click', (event) => {
    submit();
});

function resetState(){
    roundBtns.forEach((btn) => btn.classList.remove('active'));
    selectedRating = null;
    submitBtn.disabled = false; 
    submitBtn.textContent = 'Submit';
}

closeBtn.addEventListener('click', () => {
    thankyouPage.style.display = 'none'; // Hide the popup
    mainPage.style.display = 'flex'; // Show the rating page again
    resetState(true);
});

