import React, { Component } from 'react';
import { Page } from 'react-pdf';
import { Document } from 'react-pdf/build/entry.webpack';
import file from './example.pdf';
 
class PdfViewer extends Component {
  constructor(props){
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
      rotate: 0
    }
    this.onDocumentLoad = this.onDocumentLoad.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.handleRotate = this.handleRotate.bind(this);
  }
 
  onDocumentLoad({ numPages }) {
    this.setState({ numPages });
  }

  handlePage(page){
    this.setState({pageNumber: this.state.pageNumber + page});
  }
 
  handleRotate(rotate){
    this.setState({ rotate: this.state.rotate + rotate });
  }

  render() {
    const { pageNumber, numPages } = this.state;
    
    return (
      <div>
        <button onClick={() => this.handlePage(-1)} >Prev</button>
        <button onClick={() => this.handlePage(1)} >Next</button> 
        <button onClick={() => this.handleRotate(90)} >Rotate</button>
        <Document
          file={file}
          rotate={this.state.rotate}
          onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={this.state.pageNumber}/>
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

export default PdfViewer;