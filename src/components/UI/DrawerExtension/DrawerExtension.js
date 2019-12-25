import React from 'react';
import classes from './DrawerExtension.css';
import NavigationItems from './../NavigationItems/NavigationItems';


const drawerExtension = props => {

    let assignedClasses = [classes.Drawerext, classes.Close]

    if (props.toggleStatus) {
        assignedClasses = [classes.Drawerext, classes.Open]
    }

    return (
        <div className = {assignedClasses.join(' ')}>
                    <NavigationItems/>
            
        </div>
    )
}

export default drawerExtension;