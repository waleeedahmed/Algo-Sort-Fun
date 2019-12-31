import React from 'react';
import withContext from '../../../../context/withContext';

class Bubble extends React.Component {
    
    state = {
        generatedNumArray: []
    }

    bubbleSort = (array) => {
        let swapsPerformed;
        do {
            swapsPerformed = false
            for (let i = 0; i < array.length - 1; i++) {
                if (array[i] > array[i + 1]) {
                    // swap
                            
                    let k = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = k;
                    swapsPerformed = true;
                } else continue
                
            }
        } while (swapsPerformed)
        
        console.log(array)
        return this.props.value.generatedNumArray = array.map((curr) => {return curr.toString(10)});     
    }


    // shouldComponentUpdate(prevProps, prevState) {
    //     // console.log(prevProps)
    //     // console.log(prevState)
    //     // console.log(this.props.value.vsPressed)
    //     // console.log('shouldcomponentupdate entered')

    // }

    componentDidUpdate() {
        console.log('componentdidupdate init bubble.js')
        if (this.props.value.vsPressed)  {
            console.log('inner if statement entered')
            this.bubbleSort(this.props.value.generatedNumArray.map((curr) => {
                return Number(curr)
            }))
        }
    }

    render() {

        var bubbleCodeSwap = 
            `
            \t\t\tif (array[i] > array[i + 1]) {
                      
                \t\tlet k = array[i];
                \t\tarray[i] = array[i + 1];
                \t\tarray[i + 1] = k;
                \t\tswapsPerformed = true;
            \t\t\t}`
            
        var bubbleCodeTraverse = 
            `\t\t\tfor (let i = 0; i <= array.length; i++) {`

        var bubbleCodeIterate = 
            `\tfunction BubbleSort(${this.props.value.generatedNumArray}) {  
                let swapsPerformed;
                do {
                        swapsPerformed = false`
                
        var endingCode = 
        `\t\t\t}
            }  while (swapsPerformed)

        return array; 
        }`

        
        

        return ( 
            <div style = {{whiteSpace: 'pre-wrap'}}>
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
