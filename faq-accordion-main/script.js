// DOM elements 
const accordionRows = document.querySelectorAll('.accordion-row');

accordionRows.forEach((row) => {
    const button = row.querySelector('.show'); 
    const heading = row.querySelector('.row-heading'); 
    const paragraph = row.querySelector('.row-paragraph'); 
    const img = button.querySelector('img'); 

    // Function to toggle active class and switch icon
    const toggleAccordion = () => {
        paragraph.classList.toggle('active'); // Toggle the visibility of the paragraph

        // Toggle image source between plus and minus
        if (paragraph.classList.contains('active')) {
            img.src = 'images/icon-minus.svg';
            img.alt = 'minus-icon'; 
        } else {
            img.src = 'images/icon-plus.svg'; 
            img.alt = 'plus-icon';
        }
    };

    // Add event listeners to both button and heading
    button.addEventListener('click', toggleAccordion); 
    heading.addEventListener('click', toggleAccordion); 
});
