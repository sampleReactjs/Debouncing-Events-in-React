import React, { Component, Fragment } from 'react';
import {debounce} from 'lodash';

class Widget extends Component{
  state = {text: ''};

  handleChange = debounce(text => {
    this.setState({text});
  }, 1000);

  componentWillUnmount() {
    this.handleChange.cancel();
  }

  render() {
    return (
      <Fragment>
        <input type="text" onChange={e => this.handleChange(e.target.value)}/>
        <textarea value={this.state.text} />
      </Fragment>
    )
  }
}

class App extends Component {
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
