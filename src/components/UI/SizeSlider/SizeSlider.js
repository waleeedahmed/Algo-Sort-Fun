import React from 'react';
import classes from './SizeSlider.css';

const sizeSlider = props => {

    let assignedClasses = [classes.SliderOrientation, classes.Close];

    if (props.sizeVisibilityStatus) {
        assignedClasses = [classes.SliderOrientation, classes.Open]
    }

    return(
        <div className = {assignedClasses.join(' ')}>
            <input type = 'range' min = '1' max = '2' defaultValue = '1' className = {classes.Slider} id = 'sizeSlider' onChange = {props.arrSizeChangeHandler}/>
        </div>
    )
}

export default sizeSlider;