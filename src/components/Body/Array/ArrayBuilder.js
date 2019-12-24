import React, { Component } from 'react';
import classes from './ArrayBuilder.css';
//import ArrayNumbers from './ArrayNumbers/ArrayNumbers';
import Auxiliary from './../../../hoc/Auxiliary/Auxiliary';

// this component will generate a series of divs from arrayNumbers.js
class ArrayBuilder extends Component {
    
    
    render() {
        
        const displayNums = this.props.arrayInfo.map((currentElement, index) => {
    
            if (index === this.props.arrayInfo.length - 1) {
                return <div className = {classes.Arraycell} key = {currentElement + Math.random()}>{currentElement}</div>    
            }
            else return <div className = {classes.Arraycell} key = {currentElement + Math.random()}>{currentElement},</div>
        })

        return (
            <Auxiliary>
                <div className = {classes.Array}>[ {displayNums} ]</div>
            </Auxiliary>
        )
    }
} 

export default ArrayBuilder;