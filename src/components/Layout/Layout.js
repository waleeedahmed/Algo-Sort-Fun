import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Header from '../UI/Header/Header';
import Drawer from '../UI/Drawer/Drawer';
//import DrawerExtension from './../UI/DrawerExtension/DrawerExtension';
import classes from './Layout.css';

class Layout extends Component {


    render() {
        return (
            <Auxiliary>
                <Header>
                    Algo-Sort Fun
                    <Drawer/>
                </Header>
                
                <main className = {classes.Content}>
                    {this.props.children}
                </main>
                <p>footer</p>    
            </Auxiliary>
        )
    }
 }

 export default Layout;