import React, { Component, Fragment } from 'react';
import {debounce} from 'lodash';

export default class Widget extends Component{
  state = {text: ''};

  debounceEvent(...args) {
    this.debouncedEvent = debounce(...args);
    return e => {
      e.persist();
      return this.debouncedEvent(e)
    }
  };

  handleChange = e => {
    this.setState({text: e.target.value});
  };

  componentWillUnmount() {
    // this.handleChange.cancel();
    this.debouncedEvent.cancel()
  }

  render() {
    return (
      <Fragment>
        <input type="text" onChange={this.debounceEvent(this.handleChange, 1000)}/>
        <textarea value={this.state.text} />
      </Fragment>
    )
  }
}