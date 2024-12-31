// DOM elements 
const mainContainer = document.getElementsByClassName('container')[0];

const errorMessage = document.getElementsByClassName('error-message')[0];

const emailInput = document.getElementsByClassName('email-input')[0];

const subscribeBtn = document.getElementsByClassName('subscribe-btn')[0];

const successState = document.getElementsByClassName('success-state')[0];

const successEmail = document.getElementsByClassName('success-email')[0];

const dismissMessage = document.getElementsByClassName('dismiss-message')[0];

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.trim().endsWith('.com');
}

function toggleErrorState(hasError) {
    if (hasError) {
        errorMessage.style.display = 'block';
        emailInput.classList.add('error'); // Add error styling
    } else {
        errorMessage.style.display = 'none';
        emailInput.classList.remove('error'); // Remove error styling
    }
}

// Submit Function
function submit() {
    const email = emailInput.value.trim();

    if (!email || !isValidEmail(email)) {
        toggleErrorState(true); // Show error
    } else {
        setTimeout(() => {
            // Hide main container and show success
            mainContainer.style.display = 'none';
            successState.style.display = 'flex';
            successEmail.textContent = email; // Display email
        }, 800);
    }
}

// Submitting on button
subscribeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    submit();
});

// Submitting using enter key on keyboard
emailInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        submit();
    }
});


// Reset error state when input is modified
mainContainer.addEventListener('input', (event) => {
    if (event.target.classList.contains('email-input')) {
        toggleErrorState(false); // Reset error
    }
});

// Dismiss success state
dismissMessage.addEventListener('click', () => {
    setTimeout(() => {
        successState.style.display = 'none';
        mainContainer.style.display = 'flex';
        emailInput.value = ''; // Clear input
        toggleErrorState(false); // Reset error state
    }, 500);
});
