const adviceId = document.querySelector('.adviceID');
const adviceText = document.querySelector('.advice');
const generateBtn = document.querySelector('.generate-btn');

async function getAdvice() {
    try {
        adviceText.style.opacity = '0';
        const response = await fetch('https://api.adviceslip.com/advice?' + Math.random());
        const data = await response.json();
        
        adviceId.textContent = data.slip.id;
        adviceText.textContent = `"${data.slip.advice}"`;
        adviceText.style.opacity = '1';
    } catch (error) {
        handleError(error);
    }
}

function handleError(error) {
    console.error('Detailed error:', error);
    adviceText.style.opacity = '1';
    if (error.name === 'TypeError') {
        adviceText.textContent = 'Network error! Please check your internet connection.';
    } else if (error.message.includes('status: 429')) {
        adviceText.textContent = 'Too many requests! Please try again later.';
    } else {
        adviceText.textContent = `Error: ${error.message}`;
    }
}

generateBtn.addEventListener('click', () => {
    generateBtn.style.transform = 'rotate(360deg)';
    getAdvice();
    setTimeout(() => generateBtn.style.transform = 'rotate(0deg)', 300);
});

generateBtn.style.transition = 'transform 0.3s ease';

// Fetch advice when page loads
getAdvice();
