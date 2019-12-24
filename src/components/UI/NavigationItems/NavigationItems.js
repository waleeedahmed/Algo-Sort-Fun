import React from 'react';
import classes from './NavigationItems.css';

const navigationItems = props => (
    <ul className = {classes.Ul}>
        <li className = {classes.Li}>Bubble Sort</li>
        <li className = {classes.Li}>Selection Sort</li>
        <li className = {classes.Li}>Insertion Sort</li>
        <li className = {classes.Li}>Merge Sort</li>
    </ul>
)

export default navigationItems;