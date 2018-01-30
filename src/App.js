import React, { Component, Fragment } from 'react';
import Widget from './Widget';

class App extends Component{

  state = {show: false};

  handleClick = () => {
    this.setState(prevState => ({show: !prevState.show}));
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.handleClick}>Toggle</button>
        {this.state.show ? <Widget/> : null}
      </Fragment>
    );
  }
}

export default App;
