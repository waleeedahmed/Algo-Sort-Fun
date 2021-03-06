import React from 'react';
import withContext from '../../../../../context/withContext';
import classes from './Bubble.css';

class Bubble extends React.Component {
    
    classAssign = () => {
        if (this.props.value.arrayStatus === 3) return classes.BubbleNoSwap

        else if (this.props.value.arrayStatus === -1) return classes.ShouldBubbleSwap

        else if (this.props.value.arrayStatus === 4) return null
    }

    classAssignSwap = () => {
        if (this.props.value.showSwapping) return classes.BubbleSwap
        else return null
    }

    render() {

        var bubbleCodeSwap = `\t    if (array[i] > array[i + 1])`

        var bubbleCodeSwapBody =     
            `\t\t{ // Swap 'i' and 'i + 1'
                  // Set 'swapsPerformed' to true }`
            
        var bubbleCodeTraverse = `       // for loop (start: 0, end: < array.length, i++) {`

        var bubbleCodeIterate = 
            `function BubbleSort(unsortedArray) {
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
                <h3 className = {classes.BubbleHeading}>Pseudocode Walkthrough</h3>
                <div>{bubbleCodeIterate}</div>
                <div className = {this.props.value.arrayStatus === 6 ? classes.DoLoop : null}>{doLoop}</div>
                <div className = {this.props.value.arrayStatus === 7 ? classes.ForLoop : null}>{bubbleCodeTraverse}</div>
                <div className = {this.classAssign()}>{bubbleCodeSwap}</div>
                <div className = {this.classAssignSwap()}>{bubbleCodeSwapBody}</div>
                <div className = {this.props.value.arrayStatus === 5 && isNaN(this.props.value.currIdx2) ? classes.TraverseComplete : null}>{endingCode}</div>
                <div className = {this.props.value.arrayStatus === 4 ? classes.Complete : null}>{returnCode}</div>
                }
            </div>
        )
    }
}






export default withContext(Bubble);