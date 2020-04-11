import React from 'react';
import Chart from 'chart.js';

class Chart2 extends React.Component {
    state = {
        labels: ['Site Control', 'Urban Planning', 'Architectural Design', 'Engineering', 'Environmental', 'Geotechnical', 'Financing'],
        data: [12, 19, 3, 15, 2, 3, 5]
    }
    componentDidMount=()=>{
        //this makes the chart go in the canvas with id myChart below
        //idk why but this feels awkward, look into later
        //I think because usually i only see getElementById for root
        let elementThatHoldsChart = document.getElementById('myChart2');
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
    }

    decreaseRisk=(index)=>{
        //the index comes from the button clicked, for the index of the label in the state labels array
        //it will be used to change the data at that index in state data array
        console.log('do something with index', index)

        this.setState({
            data: [6,6,6,6,6,6,6]
        })
    }

    render() {
        const {labels, data} = this.state;
        return (
            <article className="chart-article">
                <h1>2. Update with Arbitrary Decrements</h1>
                <div className="buttonDiv">
                    {this.state.labels.map(label =>
                        <button id={`chart2-${label}-button`}
                                key={this.state.labels.indexOf(label)}
                                onClick={() => this.decreaseRisk(this.state.labels.indexOf(label))}>
                                decrease {label} risk
                        </button>
                        )}
                </div>
                <canvas id="myChart2" key={Math.random()}>
                    
                    {/* chart goes in here */}
                    {/* idk why or if canvas is needed, just followed documentation */}
                    {/* canvas seems to ignore width/height specs in css? */}
                </canvas>
                    <p>{JSON.stringify(this.state.data)}</p>
            </article>
        )
    }
}

export default Chart2;