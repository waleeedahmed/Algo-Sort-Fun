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
            newArray.push(Number((Math.random() * 50).toFixed(0)));
        }
        this.setState({generatedNumArray: newArray, visualizationPressed: false });
        
    }

    // componentDidUpdate() {
    //     //console.log('layout.js componentdidupdate entered')
    //     //console.log(this.state.generatedNumArray)
    // }


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
            this.setState( {visualizationPressed: true, 
                        generatedNumArray: this.bubbleSort(this.state.generatedNumArray)} )
        }
    }

    // bubbleSort = (array) => {
    //     let swapsPerformed;
    //     let j = 0;

    //     //setTimeout(() => {
    //         do {
    //             swapsPerformed = false
    
    //             setTimeout(() => {
    //                 for (let i = 0; i < array.length; i++) {
                    
    //                 //setTimeout(() => {

    //                         // eslint-disable-next-line
    //                         setTimeout(() => {
    //                         if (array[i] > array[i + 1]) {
    //                             // swap
                            
    //                                 let k = array[i];
    //                                 array[i] = array[i + 1];
    //                                 array[i + 1] = k;
    //                                 swapsPerformed = true;
    //                                 this.setState( {generatedNumArray: array} )
    //                                 //console.log(this.state.generatedNumArray)
    //                             }},1000 * i)
                            
    //                     //}, 1500)
    //                 }
    //                 this.setState( {generatedNumArray: array} )
    //             }, 1500 * j);
    //             j++;
    //             this.setState( {generatedNumArray: array} )
    //         } while (swapsPerformed)
    //     //}, 1500)

    //     console.log(array)
    //     return array    
    // }



        bubbleSwap = (numposition, i, x) => {
            console.log('bubbleSwap entered!!!')
                //setTimeout(() => {

                    if (numposition[i] > numposition[i + 1]) {
                        // swap      
                        let k = numposition[i];
                        numposition[i] = numposition[i + 1];
                        numposition[i + 1] = k;
                        x = !x
                        this.setState( {generatedNumArray: numposition} )
                    }
                    console.log(numposition)
                //}, 1000 * i)   
            //console.log(numposition[i] + " " + numposition[i + 1])
        }


        arrayTraverse = (array, swaps) => {
            console.log('arrayTraverse entered!!!')
            for (let i = 0; i < array.length; i++) {

                this.bubbleSwap(array, i, swaps)
                // increment for iteration display
            }
        }


        bubbleIteration = (array) => {
            console.log('bubbleIteration entered!!!')
            let swapsPerformed;
            do {
                swapsPerformed = false
                this.arrayTraverse(array, swapsPerformed)
            } while (swapsPerformed)
        }


        bubbleSort = (array) => {
            console.log('bubblesort entered!!!')
            this.bubbleIteration(array);
            this.setState( { generatedNumArray: array } ) 
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