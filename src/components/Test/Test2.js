import React, { Component } from 'react';
import AccountLock from '../Icons/AccountLock';

class Test2 extends Component {
  constructor(props) {
    super(props);
    this.state = {message: "Initial"};
  }
  
  componentDidMount() {
    this.setState({message: "ComponentDidMount"});
    setTimeout(this.changeState.bind(this),1000);
  }
  
  changeState(){
    this.setState({message: "Change state"});
  }
  render() {
    return (
      <div>
        <h1>Helo world! at {this.state.message}</h1>
        <AccountLock className="test" height={16} width={16} />
      </div>
    );
  }
}

export default Test2;