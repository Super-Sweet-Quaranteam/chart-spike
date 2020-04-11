import React from 'react';
import Chart4 from './Chart4';

class Test4 extends React.Component {
        //start all risk levels at "100%"
        state = {
        labels: ['Site Control', 'Urban Planning', 'Architectural Design', 'Engineering', 'Environmental', 'Geotechnical', 'Financing'],
        data: [100, 100, 100, 100, 100, 100, 100],
        stepsPerLabel: [4,6,8,3,5,10,7]
    }

        decreaseRisk=(index)=>{
        //the index comes from the button clicked, for the index of the label in the state labels array
        //it will be used to change the data at that index in state data array
        let oldData = this.state.data
        //i coudn't figure out splicing right away. this works but doesn't feel best practice-y
        let newData = [];
            for (let i=0; i<oldData.length; i++){
                if (i===index && oldData[index]>0){
                    newData.push(oldData[index]-(100/this.state.stepsPerLabel[index]))
                }
                else newData.push(oldData[i])
            }
        //update the state with that one item at index changed -1
        this.setState({
            data: newData
        })
    }

    render() {
        return (
            <article className="chart-article">
                <h1>4. Decrement Based on Varying Fractions</h1>
                <div className="buttonDiv">
                    {this.state.labels.map(label =>
                        <button id={`chart4-${label}-button`}
                                key={this.state.labels.indexOf(label)}
                                onClick={() => this.decreaseRisk(this.state.labels.indexOf(label))}>
                            decrease {label} risk by 1/{this.state.stepsPerLabel[this.state.labels.indexOf(label)]}
                        </button>
                        )}
                </div>
                <Chart4 data={this.state.data} labels={this.state.labels}/>
            </article>
        )
    }
}

export default Test4;






//     componentDidMount=()=>{
//         //this makes the chart go in the canvas with id myChart below
//         //idk why but this feels awkward, look into later
//         //I think because usually i only see getElementById for root
//         let elementThatHoldsChart = document.getElementById('myChart2');
//         //make a new chart.js instance? and set parameters:
//         //type and data are top level, data contains labels and datasets
//         //idk why we're doing it like this, as of now myChart doesn't get called
//         let myChart = new Chart(elementThatHoldsChart, {
//             type: 'radar',
//             data: {
//                 labels: this.state.labels,
//                 datasets: [{
//                     label: 'area label',
//                     data: this.state.data,
//                 }]
//             },
//         });
//     }





