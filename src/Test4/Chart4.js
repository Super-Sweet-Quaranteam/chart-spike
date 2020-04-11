import React from 'react';
import Chart from 'chart.js';
//declare variable for chart? 
let myRadarChart;

class Chart4 extends React.Component {
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
        let elementThatHoldsChart = document.getElementById('myChart4');
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
                },
                //this doesn't change after component mounts
                {
                    label: 'starting risk',
                    data: this.state.startingData,
                    borderColor: 'red'
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
                <canvas id="myChart4"/>
        )
    }
}

export default Chart4;