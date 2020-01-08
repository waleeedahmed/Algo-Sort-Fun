import React from 'react';
import classes from './ArraySortData.css';
import withContext from '../../../../context/withContext';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

const arraySortData = props => {
    
    let displayData;

    if (props.value.algorithms.bubble) {
        displayData = (
            <Auxiliary>
                <p>Number of times for loop entered: </p>
                <p>Currently comparing %a% and %b%</p>
            </Auxiliary>
        )
    }


    return(
        <div className = {classes.ArraySortData}>
            {displayData}
        </div>
    )
}


export default withContext(arraySortData);