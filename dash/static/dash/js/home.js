// Populating dropdown
for (i = new Date().getFullYear(); i > 1999; i--){
    $('#yearpicker').append($('<option />').val(i).html(i));
}

// Function to reset canvas

resetCanvas = function(){
    var canvas_to_be_deleted = document.getElementById('myLineChart');
    canvas_to_be_deleted.remove();
    $('#updatableChart').append('<canvas id="myLineChart" style="margin: 5px;"></canvas>');
}


function IS(bar_labels,bar_values){

    barctx = document.getElementById('myBarChart').getContext('2d');
    myBarChart = new Chart(barctx, {

        type: 'bar',
        data: {
            // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            labels: bar_labels,
            datasets: [{
                label: '# of Items',
                // data: [12, 19, 3, 5, 2, 3],
                data: bar_values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },

        options: {
            responsive:true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Items Count'
                    }
                }],
                xAxes: [{
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });
}


function YWS(yws_labels,yws_values,pyws_labels,pyws_values,year){

    linectx = document.getElementById("myLineChart").getContext('2d');
    myLineChart = new Chart(linectx, {
    type: 'line',
    data: {
        labels: yws_labels,
        datasets: [{ 
            // data: [86,114,106,106,107,111,133,221,783,278],
            data: yws_values,
            label: year,
            borderColor: "#00179c",
            fill: true
        },
        { 
            // data: [282,350,411,502,635,809,947,142,370,567],
            data: pyws_values,
            label: year-1,
            borderColor: "#a60800",
            fill: true
        }
        ]
    },
    options: {
        responsive:true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Count of Sales'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Months',
                }
            }]
        }
    }
    });

}

function DPC(dpc_labels,dpc_values,pc_labels,pc_values,dpc2_labels,dpc2_values){
            
    doughctx = document.getElementById("myDoughnutChart").getContext('2d');
    myDoughnutChart = new Chart(doughctx, {
        type: 'doughnut',
        data: {
        // labels: ["Unit1", "Unit3"],
        labels: dpc_labels,
        datasets: [
            {
                // label: "Population (millions)",
                backgroundColor: ["#ff3d66","#36a2eb"],
                // data: [5267,433]
                data: dpc_values
            }
        ]
        },
        options: {
            responsive:true,
            maintainAspectRatio: false,
        }
    });

    doughctx2 = document.getElementById("myDoughnutChart2").getContext('2d');
    myDoughnutChart2 = new Chart(doughctx2, {
        type: 'doughnut',
        data: {
        labels: dpc2_labels,
        datasets: [
            {
                backgroundColor: ['#E94B3CFF','#2460A7FF','#FFD653FF'],
                data: dpc2_values
            }
        ]
        },
        options: {
            responsive:true,
            maintainAspectRatio: false,
        }
    });

    piectx = document.getElementById("myPieChart").getContext('2d');
    myPieChart = new Chart(piectx, {
        type: 'pie',
        data: {
        // labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        labels: pc_labels,
        datasets: [{
            backgroundColor: ["#00203FFF", "#ADEFD1FF"],
            // data: [2478,5267,734,784,433]
            data: pc_values
        }]
        },
        options: {
            responsive:true,
            maintainAspectRatio: false,
        }
    });

}
