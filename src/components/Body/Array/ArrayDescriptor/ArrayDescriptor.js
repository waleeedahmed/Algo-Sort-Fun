import React from 'react';
import classes from './ArrayDescriptor.css';
import withContext from '../../../../context/withContext';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

class ArrayDescriptor extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.value.algorithms.bubble !== this.props.value.algorithms.bubble ||  nextProps.value.algorithms.selection !== this.props.value.algorithms.selection || 
                nextProps.value.algorithms.insertion !== this.props.value.algorithms.insertion 
    }

    render() {
        
        let arrDescValue;

        if (this.props.value.algorithms.bubble) {
            arrDescValue = (
                <Auxiliary>
                    <h3 style = {{fontSize: '1.34rem', fontFamily: 'Lato, sans-serif'}}>Algorithm Overview</h3>
                    <p>
                        Bubble Sort traverses the array comparing values and 'bubbles' the
                        largest value to the end. In each comparison, values are swapped if
                        a smaller value is ahead of a larger one. The entire process 
                        keeps repeating until no more swaps were performed in a particular
                        traversal. 
                    </p>
                </Auxiliary>
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