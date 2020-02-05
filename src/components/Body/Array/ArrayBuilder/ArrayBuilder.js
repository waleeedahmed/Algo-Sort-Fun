import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import classes from './ArrayBuilder.css';
import withContext from '../../../../context/withContext';
import transitionStyles from './BuilderAnimation.css';


// This component will generate a series of number divs
class ArrayBuilder extends Component {

    // indexHelper performs animation flips and calculates distance to move
    indexHelper = (currentIndex, currentIndex2, mapIndex) => {
         
        if (this.props.value.algorithms.bubble) {

            if (this.props.value.showSwapping) {

                if (currentIndex === mapIndex && mapIndex < this.props.value.generatedNumArray.length - 1) return document.querySelector(`div[data-key = "${mapIndex + 1}"]`).clientWidth.toString() 
    
                else if (currentIndex + 1 === mapIndex) return '-' + document.querySelector(`div[data-key = "${mapIndex - 1}"]`).clientWidth.toString() 
        
                else return '0'
            }
            else return '0'
        }
        else if (this.props.value.algorithms.selection) {

            if (this.props.value.showSwapping) {
                
                // middle nums between swapping numbers
                for (let i = currentIndex2 + 1; i < currentIndex; i++) {
                    if (document.querySelector(`div[data-key = "${currentIndex}"]`).clientWidth > document.querySelector(`div[data-key = "${currentIndex2}"]`).clientWidth) {
                        // move middle numbers forward
                        if (i === mapIndex) {
                            // move fwd
                            return (document.querySelector(`div[data-key = "${currentIndex}"]`).clientWidth - document.querySelector(`div[data-key = "${currentIndex2}"]`).clientWidth).toString()
                        }
                    }
                    else {
                        // move middle numbers backward
                        if (i === mapIndex) {
                            // move backward
                            return '-' + (document.querySelector(`div[data-key = "${currentIndex2}"]`).clientWidth - document.querySelector(`div[data-key = "${currentIndex}"]`).clientWidth).toString()
                        }
                    }

                }

                if (currentIndex === mapIndex) {
                    
                    let distanceBack = 0
                    for (let i = 1; i <= currentIndex - currentIndex2; i++) {
                        //console.log(document.querySelector(`div[data-key = "${mapIndex - i}"]`).clientWidth)
                        distanceBack += document.querySelector(`div[data-key = "${mapIndex - i}"]`).clientWidth
                        //console.log('distance back within for loop now is: ' + distanceBack)
                    }
                    //console.log('distanceBack outside for loop ' + distanceBack)
                    return '-' + distanceBack.toString()
                }
                else if (currentIndex2 === mapIndex && mapIndex < this.props.value.generatedNumArray.length - 1) {
                    let distanceFwd = 0
                    for (let i = 1; i <= currentIndex - currentIndex2; i++) {
                        //var distanceFwd
                        distanceFwd += document.querySelector(`div[data-key = "${mapIndex + i}"]`).clientWidth
                    }
                    //console.log(distanceFwd)
                    return distanceFwd.toString()               
                }
                else return '0'
            }
            else return '0'        
        }
    }

    // Class assignments for different color changes within Array cell divs 
    cellClassAssign = (currIdx, currIdx2, mapIndex) => {

        if (this.props.value.algorithms.bubble) {
            // During Swapping
            if (currIdx === mapIndex || currIdx + 1 === mapIndex) {
                return [classes.Array, classes.Swapping].join(' ')
            }
            else if ((currIdx2 === mapIndex || currIdx2 + 1 === mapIndex) && this.props.value.arrayStatus === -1) {
                return [classes.Array, classes.ShouldSwap].join(' ')
            }
            else if ((currIdx2 === mapIndex || currIdx2 + 1 === mapIndex) && this.props.value.arrayStatus === 1) {
                return [classes.Array, classes.PostSwap].join(' ')
            }
            else if ((currIdx2 === mapIndex || currIdx2 + 1 === mapIndex) && this.props.value.arrayStatus === 3) {
                return [classes.Array, classes.CurrentNoSwap].join(' ') // Red, did not swap 
            }
            else if (isNaN(currIdx2) && this.props.value.arrayStatus === 5 && mapIndex <= ((this.props.value.generatedNumArray.length) - this.props.value.tLength)) {
                return [classes.Array, classes.TraverseComplete].join(' ')
            }
            else if (mapIndex >= ((this.props.value.generatedNumArray.length) - this.props.value.tLength)) {
                return [classes.Array, classes.SortComplete].join(' ')
            }
            else {
                return classes.Arraycell
            }
        }

        else if (this.props.value.algorithms.selection) {
            if (currIdx2 === mapIndex) {
                return [classes.Array, classes.ShouldSwap].join(' ')
            }
            else if (currIdx === mapIndex) return [classes.Array, classes.Swapping].join(' ')

            else if ((currIdx === mapIndex || currIdx2 === mapIndex) && this.props.value.showSwapping) return [classes.Array, classes.ShouldSwap].join(' ')

            else if ((currIdx === mapIndex || currIdx2 === mapIndex) && this.props.value.arrayStatus === 1) return [classes.Array, classes.CurrentNoSwap].join(' ')

            else return classes.Arraycell
        }
        else return classes.Arraycell
    }

    // Assigns a class to the entire array
    arrayClassAssignment = () => {
        if (this.props.value.algorithms.bubble) {
            if (isNaN(this.props.value.bubbleIdx2) && this.props.value.arrayStatus === 4) {
                return [classes.Array, classes.Complete].join(' ')

            }
            else {return classes.Array}
        }
        else if (this.props.value.algorithms.selection) {
            return classes.Array
        }
        else return classes.Array
    }

    render() {
        
        const emptyArray = <div style = {{fontSize: '1.98rem', padding: '4px 10px'}}>Array currently empty</div>

        var displayNums = this.props.value.generatedNumArray.map((currentElement, index) => {
            let currentIdx = this.props.value.currIdx;
            let currentIdx2 = this.props.value.currIdx2;
            
            return <div style = {{transform: `translateX(${this.indexHelper(currentIdx, currentIdx2, index)}px)`, transition: `${this.props.value.showSwapping ? `transform 0.4s ease` : ``}`}}
                    className = {this.cellClassAssign(currentIdx, currentIdx2, index)} 
                    key = {index} data-key = {index}> 
                        {index === this.props.value.generatedNumArray.length - 1 ? currentElement: currentElement + ','} 
                    </div>    
            })
         
            return (<CSSTransition in = {this.props.value.newArrClicked} 
                        onEntered = {this.props.value.arrayClickToggleHandler} 
                        classNames = {{...transitionStyles}} timeout = {100}>
                            <div className = {this.arrayClassAssignment()}>
                                [{this.props.value.generatedNumArray.length === 0 ? emptyArray : displayNums}]
                            </div>
                    </CSSTransition>)
            
    }
} 

export default withContext(ArrayBuilder); 