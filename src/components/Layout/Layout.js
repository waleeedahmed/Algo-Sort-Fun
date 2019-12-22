import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Header from '../UI/Header/Header';

class Layout extends Component {
    render() {
        return (
            <Auxiliary>
                <Header/>
                <p>drawer</p>
                {this.props.children}
                <p>footer</p>    
            </Auxiliary>
        )
    }
 }

 export default Layout;