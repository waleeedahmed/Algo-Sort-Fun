import React from 'react';
import classes from './Selection.css';

class Selection extends React.Component {
    
    
    
    render() {

        var beginCode = `function SelectionSort(unsortedArray) {`

        var selectionOuterbegin =  `   // initialize 'Len = unsortedArray.length' variable
   // for loop (let i = 0; i < len; i++) {
        // initialize 'min = i' variable`

        
        var selectionInner = `\t// for loop (let j = i + 1; j < Len; j++) {
            if (arr[min] > arr[j]) { // is current min greater? 
                min = j // set new found min as the current min
            }
        }`

        var selectionOuterEnd = `\tif (min !== i) { // if new min was found 
            // swap arr[i] and arr[min]
        }`

        var endingCode = `    } // end outer for loop
return sortedArray
}`

        return (
           <div className = {classes.Selection}>
               <h3 style = {{fontSize: '1.34rem', fontFamily: 'Lato, sans-serif'}}>Pseudocode Walkthrough</h3>
                <div>{beginCode}</div>
                <div>{selectionOuterbegin}</div>
                <div>{selectionInner}</div>
                <div>{selectionOuterEnd}</div>
                <div>{endingCode}</div>
           </div> 
        )
    }
}

export default Selection;