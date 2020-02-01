import React from 'react';
import classes from './ArraySortData.css';
import withContext from '../../../../context/withContext';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

class ArraySortData extends React.Component {
    
    // displays the swapping status whether swap successful or not 
    compareNumbers = () => {
        if ((this.props.value.bubbleIdx2 || this.props.value.bubbleIdx2 === 0) && (this.props.value.bubbleArrayStatus === -1 || this.props.value.bubbleArrayStatus === 0)) {
            return <p>Currently comparing {this.props.value.generatedNumArray[this.props.value.bubbleIdx2]} and {this.props.value.generatedNumArray[this.props.value.bubbleIdx2 + 1]}</p>
        }
        else if (this.props.value.bubbleIdx2 && this.props.value.bubbleArrayStatus === 1) {
            return <p style = {{color: 'rgb(201, 142, 16)'}}>Successfully Swapped!</p>
        }
        else if (this.props.value.bubbleArrayStatus === 3) {
            return <p style = {{color: '#bf150f'}}>Not Swapped</p>
        }
        else {
            return <p>Waiting to get current array numbers...</p>
        }
    }

    render() {
        let displayData;

        console.log('sorting stats render')
        if (this.props.value.algorithms.bubble) {
            displayData = (
                <Auxiliary>
                    <h3 style = {{fontSize: '1.34rem', fontFamily: 'Lato, sans-serif'}}>Sorting Statistics</h3>
                    
                    {this.compareNumbers()}
    
                    <p>Current value of swapsPerformed: {this.props.value.swapsPerformed ? <span style = {{color: 'green'}}>{this.props.value.swapsPerformed.toString()}</span> : 
                        <span style = {{color: '#bf150f'}}>{this.props.value.swapsPerformed.toString()}</span>}</p>
    
                    
                    <h3 style = {{fontSize: '1.25rem', textDecoration: 'underline'}}>Time Complexity</h3>
                    <p>Best: O(n)</p>
                    <p>Average: O(n&#178;)</p>
                    <p>Worst: O(n&#178;)</p>

                    <h3 style = {{fontSize: '1.25rem', textDecoration: 'underline'}}>Space Complexity</h3>
                    <p>Worst: O(1)</p>
                </Auxiliary>
            )
        }
    
    
        return (
            <div className = {classes.ArraySortData}>
                {displayData}
            </div>
        )
    }

}



export default withContext(ArraySortData);