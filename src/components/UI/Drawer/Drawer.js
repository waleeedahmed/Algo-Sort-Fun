import React, { Component } from 'react';
import classes from './Drawer.css';
import DrawerExtension from '../DrawerExtension/DrawerExtension';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

class Drawer extends Component {

    state = {
        drawerVisibility: false
    }

    toggleVisibility = () => {
        this.setState({drawerVisibility: !this.state.drawerVisibility})
    }

    render() {
        return (
            <Auxiliary>
                <ul>
                    <li className = {classes.Li} onClick = {this.toggleVisibility}>Pick an algorithm</li>
                </ul>
                <DrawerExtension toggleStatus = {this.state.drawerVisibility}/>     
            </Auxiliary>
        )
    }
} 


export default Drawer;