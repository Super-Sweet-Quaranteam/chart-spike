import React from 'react';
import Chart2 from './Chart2';

class Test2 extends React.Component {
        state = {
        labels: ['Site Control', 'Urban Planning', 'Architectural Design', 'Engineering', 'Environmental', 'Geotechnical', 'Financing'],
        data: [12, 19, 3, 15, 2, 3, 5]
    }

        decreaseRisk=(index)=>{
        //the index comes from the button clicked, for the index of the label in the state labels array
        //it will be used to change the data at that index in state data array
        let oldData = this.state.data
        //i coudn't figure out splicing right away. this works but doesn't feel best practice-y
        let newData = [];
            for (let i=0; i<oldData.length; i++){
                if (i===index){
                    newData.push(oldData[index]-1)
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
                <Chart2 data={this.state.data} labels={this.state.labels}/>
            </article>
        )
    }
}

export default Test2;






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





