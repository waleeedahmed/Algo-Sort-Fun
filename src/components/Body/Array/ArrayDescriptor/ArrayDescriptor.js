import React from 'react';
import classes from './ArrayDescriptor.css';
import GlobalPropsContext from '../../../../context/globalPropsContext';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

const arrayDescriptor = props => {
    
    return (
        <Auxiliary>
            <div className = {classes.ArrayDescriptor}>
                <GlobalPropsContext.Consumer> 
                    { context => context.algorithms.bubble ? <p>Bubble sort activated</p> : <p>this is the array descriptor</p> }
                </GlobalPropsContext.Consumer> 
            </div>
        </Auxiliary>
    )
}

export default arrayDescriptor;