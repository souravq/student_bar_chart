/*=========================================================================================
    File Name: column.js
    Description: Chartjs column chart
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Column chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#myChart");

    // Chart Options
    var chartOptions = {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each bar to be 2px wide and green
        elements: {
            rectangle: {
                borderWidth: 2,
                borderColor: 'rgb(0, 255, 0)',
                borderSkipped: 'bottom'
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
        legend: {
            position: 'top',
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                }
            }]
        },
        title: {
            display: true,
            text: 'Property Bar Chart'
        }
    };

    // Chart Data
    var chartData = {
        labels: ["January", "February", "March"],
        datasets: [{
            label: "subject a",
            data: [65, 59, 80, 81],
            backgroundColor: "#28D094",
            hoverBackgroundColor: "rgba(22,211,154,.9)",
            borderColor: "transparent"
        }, {
            label: "subject b",
            data: [30, 48, 40, 19],
            backgroundColor: "#F98E56",
            hoverBackgroundColor: "rgba(249,142,118,.9)",
            borderColor: "transparent"
        }, {
            label: "subject c",
            data: [28, 45, 70, 59],
            backgroundColor: "#F98E76",
            hoverBackgroundColor: "rgba(249,142,118,.9)",
            borderColor: "transparent"
        },{
            label: "subject d",
            data: [50, 40, 50, 79],
            backgroundColor: "#F98E09",
            hoverBackgroundColor: "rgba(249,142,118,.9)",
            borderColor: "transparent"
        }]
    };

    var config = {
        type: 'bar',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var lineChart = new Chart(ctx, config);
});