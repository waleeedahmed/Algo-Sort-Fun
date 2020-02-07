import React from 'react';
import classes from './ArraySortData.css';
import withContext from '../../../../context/withContext';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

class ArraySortData extends React.Component {
    
    // displays the swapping status whether swap successful or not 
    compareNumbers = () => {

        if (this.props.value.bubble) {
            if ((this.props.value.currIdx2 || this.props.value.currIdx2 === 0) && (this.props.value.arrayStatus === -1 || this.props.value.arrayStatus === 0)) {
                return <p>Currently comparing {this.props.value.generatedNumArray[this.props.value.currIdx2]} and {this.props.value.generatedNumArray[this.props.value.currIdx2 + 1]}</p>
            }
            else if (this.props.value.currIdx2 && this.props.value.arrayStatus === 1) {
                return <p style = {{color: 'rgb(201, 142, 16)'}}>Successfully Swapped!</p>
            }
            else if (this.props.value.arrayStatus === 3) {
                return <p style = {{color: '#bf150f'}}>Not Swapped</p>
            }
            else if (this.props.value.arrayStatus === 4) {
                return <p style = {{color: 'rgb(248, 28, 138)'}}>Sorting Complete</p>
            }
            else {
                return <p>Waiting to get current array numbers...</p>
            }
        }
        else if (this.props.value.algorithms.selection) {
            if ((this.props.value.currIdx2 || this.props.value.currIdx) && this.props.value.showSwapping && this.props.value.arrayStatus === 6) {
                return <p>Now swapping <span style = {{color: 'rgb(140, 3, 194)'}}> {this.props.value.generatedNumArray[this.props.value.currIdx2]} </span>
                         and <span style = {{color: 'rgb(140, 3, 194)'}}> {this.props.value.generatedNumArray[this.props.value.currIdx]} </span></p>
            } 
            else if ((this.props.value.currIdx2 || this.props.value.currIdx) && !this.props.value.showSwapping && this.props.value.arrayStatus === 1) {
                return <p style = {{color: 'rgb(201, 142, 16)'}}>Successfully Swapped!</p>
            }
            else if  ((isNaN(this.props.value.currIdx2 ) || isNaN(this.props.value.currIdx)) && !this.props.value.showSwapping && this.props.value.arrayStatus === 8) {
                return <p style = {{color: '#bf150f'}}>No new minimum was found for a swap</p>
            }
            else if (this.props.value.arrayStatus === 7) {
                return <p style = {{color: 'rgb(248, 28, 138)'}}>Sorting Complete</p>
            }
            else if ((this.props.value.arrayStatus === 0 || this.props.value.arrayStatus === 3 || this.props.value.arrayStatus === 4) && (this.props.value.currIdx2 || this.props.value.currIdx)) {
                return <p>Inner for loop running. Currently at position: <span style = {{color: 'rgb(248, 28, 28)'}}> {this.props.value.currIdx} </span></p>
            }
            else return <p>Sorting status currently not available</p>
        }
    }

    render() {
        let displayData;

        //console.log('sorting stats render')
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
        else if (this.props.value.algorithms.selection) {
            displayData = (
                <Auxiliary>
                    <h3 style = {{fontSize: '1.34rem', fontFamily: 'Lato, sans-serif'}}>Sorting Statistics</h3>
                    
                    {this.compareNumbers()}
    
                    {this.props.value.currIdx2 || this.props.value.currIdx2 === 0 ? <p>Current Minimum is:  <span style = {{color: 'rgb(140, 3, 194)'}}> {this.props.value.generatedNumArray[this.props.value.currIdx2]} </span></p> : 
                        <span>Waiting for current Minimum</span>}
    
                    
                    <h3 style = {{fontSize: '1.25rem', textDecoration: 'underline'}}>Time Complexity</h3>
                    <p>Best: O(n&#178;)</p>
                    <p>Average: O(n&#178;)</p>
                    <p>Worst: O(n&#178;)</p>

                    <h3 style = {{fontSize: '1.25rem', textDecoration: 'underline'}}>Space Complexity</h3>
                    <p>Worst: O(1)</p>
                    <p style = {{fontSize: '1rem'}}>{this.props.value.vsPressed ? <span style = {{color: 'coral'}}>
                            Did you know? Selection Sort on average has a lower time complexity performance than bubble or insertion sort. 
                        </span> : null}</p>
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