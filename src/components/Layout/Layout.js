import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Header from '../UI/Header/Header';
import Drawer from '../UI/Drawer/Drawer';
import classes from './Layout.css';
import Algobody from '../../containers/Algobody/Algobody';
import GlobalPropsContext from '../../context/globalPropsContext';

class Layout extends Component {

    state = {
        generatedNumArray: [],
        algorithms: {
            bubble: false,
            selection: false,
            insertion: false, 
            merge: false
        },
        visualizationPressed: false,
        algoSteps: {
            bubbleSteps: {
                bubbleIteration: '',
                bubbleTraverse: '',
                bubbleSwap: ''
            }
        }
    }
    
    generateNumbers = (quantity) => {
        let newArray = []; 

        for (let i = 0; i <= quantity; i++) {
            newArray.push((Math.random() * 50).toFixed(0));
        }
        this.setState({generatedNumArray: newArray});
    }


    algoSwitchOnHandler = (algoName) => {
            let newObj = {};
            Object.keys(this.state.algorithms) // [bubble, insertion, selection]
                .map((currAlgorithm) => {
                    return currAlgorithm === algoName ? newObj[currAlgorithm] = true : newObj[currAlgorithm] = false
                })
                this.setState( {algorithms: newObj} )
                //`${classes.Buttons} ${classes.Leftmostbtn}`
    }

    visualizationHandler = () => {
        // manipulate the state here
        if (this.state.algorithms.bubble) {
            // execute bubble sort
            this.setState( {visualizationPressed: true} )
        }
    }


    render() {
        return (
            <Auxiliary>
                <GlobalPropsContext.Provider value = {{
                    generatedNumArray: this.state.generatedNumArray,
                    algorithms: this.state.algorithms,
                    algoSwitchHandler: this.algoSwitchOnHandler,
                    bubbleIteration: this.state.algoSteps.bubbleSteps.bubbleIteration,
                    bubbleTraverse: this.state.algoSteps.bubbleSteps.bubbleTraverse,
                    bubbleSwap: this.state.algoSteps.bubbleSteps.bubbleSwap,
                    vsPressed: this.state.visualizationPressed
                }}>
                <Header>
                    <span style = {{ fontFamily: 'Caveat, cursive', fontSize: '2rem', color: '#fcedb3', maxHeight: '98%' }}>Algo-Sort Fun!</span>
                    <Drawer/>                    
                    <div className = {classes.Btndiv}>
                        <button className = {classes.Buttons} onClick = {() => this.generateNumbers(14)}>Create New Array</button>
                        <button className = {classes.Buttons}>Clear Array</button>
                        <button className = {`${classes.Buttons} ${classes.SmallBtn}`} onClick = {this.visualizationHandler}>Visualize!</button>
                    </div>
                </Header>
                
                <main className = {classes.Content}>
                    <Algobody/>
                </main>
                <p>footer</p> 
                   
                </GlobalPropsContext.Provider>   
            </Auxiliary>
        )
    }
 }

 export default Layout;