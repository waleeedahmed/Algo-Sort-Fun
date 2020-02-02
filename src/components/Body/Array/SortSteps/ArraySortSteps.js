import React from 'react';
import classes from './ArraySortSteps.css';
import withContext from '../../../../context/withContext';
import BubbleComponent from '../SortingLogic/Bubble/Bubble';
import SelectionComponent from '../SortingLogic/Selection/Selection'

class ArraySortSteps extends React.Component {

    render() {
        let algoComponent;
        if (this.props.value.algorithms.bubble) {
            algoComponent = <BubbleComponent/>
        }
        else if (this.props.value.algorithms.selection) {
            algoComponent = <SelectionComponent/>
        }

        return (
            <div className = {classes.ArraySortSteps}>
                {algoComponent}          
            </div>
        )
    }
}



export default withContext(ArraySortSteps);