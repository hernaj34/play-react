import React, { Component } from 'react';
import PdfViewer from '../Pdf/PdfViewer';
import _ from 'lodash';
import suma from './helper';

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
    let valorSuma = suma(7,5);
    return (
      <div> 
        <h1>Suma {valorSuma}</h1>
      </div>
    );
  }
}


export default Test;