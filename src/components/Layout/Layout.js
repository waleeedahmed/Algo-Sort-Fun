import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

class Layout extends Component {
    render() {
        return (
            <Auxiliary>
                <p>drawer</p>
                <p>header</p>
                {this.props.children}
                <p>footer</p>    
            </Auxiliary>
        )
    }
 }

 export default Layout;