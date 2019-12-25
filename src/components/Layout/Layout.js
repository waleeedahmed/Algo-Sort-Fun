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
        otherState: true,
        thirdValue: 3,
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


    bubbleOn = () => {
        this.setState( {bubble: true} )
        
    }


    render() {
        return (
            <Auxiliary>
                <GlobalPropsContext.Provider value = {{

                    generatedNumArray: this.state.generatedNumArray,
                    otherState: this.state.otherState,
                    thirdValue: this.state.thirdValue,
                    algorithms: this.state.algorithms,
                    bubbleOn: this.bubbleOn 
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