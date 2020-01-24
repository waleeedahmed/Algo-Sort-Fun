import React from 'react';
import classes from './ArraySortSteps.css';
import withContext from '../../../../context/withContext';
import BubbleComponent from '../SortingLogic/Bubble/bubble';

class ArraySortSteps extends React.Component {

    render() {
        let algoComponent;
        if (this.props.value.algorithms.bubble) {
            algoComponent = <BubbleComponent/>
        }

        return (
            <div className = {classes.ArraySortSteps}>
                {algoComponent}               
            </div>
        )
    }
}



export default withContext(ArraySortSteps);