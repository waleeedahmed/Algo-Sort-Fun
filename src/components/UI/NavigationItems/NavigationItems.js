import React from 'react';
import classes from './NavigationItems.css';
import GlobalPropsContext from '../../../context/globalPropsContext';

const navigationItems = props => (
    <GlobalPropsContext.Consumer>
        { context =>
            <ul className = {classes.Ul}>
                <li className = {classes.Li} onClick = {() => context.algoSwitchHandler('bubble')}>Bubble Sort</li>
                <li className = {classes.Li} onClick = {() => context.algoSwitchHandler('selection')}>Selection Sort</li>
                <li className = {classes.Li} onClick = {() => context.algoSwitchHandler('insertion')}>Insertion Sort</li>
                <li className = {classes.Li} onClick = {() => context.algoSwitchHandler('merge')}>Merge Sort</li>
            </ul>
        }
    </GlobalPropsContext.Consumer>
)

export default navigationItems;