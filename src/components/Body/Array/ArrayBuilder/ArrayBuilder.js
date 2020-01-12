import React, { Component } from 'react';
import { Animate } from 'react-move';
import { CSSTransition } from 'react-transition-group';
import classes from './ArrayBuilder.css';
//import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import withContext from '../../../../context/withContext';
import trans from './BuilderAnimation.css';


// this component will generate a series of number divs
class ArrayBuilder extends Component {
    
    render() {
        
        const emptyArray = <div style = {{fontSize: '1.98rem', padding: '0 10px'}}>Array currently empty</div>
        let displayNums = this.props.value.generatedNumArray.map((currentElement, index) => {
            
            return  <div data-key = {index} 
                    className = {this.props.value.bubbleIdx === index || this.props.value.bubbleIdx + 1 === index ? `${classes.Array} ${classes.CurrentSwap}` : classes.Arraycell} 
                    key = {index} > 
                        {index === this.props.value.generatedNumArray.length - 1 ? currentElement: currentElement + ','} 
                    </div>     
            }
        )

        if (!this.props.value.vsPressed) {

            return (
                // ***ORIGINAL***
                <CSSTransition in = {this.props.value.newArrClicked} onEntered = {this.props.value.arrayClickToggleHandler} classNames = {{...trans}} timeout = {100}>
                    <div className = {classes.Array}>[{this.props.value.generatedNumArray.length === 0 ? emptyArray : displayNums}]</div>
                </CSSTransition> 
            )
            
        } else {
            console.log(document.querySelector(`div[data-key = "0"]`))
        

            return (<div><Animate> 
                {data => {
                    document.querySelector(`div[data-key = "0"]`).style.transform = 'translate(100px, 0)' 
                }}
            </Animate>
            </div>)
        }
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