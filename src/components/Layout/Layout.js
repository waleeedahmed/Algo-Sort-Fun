import React, { Component } from 'react';
//import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Header from '../UI/Header/Header';
import Footer from '../UI/Footer/Footer';
import Drawer from '../UI/Drawer/Drawer';
import classes from './Layout.css';
import Algobody from '../../containers/Algobody/Algobody';
import GlobalPropsContext from '../../context/globalPropsContext';


class Layout extends Component {

    // **Important: add into clearState whatever is added here 
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
        currentIndex: NaN,
        currentIndex2: NaN,
        newArrayClicked: false,
        showSwapping: false,
        arrayStatus: 0
    }


    // This method clears up the state aside from 
    // properties and their values provided in args
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
            currentIndex: NaN,
            currentIndex2: NaN,
            newArrayClicked: false,
            showSwapping: false,
            arrayStatus: 0
        }

        // Merge provided args into the emptyState
        this.setState((state, props) => { 
            return Object.assign(emptyState, ...args)
        })
    }

    // For CSSTransition animation purposes in arrayBuilder
    arrayClickToggleHandler = () => {
        this.setState({newArrayClicked: !this.state.newArrayClicked})
    }

    
    
    toggleVisibility = () => {
        this.setState( {drawerVisibility: !this.state.drawerVisibility} )
    }

    // when create new array button is clicked
    generateNumbers = (quantity) => {
        let newArray = []; 

        for (let i = 0; i <= quantity; i++) {
            newArray.push(Number((Math.random() * 99).toFixed(0)));
        }
        this.clearState({generatedNumArray: newArray, newArrayClicked: true, algorithms: {...this.state.algorithms}})
    }

    // handler determines which algorithm was pressed
    algoSwitchOnHandler = (algoName) => {
        let newObj = {};
        Object.keys(this.state.algorithms) // [bubble, insertion, selection]
            .map((currAlgorithm) => {
                return currAlgorithm === algoName ? newObj[currAlgorithm] = true : newObj[currAlgorithm] = false
            })
            this.setState( {algorithms: newObj, drawerVisibility: false} )
    }

    // When visualize button is pressed
    visualizationHandler = () => {
    
        // vsPressed becomes true regardless of which algorithm is selected 
        this.setState({ visualizationPressed: true, traverseLength: 0 })

        //let clone = Object.assign({}, this.state)
        
        if (this.state.algorithms.bubble) {

            this.bubbleSort()                         
        }
        else if (this.state.algorithms.selection) {
            
            this.selectionSort()
        }
    }


    // BUBBLE SORT IMPLEMENTATION***

    bubbleSwap = (extraArray, i) => {return new Promise(resolve => {
    
        // Decide whether to swap or not (Code -1, shown in purple)
        setTimeout(() => {
             this.setState({currentIndex: NaN, currentIndex2: i, arrayStatus: -1, showSwapping: false})
        }, 700);

        setTimeout(() => {

            this.setState({ arrayStatus: 0, showSwapping: false})   

            if (extraArray[i] > extraArray[i + 1]) {

                // Perform swap animation
                this.setState(prevState => ({
                ...prevState,
                algoSteps: {...prevState.algoSteps,
                    bubbleSteps: {
                        ...prevState.algoSteps.bubbleSteps,
                        swaps: true
                    }},
                    showSwapping: true,
                    currentIndex: i
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
                // Shows Red after this timeout                
                setTimeout(() => resolve(null), 100) 
            }
       
        }, 1500)  
    })}
    

    arrayTraverse = () => {return new Promise(async (resolve) => {

        let extraArray = [...this.state.generatedNumArray]
        setTimeout(async () => {
            
            setTimeout(() => {
                // Code 7 Highlights for loop
                this.setState({arrayStatus: 7})
            }, 20); 

            for (let i = 0; i < ((extraArray.length - 1) - this.state.traverseLength); i++) {

                let result = await this.bubbleSwap(extraArray, i)

                if (result) {
                    // Sets state immediately after animation flip
                    this.setState({ generatedNumArray: result, currentIndex: NaN, showSwapping: false }) 

                    setTimeout(() => {
                    // Post Swap below (shown in gold), Code 1
                        this.setState({currentIndex2: i, showSwapping: false, arrayStatus: 1})

                    }, 0.05);       
                }
                else {
                    setTimeout(() => {
                        // No swap below (shown in RED), code 3
                        this.setState({currentIndex: NaN, currentIndex2: i, showSwapping: false, arrayStatus: 3})
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
                // Code 6 highlights the initial two lines of DO loop
                this.setState(prevState => ({
                    ...prevState,
                    algoSteps: {...prevState.algoSteps,
                        bubbleSteps: {...prevState.bubbleSteps,
                            swaps: false}
                    },
                    arrayStatus: 6
                }))
        
            }, 1000);                
            
            // Waiting for array to be traversed 
            ans  = await this.arrayTraverse()
             
            // Traversal complete at this point   
            if (ans) {

                if (this.state.algoSteps.bubbleSteps.swaps) {
                    setTimeout(() => {
                        // Code 5 highlights end for and while clause
                        this.setState(prevState => ({traverseLength: prevState.traverseLength + 1, arrayStatus: 5, showSwapping: false, currentIndex2: NaN }))
                    }, 20); 
                    
                // At below point, sorting is complete
                } else {
                    setTimeout(() => {
                        // Code 4 highlights the entire 'traversed' array once sorting complete
                        this.setState({visualizationPressed: false, currentIndex: NaN, currentIndex2: NaN, arrayStatus: 4}) 
                    }, 20);
                }   
            }
        
        } while (this.state.algoSteps.bubbleSteps.swaps)
    })}

    // BubbleSorting begins from here
    bubbleSort = () => {
        this.bubbleIteration();
        //return
    }



    // SELECTION SORT IMPLEMENTATION

    selectionInner = (i, min, arr) => {return new Promise(async (resolve) => {
       
        let a = i + 1;
        let b = 1;

        for (let j = i + 1; j < arr.length; j++) {

            //eslint-disable-next-line
            setTimeout(() => {
                
                // Highlights the current number on the array
                setTimeout(() => {
                    this.setState({currentIndex: j, arrayStatus: 3})
                }, 10);
                

                if (arr[min] > arr[j]) {
                    min = j;
                    setTimeout(() => {
                        this.setState({currentIndex2: j, showSwapping: false, arrayStatus: 4})
                    }, 150);
                }

    
                setTimeout(() => {
                    this.setState({arrayStatus: 0})
                }, 800);

                if (a === arr.length - 1) {
                    setTimeout(() => { 
                        resolve(min)
                    }, 600);
                }
                a++
                
            }, 1000 * b);  
            b++ 
        }
    })}

    
    selectionSort = async () => {
        let arrayCopy = [...this.state.generatedNumArray]
        
        for (let i = 0; i < arrayCopy.length; i++) {

            //if (i === arrayCopy.length) {this.setState({currentIndex: NaN, currentIndex2: NaN, arrayStatus: 7, visualizationPressed: false}); break}

            let min = i;

                await new Promise((resolve) => {
                    setTimeout(() => {
                        this.setState({traverseLength: i}, () => resolve('done'))
                    }, 1500);
                })
                

                // highlights outer for loop and current min 
                setTimeout(() => {
                    this.setState({currentIndex2: i, currentIndex: NaN, arrayStatus: 2})
                }, 300);

                let resMinimum = await this.selectionInner(i, min, arrayCopy) // *Stop at this point
                
    
                if (resMinimum) {
                    console.log('IF resMin block entered')
                    if (resMinimum !== i) {
                        // Highlights last IF statement
                        setTimeout(() => {
                            this.setState({arrayStatus: 5})
                        }, 5);
        
                        // Highlights body of last IF statement
                        setTimeout(() => {
                            // fetch value of i > currIdx2 and res > currIdx, perform animation flip  
                            this.setState({currentIndex2: i, currentIndex: resMinimum, showSwapping: true, arrayStatus: 6})                          
                        }, 250);
                                                                   
                    
                        setTimeout(() => {
                            // begin swap procedure
                            let tmp = arrayCopy[i]
                            arrayCopy[i] = arrayCopy[resMinimum]
                            arrayCopy[resMinimum] = tmp 

                            // set new array
                            this.setState({generatedNumArray: arrayCopy, currentIndex2: NaN, currentIndex: NaN, showSwapping: false, arrayStatus: 0})
                        }, 900); 
                        
        
                        // post swap confirmation stage                     
                        setTimeout(() => {
                            this.setState({arrayStatus: 1, currentIndex2: i, currentIndex: resMinimum, showSwapping: false})
                        }, 902);
                    }
                    else {
                        setTimeout(() => {
                            this.setState({arrayStatus: 8, showSwapping: false, currentIndex: NaN, currentIndex2: NaN})
                        }, 300);
                    }
                }
                if (this.state.traverseLength === arrayCopy.length - 1) {
                    setTimeout(() => {
                        this.setState({currentIndex: NaN, currentIndex2: NaN, arrayStatus: 7, visualizationPressed: false})
                    }, 1000);    
                }
        } // end for 
    }




    render() {
        
        return (
            <div onClick = {this.state.drawerVisibility ? this.toggleVisibility : null}>
                <GlobalPropsContext.Provider value = {{
                    generatedNumArray: this.state.generatedNumArray,
                    algorithms: this.state.algorithms,
                    algoSwitchHandler: this.algoSwitchOnHandler,
                    tLength: this.state.traverseLength,
                    currIdx: this.state.currentIndex,
                    currIdx2: this.state.currentIndex2,
                    vsPressed: this.state.visualizationPressed,
                    newArrClicked: this.state.newArrayClicked,
                    arrayClickToggleHandler: this.arrayClickToggleHandler,
                    showSwapping: this.state.showSwapping,
                    arrayStatus: this.state.arrayStatus,
                    swapsPerformed: this.state.algoSteps.bubbleSteps.swaps
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













             // let j = i + 1
            // var myInterval = setInterval(() => {
            //     setTimeout(() => {
            //         this.setState({currentIndex: j})
            //     }, 150);
                

            //     if (arr[min] > arr[j]) {
            //         min = j;
            //         setTimeout(() => {
            //             this.setState({currentIndex2: j, showSwapping: false})
            //         }, 500);
            //     }

            //     if (a === arr.length - 1) {
            //         setTimeout(() => { 
            //             resolve(min)
            //             clearInterval(myInterval)
            //         }, 800);
            //     }
            //     a++
            //     j++
            // }, 800);