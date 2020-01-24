import React from 'react';
import classes from './Footer.css';

const footer = props => (
    <footer className = {classes.Footer}>{props.children}</footer>
)

export default footer;