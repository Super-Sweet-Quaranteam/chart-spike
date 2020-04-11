import React from 'react';
import Chart from 'chart.js';
//declare variable for chart? 
let myRadarChart;

class Chart5 extends React.Component {
    state = {
        startingData: []
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
        let elementThatHoldsChart = document.getElementById('myChart5');
        const {data, labels}=this.props; //object destructuring!

        //if myRadarChart has been built, destroy it. 
        if (typeof myRadarChart !== "undefined") myRadarChart.destroy();

        myRadarChart= new Chart(elementThatHoldsChart, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'current risk',
                    data: data,
                    borderColor: 'green'
                }]
                },
            options:{
                scale: {
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100,
                    }
                }
            }
        })
    }


    render() {
        return (
                <canvas id="myChart5"/>
        )
    }
}

export default Chart5;