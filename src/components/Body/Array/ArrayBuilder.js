import React, { Component } from 'react';
import classes from './ArrayBuilder.css';
import ArrayNumbers from './ArrayNumbers/ArrayNumbers';
import Auxiliary from './../../../hoc/Auxiliary/Auxiliary';

// this component will generate a series of divs from arrayNumbers.js
class ArrayBuilder extends Component {
    
    
    state = {
        generatedNumArray: []
    }
    
    generateNumbers = (quantity) => {
        let emptyArray = [];
        this.setState({generatedNumArray: emptyArray})
        let newArray = this.state.generatedNumArray;

        for (let i = 0; i <= quantity; i++) {
            newArray.push((Math.random() * 50).toFixed(0));
        }
        this.setState({generatedNumArray: newArray});
    }

    
    
    render() {
        console.log(this.state.generatedNumArray)
        const displayNums = this.state.generatedNumArray.map((currentElement) => {
    
            if (this.state.generatedNumArray.indexOf(currentElement) === (this.state.generatedNumArray.length - 1)) {
                return <div className = {classes.Arraycell} key = {currentElement + Math.random()}>{currentElement}</div>    
            }
            else return <div className = {classes.Arraycell} key = {currentElement + Math.random()}>{currentElement},</div>
        })

        return (
            <Auxiliary>
                <button style = {{width: '120px', height: '45px'}} onClick = {() => this.generateNumbers(15)}>Generate Numbers!</button>
                <div className = {classes.Array}>[ {displayNums} ]</div>
            </Auxiliary>
        )
    }
} 



// props => {

//     // obtain generated numbers from arrayNumbers

//     let arrayBegin = <div>[</div>
//     let arrayEnd = <div>]</div>
//     let arrayComma = <div>,</div>
//     let arrayConstruct = arrayBegin;

//     for (let i = 0; i <= 15; i++) {
//         //think either Map, reduce, object.assign etc
//         ({arrayConstruct}
        
//         ) 
//     }
    

//     return (
//         <div>   
//             <ArrayNumbers/>
//         </div>
//     )

//}

export default ArrayBuilder;