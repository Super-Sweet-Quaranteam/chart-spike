import React from 'react';
import Chart6 from './Chart6';

class Test6 extends React.Component {
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
                <h1>6. Style It Up</h1>
                <div className="buttonDiv">
                    {this.state.labels.map(label =>
                        <button id={`chart6-${label}-button`}
                                key={this.state.labels.indexOf(label)}
                                onClick={() => this.decreaseRisk(this.state.labels.indexOf(label))}>
                            decrease {label} risk by 1/{this.state.stepsPerLabel[this.state.labels.indexOf(label)]}
                        </button>
                        )}
                </div>
                <Chart6 data={this.state.data} labels={this.state.labels}/>
            </article>
        )
    }
}

export default Test6;