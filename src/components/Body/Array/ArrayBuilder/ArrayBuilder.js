import React, { Component } from 'react';
import { Animate } from 'react-move';
import { CSSTransition } from 'react-transition-group';
import classes from './ArrayBuilder.css';
//import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import withContext from '../../../../context/withContext';
import trans from './BuilderAnimation.css';


// this component will generate a series of number divs
class ArrayBuilder extends Component {

    state = {
        localArrayCopy: this.props.value.generatedNumArray,
        swaps: this.props.value.bubbleSwapEntered
    }
    

    indexHelper = (currentIndex, i) => {
        if (i < this.props.value.generatedNumArray.length - 1 ) {

            if (currentIndex === i) return  document.querySelector(`div[data-key = "${i + 1}"]`).offsetWidth.toString() + 'px'

            else if (currentIndex + 1 === i) return '-' + document.querySelector(`div[data-key = "${i - 1}"]`).offsetWidth.toString() + 'px'

            else return '0' 
        }

    }


    render() {


        //console.log('arraybuilder render entered')
        //console.log('this.state.swaps = ' + this.state.swaps)
        //console.log('value of props.swaps ' + this.props.value.bubbleSwapEntered)
        

        const emptyArray = <div style = {{fontSize: '1.98rem', padding: '0 10px'}}>Array currently empty</div>

        var displayNums = this.props.value.generatedNumArray.map((currentElement, index) => {
            let currentIdx = this.props.value.bubbleIdx;
            return  <Animate
                    data = {{
                        isSwap: this.props.value.bubbleSwapEntered
                    }}
                    default = {{isSwap: false}}
                    duration = {100}
                    easing ='easeQuadIn'
                    key = {index}>
                        {data => (
                            <div style = {{transform: `translateX(${this.props.value.bubbleSwapEntered ? this.indexHelper(currentIdx, index) : '0'})`}}
                                className = {currentIdx === index || currentIdx + 1 === index ? `${classes.Array} ${classes.CurrentSwap}` : classes.Arraycell} 
                                key = {index} data-key = {index}> 
                                    {index === this.props.value.generatedNumArray.length - 1 ? currentElement: currentElement + ','} 
                            </div> 
                        )}
                    </Animate>     
            })
                        
            


        //if (!this.props.value.vsPressed) {

            //console.log(this.props.value.newArrClicked)
            // console.log({...trans})
            return (<CSSTransition in = {this.props.value.newArrClicked} onEntered = {this.props.value.arrayClickToggleHandler} classNames = {{...trans}} timeout = {100}>
                        <div className = {classes.Array}>[{this.props.value.generatedNumArray.length === 0 ? emptyArray : displayNums}]</div>
                    </CSSTransition>)
            
            
        //} else {
            //return <div className = {classes.Array}>[{initialArray}]</div>
            //console.log(document.querySelector(`div[data-key = "0"]`))
        

        //     return (<Animate> 
        //         {data => {
        //             //<div style = {{transform: 'translate(100px, 0)'}}>Test</div>
        //             document.querySelector(`div[data-key = "0"]`).style.transform = 'translate(100px, 0)' 
        //         }
        //         }
        //     </Animate>
        //     )
        // }
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