import React from 'react';
import withContext from '../../../../../context/withContext';
import classes from './Bubble.css';

class Bubble extends React.Component {
    
    classAssign = () => {
        if (this.props.value.bubbleArrayStatus === 3) return classes.BubbleNoSwap

        else if (this.props.value.bubbleArrayStatus === -1) return classes.ShouldBubbleSwap

        else if (this.props.value.bubbleArrayStatus === 4) return null
    }

    classAssignSwap = () => {
        if (this.props.value.bubbleSwapEntered) return classes.BubbleSwap
        else return null
    }

    render() {

        var bubbleCodeSwap = `\t    if (array[i] > array[i + 1])`

        var bubbleCodeSwapBody =     
            `\t\t{ // Swap 'i' and 'i + 1'
                  // Set 'swapsPerformed' to true }`
            
        var bubbleCodeTraverse = `       // for loop (start: 0, end: array.length, current: i) {`

        var bubbleCodeIterate = 
            `BubbleSort(unsortedArray) {
  // Initialize 'swapsPerformed: boolean'`

        var doLoop = 
        `  do { // Repeat this block of code 
       // Set 'swapsPerformed' to false`
                
        var endingCode = 
        `        } // End for
   } // while swapsPerformed is true`


        var returnCode = `// return sortedArray`         

        return ( 
            <div className = {classes.Bubble}>
                <h3 style = {{fontSize: '1.34rem', fontFamily: 'Lato, sans-serif'}}>Pseudocode Walkthrough</h3>
                <div>{bubbleCodeIterate}</div>
                <div className = {this.props.value.bubbleArrayStatus === 6 ? classes.DoLoop : null}>{doLoop}</div>
                <div className = {this.props.value.bubbleArrayStatus === 7 ? classes.ForLoop : null}>{bubbleCodeTraverse}</div>
                <div className = {this.classAssign()}>{bubbleCodeSwap}</div>
                <div className = {this.classAssignSwap()}>{bubbleCodeSwapBody}</div>
                <div className = {this.props.value.bubbleArrayStatus === 5 && isNaN(this.props.value.bubbleIdx2) ? classes.TraverseComplete : null}>{endingCode}</div>
                <div className = {this.props.value.bubbleArrayStatus === 4 ? classes.Complete : null}>{returnCode}</div>
                }
            </div>
        )
    }
}






export default withContext(Bubble);