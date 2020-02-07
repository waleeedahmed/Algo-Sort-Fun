import React from 'react';
import classes from './Drawer.css';
import DrawerExtension from '../DrawerExtension/DrawerExtension';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';


const drawer = props => (
    <Auxiliary>
        <ul className = {props.visibility ? `${classes.Ul} ${classes.Li} ${classes.DrawerOn}` : classes.Ul} onClick = {!props.vsPressed ? props.toggleVis : null}>
            <li>Pick an Algorithm &#9662;</li>
        </ul>
        <DrawerExtension toggleStatus = {props.visibility}/>     
    </Auxiliary>
)

export default drawer;