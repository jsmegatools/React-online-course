import React, { Component } from 'react';
import './styles.css'

class TabButton extends Component {
  constructor() {
    super();
    this.setActiveTab = this.setActiveTab.bind(this);
  }

  setActiveTab() {
    this.props.setActiveTab(this.props.index);
  }

  renderContent() {
    const { render, name, index } = this.props;
    if (render) {
      return render();
    } else if (name) {
      return name;
    }
    return index;
  }

  render() {
    return (
      <li
        className="jsmt-tab-button"
        onClick={this.setActiveTab}
      >
        {this.renderContent()}
      </li>
    );
  }

}

export default TabButton;
