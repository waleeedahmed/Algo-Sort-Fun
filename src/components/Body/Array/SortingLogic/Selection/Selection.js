import React from 'react';
import classes from './Selection.css';
import withContext from '../../../../../context/withContext'

class Selection extends React.Component {
    
    classAssign = () => {
        if (this.props.value.arrayStatus === 3) return classes.ShouldSelectionSwap

        else if (this.props.value.arrayStatus === 4) return classes.NewMin

        else return null
    }

    endingClassAssign = () => {
        if (this.props.value.arrayStatus === 5) return classes.SelectionNoSwap

        else if (this.props.value.arrayStatus === 6) return classes.SelectionSwap

        else if (this.props.value.arrayStatus === 8) return classes.SelectionNoSwap
    }
    
    render() {

        var beginCode = `function SelectionSort(unsortedArray) {`

        var lengthCode = `   // initialize 'Len = unsortedArray.length' variable`

        var selectionOuterbegin =  `   // for loop (let i = 0; i < Len; i++) {
     // initialize 'min = i' variable`

        var selectionInnerBegin = `     // for loop (let j = i + 1; j < Len; j++) {` 
        
        var selectionInner = 
        `\t if (arr[min] > arr[j]) {` 
                

        var selectionInnerTrue = `\t    min = j // set new minimum
         }
     }`

        var selectionOuterEnd = `     if (min !== i) { // if new min was found`

        var selectionOuterEndTrue = `        // swap arr[i] and arr[min]
     }`

        var endingCode = `   } // end outer for loop
return sortedArray
}`

        return (
           <div className = {classes.Selection}>
               <h3 className = {classes.SelectionHeading}>Pseudocode Walkthrough</h3>
                <div>{beginCode}</div>
                <div>{lengthCode}</div>
                <div className = {this.props.value.arrayStatus === 2 ? classes.ForLoop : null}>{selectionOuterbegin}</div>
                <div className = {this.props.value.arrayStatus === 3 ? classes.DoLoop : null}>{selectionInnerBegin}</div>
                <div className = {this.classAssign()}>{selectionInner}</div>
                <div className = {this.props.value.arrayStatus === 4 ? classes.NewMin : null}>{selectionInnerTrue}</div>
                <div className = {this.endingClassAssign()}>{selectionOuterEnd}</div>
                <div className = {this.props.value.arrayStatus === 6 ? classes.SelectionSwap : null}>{selectionOuterEndTrue}</div>
                <div className = {this.props.value.arrayStatus === 7 ? classes.Complete : null}>{endingCode}</div>
           </div> 
        )
    }
}

export default withContext(Selection)
