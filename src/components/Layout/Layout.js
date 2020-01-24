import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Header from '../UI/Header/Header';
import Footer from '../UI/Footer/Footer';
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
        bubbleIndex2: NaN,
        newArrayClicked: false,
        bubbleSwapEntered: false,
        bubbleArrayStatus: 0
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
        }
    }




    bubbleSwap = (extraArray, i) => {return new Promise(resolve => {
    
        // Decide whether to swap or not
        this.setState({bubbleIndex2: i, bubbleArrayStatus: 0, bubbleIndex: NaN})

        setTimeout(() => {
            this.setState(prevState => ({bubbleIndex: i, bubbleIndex2: i, bubbleArrayStatus: 0})) 

            if (extraArray[i] > extraArray[i + 1]) {

                this.setState(prevState => ({
                ...prevState,
                algoSteps: {...prevState.algoSteps,
                    bubbleSteps: {
                        ...prevState.algoSteps.bubbleSteps,
                        swaps: true
                    }},
                    bubbleSwapEntered: true
                }), () => { 

                // Swap   
                let k = extraArray[i];
                extraArray[i] = extraArray[i + 1];
                extraArray[i + 1] = k;
                    setTimeout(() => {
                        resolve(extraArray)
                    }, 600)
                })
                                 
            } else {
                
                setTimeout(() => resolve(null), 600) 
            }
       
        }, 600)  
    })}
    

    arrayTraverse = () => {return new Promise(async (resolve) => {

            let extraArray = [...this.state.generatedNumArray]

            for (let i = 0; i < ((extraArray.length - 1) - this.state.traverseLength); i++) {
                
                let result = await this.bubbleSwap(extraArray, i)
                if (result) {
                    this.setState({ generatedNumArray: result, bubbleSwapEntered: false, bubbleIndex: NaN })  
                    setTimeout(() => {
                        this.setState(prevState => ({bubbleSwapEntered: false, bubbleArrayStatus: 1, bubbleIndex2: i}))
                    }, 30);       
                }
                else {
                    setTimeout(() => {
                        this.setState({bubbleSwapEntered: false, bubbleArrayStatus: 3, bubbleIndex: NaN, bubbleIndex2: i})
                    }, 30);
                }
            }

            // When array traversed
            if (this.state.algoSteps.bubbleSteps.swaps) {
                this.setState(prevState => ({traverseLength: prevState.traverseLength + 1, bubbleArrayStatus: 0, bubbleSwapEntered: false}))
                resolve('arrayTraversed!')

            // At below point, sorting is complete
            } else this.setState({visualizationPressed: false, bubbleIndex: NaN, bubbleIndex2: NaN, bubbleArrayStatus: 4}, () => console.log('final state set'))
        })
    }


    bubbleIteration = async () => {
        
        do {
            this.setState(prevState => ({
                ...prevState,
                algoSteps: {...prevState.algoSteps,
                    bubbleSteps: {...prevState.bubbleSteps,
                        swaps: false}}
            }))
            await this.arrayTraverse()
                
        } while (this.state.algoSteps.bubbleSteps.swaps)
    }

    bubbleSort = () => {
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
                    tLength: this.state.traverseLength,
                    bubbleIdx: this.state.bubbleIndex,
                    bubbleIdx2: this.state.bubbleIndex2,
                    vsPressed: this.state.visualizationPressed,
                    newArrClicked: this.state.newArrayClicked,
                    arrayClickToggleHandler: this.arrayClickToggleHandler,
                    bubbleSwapEntered: this.state.bubbleSwapEntered,
                    bubbleArrayStatus: this.state.bubbleArrayStatus
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
                <Footer>
                    <span className = {classes.FooterSpan} style = {{ color: '#FADADA', fontSize: '0.9rem' }}>About</span>
                </Footer>
                   
                </GlobalPropsContext.Provider>   
            </Auxiliary>
        )
    }

 }

 export default Layout;