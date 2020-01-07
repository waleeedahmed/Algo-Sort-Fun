import React from 'react';
import classes from './ArraySortSteps.css';
import withContext from '../../../../context/withContext';
import BubbleComponent from '../SortingLogic/Bubble/bubble';

class ArraySortSteps extends React.Component {

    render() {
        //let x = <p>123</p>
        if (this.props.value.algorithms.bubble) {
            //x = (<p>rhsfbsf</p>)
        }

        return (
            <div className = {classes.ArraySortSteps}>
                <BubbleComponent/>
                Iteration Number:<br/>
            </div>
        )
    }
}



export default withContext(ArraySortSteps);