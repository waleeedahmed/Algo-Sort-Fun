import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import ArrayBuilder from '../../components/Body/Array/ArrayBuilder/ArrayBuilder';
import ArrayDescriptor from '../../components/Body/Array/ArrayDescriptor/ArrayDescriptor';

class Algobody extends Component {
    render() {
        return (
            <Auxiliary>
                <ArrayBuilder/>
                <p>Step explanation component</p>
                <ArrayDescriptor/>
                <p>Sorting statistics</p>
            </Auxiliary>
        )
    }
}

export default Algobody;