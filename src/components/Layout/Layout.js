import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Header from '../UI/Header/Header';
import Drawer from '../UI/Drawer/Drawer';
//import DrawerExtension from './../UI/DrawerExtension/DrawerExtension';
import classes from './Layout.css';
import Algobody from '../../containers/Algobody/Algobody';

class Layout extends Component {

    state = {
        generatedNumArray: []
    }
    
    generateNumbers = (quantity) => {
        let newArray = []; 

        for (let i = 0; i <= quantity; i++) {
            newArray.push((Math.random() * 50).toFixed(0));
        }
        this.setState({generatedNumArray: newArray});
    }


    render() {
        return (
            <Auxiliary>
                <Header>
                    Algo-Sort Fun
                    <Drawer/>

                    <div className = {classes.ArrayGenDiv} onClick = {() => this.generateNumbers(14)}>Generate New Array</div>
                </Header>
                
                <main className = {classes.Content}>
                    <Algobody arrayState = {this.state.generatedNumArray}/>
                </main>
                <p>footer</p>    
            </Auxiliary>
        )
    }
 }

 export default Layout;