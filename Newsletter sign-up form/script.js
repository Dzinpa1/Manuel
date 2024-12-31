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

// Reset error state
function resetErrorState() {
    errorMessage.style.display = 'none';
    emailInput.style.border = '1px solid hsl(231, 7%, 60%)';
    emailInput.style.background = 'hsl(0, 0%, 100%)';
}   


// Function for submiting

function submit() {
    const email = emailInput.value.trim();
    if (!email || !isValidEmail(email)) {
        // Show error state
        errorMessage.style.display = 'block';
        emailInput.style.border = '1px solid hsl(4, 100%, 67%)';  
        emailInput.style.background = 'hsla(4, 100%, 67%, 0.15)';   
    } else {
        setTimeout(() => {
            // Show success state
            mainContainer.style.display = 'none';
            successState.style.display = 'flex';
            successEmail.textContent = email;
        }, 800);
    }
}

// Submitting on button
subscribeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    submit();
});

// Submitting on keyboard (Enter)
emailInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        submit()
    }
})

// Reset error state when input is modified
emailInput.addEventListener('input', () => {
    resetErrorState();
});

// Function for dismiss message
dismissMessage.addEventListener('click', () => {
    setTimeout(() => {
        successState.style.display = 'none';
        mainContainer.style.display = 'flex';
        emailInput.value = '';
        resetErrorState(); // Reset error when dismissing
    }, 500);
});
