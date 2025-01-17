// Get DOM elements
const adviceId = document.querySelector('.adviceID');
const adviceText = document.querySelector('.advice');
const generateBtn = document.querySelector('.generate-btn');

// Function to fetch new advice
async function getAdvice() {
    try {
        adviceText.style.opacity = '0';
        
        const response = await fetch('https://api.adviceslip.com/advice?' + Math.random());
        const data = await response.json();
        
        setTimeout(() => {
            adviceId.textContent = data.slip.id;
            adviceText.textContent = `"${data.slip.advice}"`;
            adviceText.style.opacity = '1';
        }, 300);
    } catch (error) {
        console.error('Error fetching advice:', error);
        adviceText.textContent = 'Oops! Failed to get advice. Please try again.';
        adviceText.style.opacity = '1';
    }
}

// Get advice when page loads
getAdvice();

// Get new advice when button is clicked
generateBtn.addEventListener('click', () => {
    // Add a slight rotation animation to the dice
    generateBtn.style.transform = 'rotate(360deg)';
    
    // Get new advice
    getAdvice();
    
    // Reset the rotation after animation
    setTimeout(() => {
        generateBtn.style.transform = 'rotate(0deg)';
    }, 300);
});

// Optional: Add transition for smooth rotation animation
generateBtn.style.transition = 'transform 0.3s ease';