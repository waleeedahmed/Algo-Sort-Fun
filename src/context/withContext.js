import React from 'react';
import GlobalPropsContext from './globalPropsContext';

const WithContext = (Component) => {
  return (props) => (
      <GlobalPropsContext.Consumer>
           {value =>  <Component {...props} value={value} />}
      </GlobalPropsContext.Consumer>
  )
}

export default WithContext;