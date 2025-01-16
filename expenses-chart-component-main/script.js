
// DOM elements 

// Fetch data from JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const bars = document.querySelectorAll('.bar');

       // Find the maximum amount in the data
       let maxAmount = 0;
       for (let i = 0; i < data.length; i++) {
         if (data[i].amount > maxAmount) {
           maxAmount = data[i].amount;
         }
       }

    // Loop through the data and update each bar
    data.forEach((item, index) => {
      const bar = bars[index];

      // Set the height of the bar based on the amount
      const barHeight = (item.amount / maxAmount) * 100; // Percentage
      bar.style.height = `${barHeight}%`;

      // Add tooltip (using ::before pseudo-element)
      bar.setAttribute('data-amount', `$${item.amount.toFixed(2)}`);

      if (item.amount === maxAmount) {
        bar.setAttribute('data-max', 'true');
    }
       // Mouseover and mouseout
    bar.addEventListener('mouseover', () => {
        bar.style.background = item.amount === maxAmount
            ? 'hsla(186, 34%, 60%, 0.7)'
            : 'hsla(10, 79%, 65%, 0.7)';
    });
    bar.addEventListener('mouseout', () => {
        bar.style.background = item.amount === maxAmount
            ? 'hsl(186, 34%, 60%)'
            : 'hsl(10, 79%, 65%)';
    });
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    document.querySelector('.chart-box').innerHTML = '<p>Error loading data. Please try again later.</p>';
});
