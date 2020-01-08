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
        },
        traverseLength: 0,
        bubbleIndex: NaN
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


    visualizationHandler = () => {
    
        // vsPressed becomes true regardless of which algorithm is selected 
        this.setState( { visualizationPressed: true, traverseLength: 0 } )

        if (this.state.algorithms.bubble) {
        
            // Tentative: TODO put below in an if statement
            let clone = Object.assign({}, this.state)
            
            // NOTE: this was the original way of execution
            this.bubbleSort(clone.generatedNumArray) 

            // Other way doing it. *Trial*
            // this.setState( {generatedNumArray: this.bubbleSort(this.state.generatedNumArray)} )
                        
        }
        // console.log(this.state)
    }


    bubbleSwap = (extraArray, i) => { return new Promise(resolve => {
        
        setTimeout(() => {
            this.setState({bubbleIndex: i})
            console.log('bubbleswap entered')
            if (extraArray[i] > extraArray[i + 1]) {
                // swap      
                let k = extraArray[i];
                extraArray[i] = extraArray[i + 1];
                extraArray[i + 1] = k;
                
                //this.setState({generatedNumArray: extraArray}, () => console.log(this.state))
                this.setState(prevState => ({
                    ...prevState,
                    generatedNumArray: extraArray,
                    algoSteps: {...prevState.algoSteps,
                        bubbleSteps: {
                            ...prevState.algoSteps.bubbleSteps,
                            swaps: true
                        }}
                }), () => resolve('swapped'))                  
            } else resolve('not swapped')
            
        }, 200)  
    }
    )}
    

    arrayTraverse = () => { return new Promise(async (resolve) => {
        
        //console.log(this.state)
        //setTimeout(async () => {
            console.log('arrayTraverse entered!!!')
            let extraArray = [...this.state.generatedNumArray]

            for (let i = 0; i < extraArray.length - this.state.traverseLength; i++) {

                let result = await this.bubbleSwap(extraArray, i)
                console.log('continued from bubbleswap() call ' + result)
                //if (result) 
            }
            if (this.state.algoSteps.bubbleSteps.swaps) {
                //console.log('enters IF statement')
                // this.setState(prevState => ({
                //     ...prevState,
                //     algoSteps: {...prevState.algoSteps,
                //         bubbleSteps: {
                //             ...prevState.algoSteps.bubbleSteps,
                //             traverseLength: prevState.algoSteps.bubbleSteps.traverseLength + 1 
                //         }
                //     }
                // }), () => console.log(this.state.algoSteps.bubbleSteps.traverseLength)) 
                this.setState(prevState => ({
                    traverseLength: prevState.traverseLength + 1
                }), () => console.log(this.state.traverseLength))
            }
            resolve('arrayTraversed!') 
            // }, 200)
        })
    }


    bubbleIteration = async () => {
        console.log('bubbleIteration entered!!!')
        
        do {
            this.setState(prevState => ({
                ...prevState,
                algoSteps: {...prevState.algoSteps,
                    bubbleSteps: {...prevState.bubbleSteps,
                        swaps: false}}
            }))
            let answer = await this.arrayTraverse()
            console.log('continued from arraytraverse() call ' + this.state.algoSteps.bubbleSteps.swaps + ' ' + answer)
        } while (this.state.algoSteps.bubbleSteps.swaps)
    }

    
    bubbleSort = () => {
        //console.log('bubblesort entered!!!')
        this.bubbleIteration();
        //this.setState( {bubbleIdx: NaN} )
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
                    bubbleIdx: this.state.bubbleIndex,
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
                
                <main>
                    <Algobody/>
                </main>
                <p>footer</p> 
                   
                </GlobalPropsContext.Provider>   
            </Auxiliary>
        )
    }

 }

 export default Layout;