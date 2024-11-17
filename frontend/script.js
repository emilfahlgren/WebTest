document.getElementById('toggleGraphButton') .addEventListener('click', function() {
    const chartContainer = document.getElementById('chart-container');

    // Toggle visibility of the chart container
    if (chartContainer.style.display === 'none') {
        chartContainer.style.display = 'block'; // Show chart
    } else {
        chartContainer.style.display = 'none'; // Hide chart
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the canvas element
    const ctx = document.getElementById('workoutChart').getContext('2d');

    // Create a new chart using Chart.js
    workoutChart = new Chart(ctx, {
        type: 'line', // chart type (can be 'line', 'bar', 'pie', etc.)
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'], // X-axis labels
            datasets: [{
                label: 'Bench Press (kg)',
                data: [60, 62.5, 65, 65, 70], // Y-axis data points (e.g., weight lifted)
                borderColor: 'rgba(75, 192, 192, 1)', // Line color
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
