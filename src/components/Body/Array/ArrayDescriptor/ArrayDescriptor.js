import React from 'react';
import classes from './ArrayDescriptor.css';
import withContext from '../../../../context/withContext';
//import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

class ArrayDescriptor extends React.Component {

    render() {

        let arrDescValue = <p>This is the array descriptor</p>

        if (this.props.value.algorithms.bubble) {
            arrDescValue = (
                <p>
                    Bubble Sort traverses the array comparing values and swaps if
                    the smaller value is ahead of the larger one. The entire process 
                    keeps repeating until no more swaps have to be performed. 
                </p>
            )
        }
        else if (this.props.value.algorithms.selection) {
            arrDescValue = (
                <p>
                    Selection Sort 
                </p>
            )
        }
        else if (this.props.value.algorithms.insertion) {
            arrDescValue = (
                <p>
                    Insertion Sort
                </p>
            )
        }
        else if (this.props.value.algorithms.merge) {
            arrDescValue = (
                <p>
                    Merge Sort 
                </p>
            )
        }
  
        return (
            <div className = {classes.ArrayDescriptor}>
                {arrDescValue}
            </div>
        )
    }
} 

export default withContext(ArrayDescriptor);