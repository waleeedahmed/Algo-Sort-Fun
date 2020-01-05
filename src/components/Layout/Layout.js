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
                swaps: false
            }
        }
    }
    
    generateNumbers = (quantity) => {
        let newArray = []; 

        for (let i = 0; i <= quantity; i++) {
            newArray.push(Number((Math.random() * 50).toFixed(0)));
        }
        this.setState({generatedNumArray: newArray, visualizationPressed: false });
    }


    algoSwitchOnHandler = (algoName) => {
            //console.log(this.state)
            let newObj = {};
            Object.keys(this.state.algorithms) // [bubble, insertion, selection]
                .map((currAlgorithm) => {
                    return currAlgorithm === algoName ? newObj[currAlgorithm] = true : newObj[currAlgorithm] = false
                })
                this.setState( {algorithms: newObj} )
    }

    // !!! Two issues: *** vsPressed takes time to become true, state is being updated in genNumarray
    visualizationHandler = () => {
    
        // manipulate the state here
        this.setState( { visualizationPressed: true } )

        if (this.state.algorithms.bubble) {
            // execute bubble sort
    

            // TODO put below in an if statement
            let clone = Object.assign({}, this.state)
            console.log(clone.generatedNumArray)
            
            // NOTE: this was the original way of doing it
            this.bubbleSort(clone.generatedNumArray) 

            // Other way doing it. *Trial*
            // this.setState( {generatedNumArray: this.bubbleSort(this.state.generatedNumArray)} )
                        
        }
        // console.log(this.state)
    }




    bubbleSwap = (extraArray, i) => {//=> {return new Promise(resolve => {
        
        setTimeout(() => {
            console.log('bubbleswap entered')
            if (extraArray[i] > extraArray[i + 1]) {
                // swap      
                let k = extraArray[i];
                extraArray[i] = extraArray[i + 1];
                extraArray[i + 1] = k;
                
                this.setState(prevState => ({
                    generatedNumArray: extraArray,
                    ...prevState,
                    algoSteps: {...prevState.algoSteps,
                        bubbleSteps: {
                            ...prevState.bubbleSteps,
                            swaps: true
                        }}
                }), () => console.log(this.state))                  
        }}, 1000 * i)  
    }
    

    arrayTraverse = () => { //return new Promise(resolve => {
        
        //console.log(this.state)
        //setTimeout(async () => {
            console.log('arrayTraverse entered!!!')
            let extraArray = [...this.state.generatedNumArray]

            for (let i = 0; i < extraArray.length; i++) {

                this.bubbleSwap(extraArray, i)
            } 
            // }, 200)
        //})
    }


    bubbleIteration = () => {
        console.log('bubbleIteration entered!!!')
        
        do {
            this.setState(prevState => ({
                ...prevState,
                algoSteps: {...prevState.algoSteps,
                    bubbleSteps: {...prevState.bubbleSteps,
                        swaps: false}}
            }))
            this.arrayTraverse()
            
        } while (this.state.algoSteps.bubbleSteps.swaps)
    }

    
    bubbleSort = () => {
        //console.log('bubblesort entered!!!')
        this.bubbleIteration();
        return;
    }



    render() {
        
        return (
            <Auxiliary>
                <GlobalPropsContext.Provider value = {{
                    generatedNumArray: this.state.generatedNumArray,
                    algorithms: this.state.algorithms,
                    algoSwitchHandler: this.algoSwitchOnHandler,
                    //bubbleIteration: this.state.algoSteps.bubbleSteps.bubbleIteration,
                    //bubbleTraverse: this.state.algoSteps.bubbleSteps.bubbleTraverse,
                    //bubbleSwap: this.state.algoSteps.bubbleSteps.bubbleSwap,
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