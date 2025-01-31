// Get all the elements we need to work with
const uploadField = document.querySelector('.upload-field');
const uploadInput = document.querySelector('.upload-input');
const uploadBoxInner = document.querySelector('.upload-box-inner');
const uploadedImageMode = document.querySelector('.uploaded-image-mode');
const uploadedImage = document.querySelector('.uploaded-image');
const removeImageBtn = document.querySelector('.remove-image');
const changeImageBtn = document.querySelector('.change-image');
const uploadErrorInfo = document.querySelector('.upload-error-info');

// Input fields
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const usernameInput = document.querySelector('.username-input');

// Error message boxes
const nameErrorBox = document.querySelector('.full-name-error-box');
const emailErrorBox = document.querySelector('.email-error-info-box');
const usernameErrorBox = document.querySelector('.username-error-box');

// Ticket page elements
const ticketPage = document.querySelector('.ticket-page');
const ticketName = document.querySelector('.ticket-name');
const ticketEmail = document.querySelector('.ticket-email');
const ticketAvatarImage = document.querySelector('.ticket-avatar-image');
const ticketAvatarName = document.querySelector('.ticket-avatar-name');
const ticketGithubUsername = document.querySelector('.ticket-avatar-github-username');

// Form and generate button
const ticketForm = document.querySelector('.ticket-form');
const generateBtn = document.querySelector('.generate-btn');

// Image Upload Functionality
function setupImageUpload() {
    // Maximum file size (500KB)
    const MAX_FILE_SIZE = 512000;

    // Handle file selection
    uploadInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        
        // Reset error message
        uploadErrorInfo.style.display = 'none';

        // Check file size
        if (file.size > MAX_FILE_SIZE) {
            uploadErrorInfo.style.display = 'block';
            return;
        }

        // Read and preview the image
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
            uploadBoxInner.style.display = 'none';
            uploadedImageMode.style.display = 'flex';
        };
        reader.readAsDataURL(file);
    });

    // Remove image button
    removeImageBtn.addEventListener('click', function(event) {
        event.preventDefault();
        uploadedImage.src = 'images/image-avatar.jpg';
        uploadBoxInner.style.display = 'flex';
        uploadedImageMode.style.display = 'none';
        uploadInput.value = ''; // Clear file input
    });

    // Change image button
    changeImageBtn.addEventListener('click', function(event) {
        event.preventDefault();
        uploadInput.click();
    });
}

// Form Validation Functionality
function setupFormValidation() {
    // Prevent default form validation
    ticketForm.setAttribute('novalidate', '');

    // Validate name
    function validateName() {
        const isValid = nameInput.value.trim().length > 0;
        nameErrorBox.style.display = isValid ? 'none' : 'flex';
        nameInput.classList.toggle('error', !isValid);
        return isValid;
    }

    // Validate email
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(emailInput.value);
        emailErrorBox.style.display = isValid ? 'none' : 'flex';
        emailInput.classList.toggle('error', !isValid);
        return isValid;
    }

    // Validate username
    function validateUsername() {
        const username = usernameInput.value.trim();
        const isValid = username.length >= 3 && username.length <= 15;
        usernameErrorBox.style.display = isValid ? 'none' : 'flex';
        usernameInput.classList.toggle('error', !isValid);
        return isValid;
    }

    // Generate ticket when form is valid
    function generateTicket() {
        // Update ticket details
        ticketName.textContent = nameInput.value;
        ticketEmail.textContent = emailInput.value;
        ticketAvatarName.textContent = nameInput.value;
        ticketGithubUsername.textContent = `@${usernameInput.value}`;

        // Update ticket avatar
        ticketAvatarImage.src = uploadedImage.src;

        // Switch to ticket page
        document.querySelector('.home-page').style.display = 'none';
        ticketPage.style.display = 'flex';
    }

    // Add input validation listeners
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    usernameInput.addEventListener('input', validateUsername);

    // Handle generate button click
    generateBtn.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Check if all validations pass
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isUsernameValid = validateUsername();

        // Generate ticket if all validations pass
        if (isNameValid && isEmailValid && isUsernameValid) {
            generateTicket();
        }
    });
}

// Set up everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    setupImageUpload();
    setupFormValidation();
});