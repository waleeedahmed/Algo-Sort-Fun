import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import classes from './ArrayBuilder.css';
//import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import withContext from '../../../../context/withContext';
import trans from './BuilderAnimation.css';


// this component will generate a series of number divs
class ArrayBuilder extends Component {

    
    
    render() {
        
        let assignedClasses = [classes.Arraycell, classes.CurrentSwap]
        
        const emptyArray = <div style = {{fontSize: '2rem', padding: '0 10px'}}>Array currently empty</div>
        const displayNums = this.props.value.generatedNumArray.map((currentElement, index) => {
    
                return <div className = {this.props.value.bubbleIdx === index || this.props.value.bubbleIdx + 1 === index ? assignedClasses.join(' ') : classes.Arraycell} 
                        key = {Math.random()}> {index === this.props.value.generatedNumArray.length - 1 ? currentElement: currentElement + ','} </div>    
        })


        return (
               
            <CSSTransition in = {this.props.value.generatedNumArray.length === 15} classNames = {{...trans}} timeout = {200}>
                <div className = {classes.Array}>[{this.props.value.generatedNumArray.length === 0 ? emptyArray : displayNums}]</div>
                
            </CSSTransition>

        )
    }
} 

export default withContext(ArrayBuilder);