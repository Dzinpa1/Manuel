// getElementsById()

// getElementsByClassName()

// getElementsByTagName()

// querySelector()

// querySelectorAll()



// DOM elements 

const showBtns = document.querySelectorAll('.show');

showBtns.forEach(button => {
    button.addEventListener('click', () => {
        // Find the paragraph within the same accordion-row
        const paragraph = button.closest('.accordion-row').querySelector('.row-paragraph');
        paragraph.classList.toggle('active'); // Toggle active class
        
        const img = button.querySelector('img');
        if (paragraph.classList.contains('active')) {
            img.src = 'images/icon-minus.svg'; // Change to minus icon
            img.alt = 'minus-icon'; // Update alt text for accessibility
        } else {
            img.src = 'images/icon-plus.svg'; // Change back to plus icon
            img.alt = 'plus-icon'; // Update alt text
        }
    });
});