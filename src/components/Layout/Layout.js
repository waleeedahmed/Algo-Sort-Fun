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



        bubbleSwap = (numposition, i) => {return new Promise(resolve => {
            setTimeout(() => {

                if (numposition[i] > numposition[i + 1]) {
                    // swap      
                    let k = numposition[i];
                    numposition[i] = numposition[i + 1];
                    numposition[i + 1] = k;
                    this.setState(prevState => ({
                        generatedNumArray: numposition,
                        algorithms: {...prevState.algorithms},
                        visualizationPressed: prevState.visualizationPressed,
                        algoSteps: {...prevState.algoSteps,
                        bubbleSteps: {
                            ...prevState.bubbleSteps,
                            swaps: true
                        }}
                    }))
                    resolve('swap resolved')
                    //console.log(this.state)        
                }
            }, 1000 * i) 
        })}
        
            //console.log('bubbleSwap entered!!!')
  
            
        


        arrayTraverse = async (array) => { //return new Promise(resolve => {
            //console.log('arrayTraverse entered!!!')
            setTimeout(async () => {
                for (let i = 0; i < array.length - 1; i++) {

                    await this.bubbleSwap(array, i)
                    // increment for iteration display
                }
            }, 200)

            //console.log('continued from arrayTraversal')  
            //})
        }


        bubbleIteration = async (array) => {
            //console.log('bubbleIteration entered!!!')
            do {
                this.setState({
                    algoSteps: {bubbleSteps: {swaps: false}}
                })
                await this.arrayTraverse(array)
                console.log('continued from do block of bubbleIteration' + this.state.algoSteps.bubbleSteps.swaps)
            } while (this.state.algoSteps.bubbleSteps.swaps)
        }

        
        bubbleSort = (array) => {
            //console.log('bubblesort entered!!!')
            this.bubbleIteration(array);
            return array;
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