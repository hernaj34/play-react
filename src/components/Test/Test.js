import React, { Component } from 'react';
import PdfViewer from '../Pdf/PdfViewer';
import _ from 'lodash';

class Test extends Component {
  constructor(props){
    super(props);
    this.state = { valor1: "pepe", valor2: "paco" };
  }
  
  handleOnChange(field,value){
    this.setState(
      _.assign({},this.state,{[field]: value})
    );
  }

  render() {
    return (
      <div> 
        <PdfViewer />
      </div>
    );
  }
}


export default Test;