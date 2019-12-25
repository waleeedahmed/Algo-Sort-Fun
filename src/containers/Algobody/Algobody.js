import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import ArrayBuilder from '../../components/Body/Array/ArrayBuilder/ArrayBuilder';

class Algobody extends Component {
    render() {
        return (
            <Auxiliary>
                <ArrayBuilder/>
                <p>Step explanation component</p>
                <p>Array description component</p>
                <p>Sorting statistics</p>
            </Auxiliary>
        )
    }
}

export default Algobody;