import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import ArrayBuilder from '../../components/Body/Array/ArrayBuilder/ArrayBuilder';
import ArrayDescriptor from '../../components/Body/Array/ArrayDescriptor/ArrayDescriptor';
import ArraySortSteps from '../../components/Body/Array/SortSteps/ArraySortSteps';

class Algobody extends Component {
    render() {
        return (
            <Auxiliary>
                <ArrayBuilder/>
                <ArraySortSteps/>
                <ArrayDescriptor/>
                <p>Sorting statistics</p>
            </Auxiliary>
        )
    }
}

export default Algobody;