import React from 'react';
import classes from './NavigationItems.css';
import GlobalPropsContext from '../../../context/globalPropsContext';

const navigationItems = props => (
    <GlobalPropsContext.Consumer>
        { context =>
            <ul className = {classes.Ul}>
                <li className = {classes.Li} onClick = {context.bubbleOn}>Bubble Sort</li>
                <li className = {classes.Li}>Selection Sort</li>
                <li className = {classes.Li}>Insertion Sort</li>
                <li className = {classes.Li}>Merge Sort</li>
            </ul>
        }
    </GlobalPropsContext.Consumer>
)

export default navigationItems;