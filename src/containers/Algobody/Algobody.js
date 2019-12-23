import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import ArrayBuilder from '../../components/Body/Array/ArrayBuilder';

class Algobody extends Component {
    render() {
        return (
            <Auxiliary>
                <ArrayBuilder/>
                <p>Array description component</p>
                <p>Step explanation component</p>
                <p>Sorting statistics</p>
            </Auxiliary>
        )
    }
}

export default Algobody;