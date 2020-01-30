import React, { Component } from 'react';
import classes from './Drawer.css';
import DrawerExtension from '../DrawerExtension/DrawerExtension';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

class Drawer extends Component {

    render() {
        return (
            <Auxiliary>
                <ul>
                    <li className = {this.props.visibility ? `${classes.Li} ${classes.DrawerOn}` : classes.Li} onClick = {this.props.toggleVis}>Pick an Algorithm &#9662;</li>
                </ul>
                <DrawerExtension toggleStatus = {this.props.visibility}/>     
            </Auxiliary>
        )
    }
} 


export default Drawer;