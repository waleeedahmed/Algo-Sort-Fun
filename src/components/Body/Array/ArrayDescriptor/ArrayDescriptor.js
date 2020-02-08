import React from 'react';
import classes from './ArrayDescriptor.css';
import withContext from '../../../../context/withContext';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

class ArrayDescriptor extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.value.algorithms.bubble !== this.props.value.algorithms.bubble ||  
                nextProps.value.algorithms.selection !== this.props.value.algorithms.selection || 
                nextProps.value.algorithms.insertion !== this.props.value.algorithms.insertion 
    }

    render() {
        
        let arrDescValue;

        if (this.props.value.algorithms.bubble) {
            arrDescValue = (
                <Auxiliary>
                    <h3 className = {classes.DescriptorHeading}>Algorithm Overview</h3>
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
                <Auxiliary>
                    <h3 className = {classes.DescriptorHeading}>Algorithm Overview</h3>
                    <p>
                        Selection Sort loops through the given array with two nested for
                        loops. The inner for loop traverses the array and finds out the smallest 
                        value whereas the outer for loop determines the position of the element which
                        the current minimum should swap with. Sorting is complete when the outer loop
                        has traversed the entire array and set all elements in their correct positions.
                    </p>
                </Auxiliary>
            )
        }
        else if (this.props.value.algorithms.insertion) {
            arrDescValue = (
                <p>
                    Not yet available :(
                </p>
            )
        }
        else if (this.props.value.algorithms.merge) {
            arrDescValue = (
                <p>
                    Not yet available :(
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