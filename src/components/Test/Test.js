import React, { Component } from 'react';
import PdfViewer from '../Pdf/PdfViewer';
import _ from 'lodash';

class Test extends Component {
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