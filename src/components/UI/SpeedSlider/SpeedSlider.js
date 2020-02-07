import React from 'react';
import classes from './SpeedSlider.css';


const speedSlider = props => {

    let assignedClasses = [classes.SliderOrientation, classes.Close];

    if (props.speedVisibilityStatus) {
        assignedClasses = [classes.SliderOrientation, classes.Open]
    }


    return (
        <div className = {assignedClasses.join(' ')}>
            <input type = 'range' min = '1' max = '2' defaultValue = '1' className = {classes.Slider} id = 'speedSlider' onChange = {props.speedChangeHandler}/>
        </div>    
    )
}

export default speedSlider;