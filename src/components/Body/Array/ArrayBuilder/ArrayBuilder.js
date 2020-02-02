import React, { Component } from 'react';
import { Animate } from 'react-move';
import { CSSTransition } from 'react-transition-group';
import classes from './ArrayBuilder.css';
import withContext from '../../../../context/withContext';
import transitionStyles from './BuilderAnimation.css';


// This component will generate a series of number divs
class ArrayBuilder extends Component {

    // Below method determines the amount of space animation flips have to move
    indexHelper = (currentIndex, i) => {
            
        if (currentIndex === i && i < this.props.value.generatedNumArray.length - 1) return document.querySelector(`div[data-key = "${i + 1}"]`).clientWidth.toString() 

        else if (currentIndex + 1 === i) return '-' + document.querySelector(`div[data-key = "${i - 1}"]`).clientWidth.toString() 

        else return '0'

    }

    // Class assignments for different color changes 
    classAssignment = (currIdx, i, currIdx2) => {

        // During Swapping
        if (currIdx === i || currIdx + 1 === i) {
            return [classes.Array, classes.Swapping].join(' ')
        }
        else if ((currIdx2 === i || currIdx2 + 1 === i) && this.props.value.bubbleArrayStatus === -1) {
            return [classes.Array, classes.ShouldSwap].join(' ')
        }
        else if ((currIdx2 === i || currIdx2 + 1 === i) && this.props.value.bubbleArrayStatus === 1) {
            return [classes.Array, classes.PostSwap].join(' ')
        }
        else if ((currIdx2 === i || currIdx2 + 1 === i) && this.props.value.bubbleArrayStatus === 3) {
            return [classes.Array, classes.CurrentNoSwap].join(' ') // Red, did not swap 
        }
        else if (isNaN(currIdx2) && this.props.value.bubbleArrayStatus === 5 && i <= ((this.props.value.generatedNumArray.length) - this.props.value.tLength)) {
            return [classes.Array, classes.TraverseComplete].join(' ')
        }
        else if (i >= ((this.props.value.generatedNumArray.length) - this.props.value.tLength)) {
            return [classes.Array, classes.SortComplete].join(' ')
        }
        else {
            return classes.Arraycell
        }

    }

    render() {
        
        const emptyArray = <div style = {{fontSize: '1.98rem', padding: '4px 10px'}}>Array currently empty</div>

        var displayNums = this.props.value.generatedNumArray.map((currentElement, index) => {
            let currentIdx = this.props.value.bubbleIdx;
            let currentIdx2 = this.props.value.bubbleIdx2;
            
            // Rendering individual div for the array within JS map
            return  <Animate key = {index}>
                        {() => (
                            <div style = {{transform: `translateX(${this.props.value.bubbleSwapEntered ? this.indexHelper(currentIdx, index) : '0'}px)`}}
                            className = {this.classAssignment(currentIdx, index, currentIdx2)} 
                            key = {index} data-key = {index}> 
                                {index === this.props.value.generatedNumArray.length - 1 ? currentElement: currentElement + ','} 
                            </div> 
                        )}
                    </Animate>     
            })
         
            return (<CSSTransition in = {this.props.value.newArrClicked} onEntered = {this.props.value.arrayClickToggleHandler} classNames = {{...transitionStyles}} timeout = {100}>
                        <div className = {isNaN(this.props.value.bubbleIdx2) && this.props.value.bubbleArrayStatus === 4 ? `${classes.Array} ${classes.Complete}` : classes.Array}>
                                [{this.props.value.generatedNumArray.length === 0 ? emptyArray : displayNums}]
                        </div>
                    </CSSTransition>)
            
    }
} 

export default withContext(ArrayBuilder);























// <TransitionGroup className = {classes.Array}>  
//     <Auxiliary>
//         <div>[</div>
        // {this.props.value.generatedNumArray.length === 0 ? emptyArray : this.props.value.generatedNumArray.map((currentElement, index) => (

        //         <CSSTransition 
        //         key = {index} 
        //         in = {this.props.value.newArrClicked} 
        //         onEntered = {this.props.value.arrayClickToggleHandler}
                
        //         classNames = {{...trans}} 
        //         timeout = {200}> 
                
        //             <div className = {this.props.value.bubbleIdx === index || this.props.value.bubbleIdx + 1 === index ? classes.CurrentSwap : classes.Arraycell} 
        //                 key = {index}> {index === this.props.value.generatedNumArray.length - 1 ? currentElement: currentElement + ','} 
        //             </div> 

//                 </CSSTransition> 
//                 )            
//             )   
//         }
//         <div>]</div>
//     </Auxiliary>   
// </TransitionGroup>  