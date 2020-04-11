import React from 'react';
import Chart from 'chart.js';

class Chart1 extends React.Component {
    state = {
        labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5', 'Label6'],
        data: [12, 19, 3, 5, 2, 3]
    }
    componentDidMount(){
        //this makes the chart go in the canvas with id myChart below
        //idk why but this feels awkward, look into later
        //I think because usually i only see getElementById for root
        let elementThatHoldsChart = document.getElementById('myChart1');
        //make a new chart.js instance? and set parameters:
        //type and data are top level, data contains labels and datasets
        //idk why we're doing it like this, as of now myChart doesn't get called
        let myChart = new Chart(elementThatHoldsChart, {
            type: 'radar',
            data: {
                labels: this.state.labels,
                datasets: [{
                    label: 'area label',
                    data: this.state.data,
                }]
            },
        });
        //just to use myChart variable and avoid warning:
        if(!myChart){console.log('no myChart variable')};
    }

    render() {
        return (
            <article className="chart-article">
                <h1>1. Show Basic Chart With Sample Data</h1>
                <canvas id="myChart1">
                    
                    {/* chart goes in here */}
                    {/* idk why or if canvas is needed, just followed documentation */}
                    {/* canvas seems to ignore width/height specs in css? */}
                </canvas>
            </article>
        )
    }
}

export default Chart1;