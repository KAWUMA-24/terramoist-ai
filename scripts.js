// JavaScript for handling sensor data and comments

$(document).ready(function() {
    // Load sensor data dynamically
    function loadSensorData() {
        const sensorDataContainer = $('#sensor-data-container');
        const commentsContainer = $('#comments-container');
        
        // Simulate fetching data
        const sensorData = [
            { section: 'North Field', moistureLevel: 32 },
            { section: 'South Field', moistureLevel: 45 },
            { section: 'East Field', moistureLevel: 28 },
            { section: 'West Field', moistureLevel: 40 },
        ];

        sensorData.forEach(data => {
            const dataHtml = `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${data.section}</h5>
                        <p class="card-text">Moisture Level: ${data.moistureLevel}%</p>
                    </div>
                </div>
            `;
            sensorDataContainer.append(dataHtml);

            // Provide advice if moisture level is below 40%
            if (data.moistureLevel < 40) {
                const adviceHtml = `
                    <div class="alert alert-warning">
                        <strong>Advice:</strong> The moisture level in the ${data.section} is below 40%. It's time to water this section.
                    </div>
                `;
                commentsContainer.append(adviceHtml);
            }
        });
    }

    // Execute functions
    if ($('#sensor-data-container').length) {
        loadSensorData();
    }
});
// JavaScript for handling sensor data and charts

$(document).ready(function() {
    // Load sensor data dynamically
    function loadSensorData() {
        const sensorDataContainer = $('#sensor-data-container');
        // Simulate fetching data
        const sensorData = [
            { section: 'North Field', moistureLevel: 32 },
            { section: 'South Field', moistureLevel: 45 },
            { section: 'East Field', moistureLevel: 28 },
            { section: 'West Field', moistureLevel: 40 },
        ];

        sensorData.forEach(data => {
            const dataHtml = `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${data.section}</h5>
                        <p class="card-text">Moisture Level: ${data.moistureLevel}%</p>
                    </div>
                </div>
            `;
            sensorDataContainer.append(dataHtml);
        });
    }

    // Chart.js for moisture data analysis
    function loadMoistureChart() {
        const ctx = document.getElementById('moisture-chart').getContext('2d');
        const moistureChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['North Field', 'South Field', 'East Field', 'West Field'],
                datasets: [{
                    label: 'Moisture Level (%)',
                    data: [32, 45, 28, 40],
                    backgroundColor: ['#007BFF', '#28A745', '#FFC107', '#DC3545'],
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
    }

    // Execute functions
    if ($('#sensor-data-container').length) {
        loadSensorData();
    }

    if ($('#moisture-chart').length) {
        loadMoistureChart();
    }
});
