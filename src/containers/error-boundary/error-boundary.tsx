import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    error: null
  };
  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Something goes wrong</h1>
          <h3>Error: {this.state.error}</h3>
        </div>
      );
    }
    return this.props.children;
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error: error.message });
  }
}
