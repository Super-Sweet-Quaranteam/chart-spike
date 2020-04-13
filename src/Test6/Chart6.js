import React from 'react';
import Chart from 'chart.js';
//declare variable for chart? 
let myRadarChart;

class Chart6 extends React.Component {
    state = {
        startingData: [],
        chartOpacity: 100,
    }

    chartRef=React.createRef();

    componentDidMount(){
        this.setState({startingData: this.props.data})
        this.buildChart();
    }

    componentDidUpdate(){
        this.buildChart();
    }

    buildChart() {
        let elementThatHoldsChart = document.getElementById('myChart6');
        const {data, labels}=this.props; //object destructuring!

        //if myRadarChart has been built, destroy it. 
        if (typeof myRadarChart !== "undefined") myRadarChart.destroy();

        myRadarChart= new Chart(elementThatHoldsChart, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: this.props.backgroundColor,
                    borderCapStyle: 'butt',
                    borderColor: '',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 0,
                    hoverBackgroundColor:'blue',
                    hoverBorderCapStyle:'',
                    hoverBorderColor:'',
                    hoverBorderDash: '',
                    hoverBorderDashOffset: '',
                    hoverBorderJoinStyle: '',
                    hoverBorderWidth:'',
                    fill: true,
                    label: 'current risk',
                    order: 0,
                    lineTension: 0.4,
                    pointBackgroundColor: 'rgba(0, 0, 0, .1)',
                    pointBorderColor: 'rgba(0,0,0,.1)',
                    pointBorderWidth: 1,
                    pointHitRadius: 1,
                    pointHoverBackgroundColor: '',
                    pointHoverBorderColor:'',
                    pointHoverBorderWidth:1,
                    pointHoverRadius:4,
                    pointRadius: 0,
                    pointRotation: 0,
                    pointStyle: 'circle',
                    spanGaps: ''
                }
            ]
                },
            options:{
                scale: {
                    angleLines: {
                        display: false,
                    },
                    gridLines: {
                        display: false,
                    },
                    pointLabels: {
                        display: true,
                    },
                    ticks: {
                        display: false,
                        beginAtZero: false,
                        suggestedMin: -10,
                        suggestedMax: 100,
                    }
                },
                legend: {
                    display: false,
                },
                gridLines: {
                    display: false,
                }
            }
        })
    }


    render() {
        return (
                <div className="canvas-holder">
                    <canvas id="myChart6"/>
                </div>
        )
    }
}

export default Chart6;