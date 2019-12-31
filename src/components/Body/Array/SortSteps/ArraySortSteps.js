import React from 'react';
import classes from './ArraySortSteps.css';
import withContext from '../../../../context/withContext';
import BubbleComponent from '../../Array/SortingLogic/bubble';

class ArraySortSteps extends React.Component {

    render() {
        //let x = <p>123</p>
        if (this.props.value.algorithms.bubble) {
            //x = (<p>rhsfbsf</p>)
        }

        return (
            <div className = {classes.ArraySortSteps}>
                Iteration Number:<br/><br/>
                <BubbleComponent/>
            </div>
        )
    }
}



export default withContext(ArraySortSteps);