import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import ArrayBuilder from '../../components/Body/Array/ArrayBuilder/ArrayBuilder';
import ArrayDescriptor from '../../components/Body/Array/ArrayDescriptor/ArrayDescriptor';
import ArraySortSteps from '../../components/Body/Array/SortSteps/ArraySortSteps';
import ArraySortData from '../../components/Body/Array/ArraySortData/ArraySortData';
import classes from './Algobody.css';

class Algobody extends Component {
    render() {
        return (
            <Auxiliary>
                <ArrayBuilder/>
                <div className = {classes.AlgobodyInfo}>
                    <ArrayDescriptor/>
                    <ArraySortSteps/>
                    <ArraySortData/>
                </div>
            </Auxiliary>
        )
    }
}

export default Algobody;