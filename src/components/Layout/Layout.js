import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Header from '../UI/Header/Header';
import Drawer from '../UI/Drawer/Drawer';
//import DrawerExtension from './../UI/DrawerExtension/DrawerExtension';
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
    }


    render() {
        return (
            <Auxiliary>
                <GlobalPropsContext.Provider value = {{
                    generatedNumArray: this.state.generatedNumArray,
                    algorithms: this.state.algorithms,
                    algoSwitchHandler: this.algoSwitchOnHandler 
                }}>
                <Header>
                    Algo-Sort Fun
                    <Drawer/>
                    <div className = {classes.ArrayGenDiv} onClick = {() => this.generateNumbers(14)}>Generate New Array</div>
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