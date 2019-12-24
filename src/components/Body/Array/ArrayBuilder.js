import React, { Component } from 'react';
import classes from './ArrayBuilder.css';
//import ArrayNumbers from './ArrayNumbers/ArrayNumbers';
import Auxiliary from './../../../hoc/Auxiliary/Auxiliary';

// this component will generate a series of divs from arrayNumbers.js
class ArrayBuilder extends Component {
    
    
    state = {
        generatedNumArray: []
    }
    
    generateNumbers = (quantity) => {
        //let emptyArray = [];
        //this.setState({generatedNumArray: emptyArray})
        let newArray = []; //= this.state.generatedNumArray;

        for (let i = 0; i <= quantity; i++) {
            newArray.push((Math.random() * 50).toFixed(0));
        }
        this.setState({generatedNumArray: newArray});
    }

    
    
    render() {
        
        const displayNums = this.state.generatedNumArray.map((currentElement, index) => {
    
            if (index === this.state.generatedNumArray.length - 1) {
                return <div className = {classes.Arraycell} key = {currentElement + Math.random()}>{currentElement}</div>    
            }
            else return <div className = {classes.Arraycell} key = {currentElement + Math.random()}>{currentElement},</div>
        })

        return (
            <Auxiliary>
                <button style = {{width: '120px', height: '45px'}} onClick = {() => this.generateNumbers(14)}>Generate Numbers!</button>
                <div className = {classes.Array}>[ {displayNums} ]</div>
            </Auxiliary>
        )
    }
} 



export default ArrayBuilder;