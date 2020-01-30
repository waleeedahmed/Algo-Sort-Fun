import React, { Component } from 'react';
//import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
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
        drawerVisibility: false,
        traverseLength: 0,
        bubbleIndex: NaN,
        bubbleIndex2: NaN,
        newArrayClicked: false,
        bubbleSwapEntered: false,
        bubbleArrayStatus: 0
    }


    // This method clears up the state aside from 
    // properties otherwise set in its args
    clearState = (...args) => {

        const emptyState = {
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
            drawerVisibility: false,
            traverseLength: 0,
            bubbleIndex: NaN,
            bubbleIndex2: NaN,
            newArrayClicked: false,
            bubbleSwapEntered: false,
            bubbleArrayStatus: 0
        }

        this.setState((state, props) => { 
            return Object.assign(emptyState, ...args)
        })
    }


    arrayClickToggleHandler = () => {
        this.setState({newArrayClicked: !this.state.newArrayClicked})
    }

    

    toggleVisibility = () => {
        this.setState( {drawerVisibility: !this.state.drawerVisibility} )
    }


    generateNumbers = (quantity) => {
        let newArray = []; 

        for (let i = 0; i <= quantity; i++) {
            newArray.push(Number((Math.random() * 50).toFixed(0)));
        }
        this.clearState({generatedNumArray: newArray, newArrayClicked: true, algorithms: {...this.state.algorithms}})
    }


    algoSwitchOnHandler = (algoName) => {
        let newObj = {};
        Object.keys(this.state.algorithms) // [bubble, insertion, selection]
            .map((currAlgorithm) => {
                return currAlgorithm === algoName ? newObj[currAlgorithm] = true : newObj[currAlgorithm] = false
            })
            this.setState( {algorithms: newObj, drawerVisibility: false} )
    }


    visualizationHandler = () => {
    
        // vsPressed becomes true regardless of which algorithm is selected 
        this.setState({ visualizationPressed: true, traverseLength: 0 })

        if (this.state.algorithms.bubble) {
        
            // Tentative: TODO put below in an if statement
            let clone = Object.assign({}, this.state)
            
            // NOTE: this was the original way of execution
            this.bubbleSort(clone.generatedNumArray)                         
        }
    }




    bubbleSwap = (extraArray, i) => {return new Promise(resolve => {
    
        // Decide whether to swap or not
        setTimeout(() => {
             this.setState({bubbleIndex: NaN, bubbleIndex2: i, bubbleArrayStatus: -1, bubbleSwapEntered: false})
        }, 700);

        setTimeout(() => {

            this.setState({ bubbleArrayStatus: 0, bubbleSwapEntered: false})   

            if (extraArray[i] > extraArray[i + 1]) {

                // Perform swap animation
                this.setState(prevState => ({
                ...prevState,
                algoSteps: {...prevState.algoSteps,
                    bubbleSteps: {
                        ...prevState.algoSteps.bubbleSteps,
                        swaps: true
                    }},
                    bubbleSwapEntered: true,
                    bubbleIndex: i
                }), () => { 

                // Swap in the state 
                let k = extraArray[i];
                extraArray[i] = extraArray[i + 1];
                extraArray[i + 1] = k;
                    setTimeout(() => {
                        resolve(extraArray)
                    }, 800)
                })
                                 
            } else {                
                setTimeout(() => resolve(null), 20) 
            }
       
        }, 1500)  
    })}
    

    arrayTraverse = () => {return new Promise(async (resolve) => {

        let extraArray = [...this.state.generatedNumArray]
        setTimeout(async () => {
            
            setTimeout(() => {
                // Code 7 Highlights for loop
                this.setState({bubbleArrayStatus: 7})
            }, 20); 

            for (let i = 0; i < ((extraArray.length - 1) - this.state.traverseLength); i++) {

                let result = await this.bubbleSwap(extraArray, i)

                if (result) {
                    // Sets state after animation
                    
                    this.setState({ generatedNumArray: result, bubbleIndex: NaN, bubbleSwapEntered: false })  
                    setTimeout(() => {
                    // Post Swap below, Code 1
                        this.setState({bubbleIndex2: i, bubbleSwapEntered: false, bubbleArrayStatus: 1})

                    }, 1);       
                }
                else {
                    setTimeout(() => {
                        // No swap below, code 3
                        this.setState({bubbleIndex: NaN, bubbleIndex2: i, bubbleSwapEntered: false, bubbleArrayStatus: 3})
                    }, 3);
                }
                
            }
            resolve(true)
        }, 2000);
    })}


    bubbleIteration = async () => {return new Promise(async (resolve) => {
        
        do {
            let ans;
            setTimeout(() => {
                // Code 6 highlights do initial do loop
                this.setState(prevState => ({
                    ...prevState,
                    algoSteps: {...prevState.algoSteps,
                        bubbleSteps: {...prevState.bubbleSteps,
                            swaps: false}
                    },
                    bubbleArrayStatus: 6
                }))
        
            }, 1000);                
            
            ans  = await this.arrayTraverse()
             
            // Traversal complete at this point   
            if (ans) {

                if (this.state.algoSteps.bubbleSteps.swaps) {
                    setTimeout(() => {
                        // Code 5 highlights end for and while clause
                        this.setState(prevState => ({traverseLength: prevState.traverseLength + 1, bubbleArrayStatus: 5, bubbleSwapEntered: false, bubbleIndex2: NaN }))
                    }, 20); 
                    
                // At below point, sorting is complete
                } else {
                    setTimeout(() => {
                        // Code 4 highlights the entire array once sorting complete
                        this.setState({visualizationPressed: false, bubbleIndex: NaN, bubbleIndex2: NaN, bubbleArrayStatus: 4}) 
                    }, 20);
                }   
            }

        } while (this.state.algoSteps.bubbleSteps.swaps)
    })}

    bubbleSort = () => {
        this.bubbleIteration();
        return
    }



    render() {
        
        return (
            <div onClick = {this.state.drawerVisibility ? this.toggleVisibility : null}>
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
                        <Drawer visibility = {this.state.drawerVisibility} toggleVis = {this.toggleVisibility}/>                    
                        <div className = {classes.Btndiv}>
                            <button className = {classes.Buttons} onClick = {() => this.generateNumbers(14)}>Create New Array</button>
                            <button className = {classes.Buttons} 
                                    onClick = {() => this.clearState({newArrayClicked: true, algorithms: {...this.state.algorithms}})}>Clear Array
                            </button>
                            <button className = {`${classes.Buttons} ${classes.SmallBtn}`} onClick = {this.visualizationHandler}>Visualize!</button>
                        </div>
                    </Header>
                    
                    <main>
                        <Algobody/>
                    </main>
                    <Footer>
                        <span className = {classes.FooterSpan} style = {{ color: '#FADADA', fontSize: '0.9rem'}}>About</span>
                    </Footer>

                </GlobalPropsContext.Provider>   
            </div>
        )
    }

 }

 export default Layout;