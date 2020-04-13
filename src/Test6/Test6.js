import React from 'react';
import Chart6 from './Chart6';

class Test6 extends React.Component {
        //start all risk levels at "100%"
        state = {
        labels: ['Site Control', 
                'Urban Planning & Design', 
                'Architectural Design', 
                'Engineering', 
                'Environmental', 
                'Geotechnical', 
                'Capital Markets',
                'Financing/Pro Forma Modeling',
                'Community Engagement',
                'Construction',
                'Commissioning',
                'Property Management',
                'Asset Management',
                'Disposition',
                'Leasing and Marketing',
                'Legal'],
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,],
            stepsPerLabel: [3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5, 4]
    }

    getTransparency=()=>{
        let sum=0;
        let data=this.state.data;
        let backgroundColor='white';
        for(let i=0; i<data.length; i++){
            sum+=data[i]
        }
        let transparency=sum/data.length/160;
        if ((sum/data.length)>50){
            backgroundColor=`rgba(255, 0, 0, ${transparency})`
        }
        else{ backgroundColor=`rgba(255,0,0, ${(1-transparency)/2})`}
        return backgroundColor;
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
                <h1>6. Style</h1>
                <div className="buttonDiv6">
                    <h2>simulate completion of a task in one of the following categories:</h2>
                    {this.state.labels.map(label =>
                        <button id={`chart6-${label}-button`}
                                key={this.state.labels.indexOf(label)}
                                onClick={() => this.decreaseRisk(this.state.labels.indexOf(label))}>
                            {label}
                        </button>
                        )}
                </div>
                
                <div className="chart-div-6">
                    <h2 id="chart-label">risk level</h2>
                    <Chart6 data={this.state.data} labels={this.state.labels} backgroundColor={this.getTransparency()}/>
                </div>
            </article>
        )
    }
}

export default Test6;