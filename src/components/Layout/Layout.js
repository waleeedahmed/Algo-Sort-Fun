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
        bubbleIndex: NaN,
        newArrayClicked: false,
        bubbleSwapEntered: false
    }

    arrayClickToggleHandler = () => {
        this.setState({newArrayClicked: !this.state.newArrayClicked})
    }

    
    generateNumbers = (quantity) => {
        let newArray = []; 

        for (let i = 0; i <= quantity; i++) {
            newArray.push(Number((Math.random() * 50).toFixed(0)));
        }
        this.setState({generatedNumArray: newArray, visualizationPressed: false, bubbleIndex: NaN, newArrayClicked: true});

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
        this.setState({bubbleIndex: i})
        setTimeout(() => {
            this.setState({bubbleSwapEntered: false})
            //console.log('bubbleswap entered')
            if (extraArray[i] > extraArray[i + 1]) {

                    this.setState(prevState => ({
                    ...prevState,
                    algoSteps: {...prevState.algoSteps,
                        bubbleSteps: {
                            ...prevState.algoSteps.bubbleSteps,
                            swaps: true
                        }},
                        bubbleSwapEntered: true
                }))
                
                // swap      
                let k = extraArray[i];
                extraArray[i] = extraArray[i + 1];
                extraArray[i + 1] = k;
                resolve(extraArray)
                                 
            } else resolve(null)

            //this.setState({ generatedNumArray: extraArray })
            
        }, 1000)  
    })}
    

    arrayTraverse = () => { return new Promise(async (resolve) => {
        
        //setTimeout(async () => {
            console.log('arrayTraverse entered!!!')
            let extraArray = [...this.state.generatedNumArray]

            for (let i = 0; i < extraArray.length - this.state.traverseLength; i++) {

                let result = await this.bubbleSwap(this.state.generatedNumArray, i)
                if (result) {
                    this.setState({ generatedNumArray: result }, () => console.log(this.state.generatedNumArray))
                }
                console.log('continued from bubbleswap() call ' + result)
            }

            if (this.state.algoSteps.bubbleSteps.swaps) {
                this.setState(prevState => ({
                    traverseLength: prevState.traverseLength + 1
                }), () => console.log(this.state.traverseLength))
            }
            resolve('arrayTraversed!') 
            // }, 200)
        })
    }


    bubbleIteration = async () => {
        //console.log('bubbleIteration entered!!!')
        
        do {
            this.setState(prevState => ({
                ...prevState,
                algoSteps: {...prevState.algoSteps,
                    bubbleSteps: {...prevState.bubbleSteps,
                        swaps: false}}
            }))
            let answer = await this.arrayTraverse()
            console.log(answer)
            // at below point, sorting is complete
            if (!this.state.algoSteps.bubbleSteps.swaps) this.setState( {bubbleIndex: NaN, visualizationPressed: false} )
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
                    bubbleIdx: this.state.bubbleIndex,
                    vsPressed: this.state.visualizationPressed,
                    newArrClicked: this.state.newArrayClicked,
                    arrayClickToggleHandler: this.arrayClickToggleHandler,
                    bubbleSwapEntered: this.state.bubbleSwapEntered
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