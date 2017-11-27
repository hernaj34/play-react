import React from 'react';
import PDF from 'react-pdf-js';
import file from './example_with_comments.pdf';

class PdfViewer extends React.Component {
  state = {};
  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  }

  onPageComplete = (page) => {
    this.setState({ page });
  }

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  }

  renderPagination = (page, pages) => {
    let previousButton = <li className="previous" onClick={this.handlePrevious}><i className="fa fa-arrow-left"></i> Previous</li>;
    if (page === 1) {
      previousButton = <li className="previous disabled"><i className="fa fa-arrow-left"></i> Previous</li>;
    }
    let nextButton = <li className="next" onClick={this.handleNext}>Next <i className="fa fa-arrow-right"></i></li>;
    if (page === pages) {
      nextButton = <li className="next disabled">Next <i className="fa fa-arrow-right"></i></li>;
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
      );
  }

  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div style={{height: 200, width: 200}}>
      
        <PDF file={file} onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} page={this.state.page} rotate={0} scale={1}/>
        {pagination}
      </div>
    )
  }
}

export default PdfViewer;