import React, { Component } from 'react';

class TabSection extends Component {

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }

}

export default TabSection;
