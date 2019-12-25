import React, { Component } from 'react';
import classes from './ArrayBuilder.css';
//import ArrayNumbers from './ArrayNumbers/ArrayNumbers';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import GlobalPropsContext from '../../../../context/globalPropsContext';
import withContext from '../../../../context/withContext';

// this component will generate a series of divs from arrayNumbers.js
class ArrayBuilder extends Component {
    
    
    render() {
        console.log(this.props.value.generatedNumArray);
        const emptyArray = <div style = {{fontSize: '2rem', padding: '0 10px'}}>Generate an array!</div>
        const displayNums = this.props.value.generatedNumArray.map((currentElement, index) => {
    
            if (index === this.props.value.generatedNumArray.length - 1) {
                return <div className = {classes.Arraycell} key = {currentElement + Math.random()}>{currentElement}</div>    
            }
            else return <div className = {classes.Arraycell} key = {currentElement + Math.random()}>{currentElement},</div>
        })

        return (
            <Auxiliary>
                <div className = {classes.Array}>[{this.props.value.generatedNumArray.length === 0 ? emptyArray : displayNums}]</div>
            </Auxiliary>
        )
    }
} 

export default withContext(ArrayBuilder);