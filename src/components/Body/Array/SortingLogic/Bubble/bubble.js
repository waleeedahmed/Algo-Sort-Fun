import React from 'react';
import withContext from '../../../../../context/withContext';
import classes from './Bubble.css';

class Bubble extends React.Component {
    

    render() {

        var bubbleCodeSwap = `
            if (array[i] > array[i + 1]) {     
                // Swap 'i' and 'i + 1'
                // Set 'swapsPerformed' to true
            }`
            
        var bubbleCodeTraverse = `\t// for loop (start: 0, end: array.length, current: i) {`

        var bubbleCodeIterate = 

            `BubbleSort(unsortedArray) {
    // Initialize 'swapsPerformed: boolean'
    do { // Repeat this block of code 
        // Set 'swapsPerformed' to false`
                
        var endingCode = 
        `\t} // End for
    } // while swapsPerformed is true

// return sortedArray 
}`

        
        

        return ( 
            <div className = {classes.Bubble}>
                <h2 style = {{fontFamily: 'Lato, sans-serif', textDecoration: 'underline'}}>Pseudocode Walkthrough</h2>
                <div>{bubbleCodeIterate}</div>
                <div>{bubbleCodeTraverse}</div>
                <div>{bubbleCodeSwap}</div>
                <div>{endingCode}</div>
            </div>
        )
    }
}






export default withContext(Bubble);











// bubbleSwap = (numposition, i, x) => {
        
//     if (numposition[i] > numposition[i + 1]) {
//         // swap      
//         let k = numposition[i];
//         numposition[i] = numposition[i + 1];
//         numposition[i + 1] = k;
//         x = true;
//     }
//     console.log(numposition[i] + " " + numposition[i + 1])
// }


// arrayTraverse = (array, swapsPerformed) => {
//     for (let i = 0; i <= array.length - 1; i++) {

//         this.bubbleSwap(array, i, swapsPerformed)
//         // increment for iteration display
//     }
// }


// bubbleIteration = (array) => {
//     let swapsPerformed;
//     do {
//         swapsPerformed = false
//         this.arrayTraverse(array, swapsPerformed)
//     } while (swapsPerformed)
// }


// bubbleSort = (array) => {
//     console.log('bubblesort entered!!!')
//     this.bubbleIteration(array);
     
//     return this.props.value.generatedNumArray = array;  
    
// }





// var bubbleCodeSwap = `
// if (array[i] > array[i + 1]) {
//     // swap
            
//     let k = array[i];
//     array[i] = array[i + 1];
//     array[i + 1] = k;
//     swapsPerformed = true;
// }`

// var bubbleCodeTraverse = `
// for (let i = 0; i <= array.length; i++) {
// `

// var bubbleCodeIterate = 
// `function BubbleSort(array) {     
//     let swapsPerformed;
//         do {
//             swapsPerformed = false`

            
// var endingCode = `
//     }
// } while (swapsPerformed)

// return array;     
// }`
