import React, { Component } from 'react';
import classes from './ArrayBuilder.css';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import withContext from '../../../../context/withContext';

// this component will generate a series of number divs
class ArrayBuilder extends Component {
    
    
    
    render() {
        let assignedClasses = [classes.Arraycell, classes.CurrentSwap]
        
        const emptyArray = <div style = {{fontSize: '2rem', padding: '0 10px'}}>Array currently empty</div>
        const displayNums = this.props.value.generatedNumArray.map((currentElement, index) => {
    
            if (index === this.props.value.generatedNumArray.length - 1) {
                return <div className = {this.props.value.bubbleIdx === index || this.props.value.bubbleIdx + 1 === index ? assignedClasses.join(' ') : classes.Arraycell} 
                        key = {currentElement + Math.random()}>{currentElement}</div>    
            }
            else return <div className = {this.props.value.bubbleIdx === index || this.props.value.bubbleIdx + 1 === index ? assignedClasses.join(' ') : classes.Arraycell} 
                        key = {currentElement + Math.random()}>{currentElement},</div>
        })

        return (
            <Auxiliary>
                <div className = {classes.Array}>[{this.props.value.generatedNumArray.length === 0 ? emptyArray : displayNums}]</div>
            </Auxiliary>
        )
    }
} 

export default withContext(ArrayBuilder);