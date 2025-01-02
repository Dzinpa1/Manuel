// getElementsById()

// getElementsByClassName()

// getElementsByTagName()

// querySelector()

// querySelectorAll()



// DOM elements 
const shareBtn = document.querySelector('.share-btn');
const shareBubble = document.querySelector('.share-bubble');

// Toggle the 'active' class when the share button is clicked
shareBtn.addEventListener('click', () => {
    shareBubble.classList.toggle('active'); // Show or hide bubble
});