import React from 'react';
import Chart from 'chart.js';
//declare variable for chart? 
let myRadarChart;

class Chart2 extends React.Component {
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
        let elementThatHoldsChart = document.getElementById('myChart3');
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
        })
    }


    render() {
        return (
                <canvas id="myChart3"/>
        )
    }
}

export default Chart2;