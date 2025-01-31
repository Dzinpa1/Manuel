// DOM Element Selectors
const elements = {
    // Form Elements
    uploadField: document.querySelector('.upload-field'),
    uploadInput: document.querySelector('.upload-input'),
    uploadBoxInner: document.querySelector('.upload-box-inner'),
    uploadedImageMode: document.querySelector('.uploaded-image-mode'),
    uploadedImage: document.querySelector('.uploaded-image'),
    removeImageBtn: document.querySelector('.remove-image'),
    changeImageBtn: document.querySelector('.change-image'),
    uploadErrorInfo: document.querySelector('.upload-error-info'),
    
    // Input Fields
    nameInput: document.querySelector('.name-input'),
    emailInput: document.querySelector('.email-input'),
    usernameInput: document.querySelector('.username-input'),
    
    // Error Box
    emailErrorBox: document.querySelector('.email-error-info-box'),
    
    // Ticket Page Elements
    ticketPage: document.querySelector('.ticket-page'),
    ticketName: document.querySelector('.ticket-name'),
    ticketEmail: document.querySelector('.ticket-email'),
    ticketAvatarImage: document.querySelector('.ticket-avatar-image'),
    ticketAvatarName: document.querySelector('.ticket-avatar-name'),
    ticketGithubUsername: document.querySelector('.ticket-avatar-github-username'),
    
    // Form and Generate Button
    ticketForm: document.querySelector('.ticket-form'),
    generateBtn: document.querySelector('.generate-btn')
};

// Validation Utilities
const validators = {
    // Validate Email (standard email format)
    validateEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email.trim()) && email.trim().endsWith('.com');
    }
};

// Image Upload Functionality
const imageUpload = {
    // Handle file selection and validation
    handleFileUpload: (event) => {
        const file = event.target.files[0];
        
        // File size check (500KB limit)
        if (file.size > 512000) {
            elements.uploadErrorInfo.style.display = 'block';
            elements.uploadInput.value = ''; // Clear file input
            return;
        }
        
        // File type check
        const allowedTypes = ['image/jpeg', 'image/png'];
        if (!allowedTypes.includes(file.type)) {
            elements.uploadErrorInfo.textContent = 'Invalid file type. Use JPG or PNG.';
            elements.uploadErrorInfo.style.display = 'block';
            return;
        }
        
        // Read and display image
        const reader = new FileReader();
        reader.onload = (e) => {
            elements.uploadedImage.src = e.target.result;
            elements.uploadBoxInner.style.display = 'none';
            elements.uploadedImageMode.style.display = 'flex';
            elements.uploadErrorInfo.style.display = 'none';
        };
        reader.readAsDataURL(file);
    },
    
    // Remove uploaded image
    removeImage: () => {
        elements.uploadedImage.src = 'images/image-avatar.jpg';
        elements.uploadBoxInner.style.display = 'flex';
        elements.uploadedImageMode.style.display = 'none';
        elements.uploadInput.value = ''; // Clear file input
    },

    changeImage: () => {
        // Programmatically trigger file input click
        elements.uploadInput.click();
    }
};

// Form Validation and Submission
const formHandler = {
    // Validate individual input fields
    validateField: (input, validator, errorBox) => {
        const isValid = validator(input.value);
        errorBox.style.display = isValid ? 'none' : 'flex';
        return isValid;
    },
    
    // Comprehensive form validation
    validateForm: () => {
        const isEmailValid = formHandler.validateField(
            elements.emailInput, 
            validators.validateEmail, 
            elements.emailErrorBox
        );
        
        return isEmailValid;
    },
    
    // Generate and display ticket
    generateTicket: (event) => {
        event.preventDefault();
        
        // Validate form before proceeding
        if (!formHandler.validateForm()) return;
        
        // Update ticket page elements
        elements.ticketName.textContent = elements.nameInput.value;
        elements.ticketEmail.textContent = elements.emailInput.value;
        elements.ticketAvatarName.textContent = elements.nameInput.value;
        elements.ticketGithubUsername.textContent = 
            elements.usernameInput.value.startsWith('@') 
                ? elements.usernameInput.value 
                : `@${elements.usernameInput.value}`;
        
        // Use uploaded image or default
        elements.ticketAvatarImage.src = 
            elements.uploadedImage.src || 'images/image-avatar.jpg';
        
        // Switch to ticket page
        document.querySelector('.home-page').style.display = 'none';
        elements.ticketPage.style.display = 'flex';
    }
};

// Event Listeners
function initializeEventListeners() {
    // File upload interactions
    elements.uploadInput.addEventListener('change', imageUpload.handleFileUpload);
    elements.changeImageBtn.addEventListener('click', imageUpload.changeImage);
    elements.removeImageBtn.addEventListener('click', imageUpload.removeImage);
    
    // Form submission
    elements.ticketForm.addEventListener('submit', formHandler.generateTicket);
    
    elements.emailInput.addEventListener('input', () => 
        formHandler.validateField(
            elements.emailInput, 
            validators.validateEmail, 
            elements.emailErrorBox
        )
    );
}

// Initialize the application
document.addEventListener('DOMContentLoaded', initializeEventListeners);