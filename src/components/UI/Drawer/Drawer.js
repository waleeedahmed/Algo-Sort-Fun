import React, { Component } from 'react';
import classes from './Drawer.css';
import DrawerExtension from '../DrawerExtension/DrawerExtension';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

class Drawer extends Component {

    render() {
        return (
            <Auxiliary>
                <ul className = {this.props.visibility ? `${classes.Ul} ${classes.Li} ${classes.DrawerOn}` : classes.Ul} onClick = {this.props.toggleVis}>
                    <li>Pick an Algorithm &#9662;</li>
                </ul>
                <DrawerExtension toggleStatus = {this.props.visibility}/>     
            </Auxiliary>
        )
    }
} 


export default Drawer;