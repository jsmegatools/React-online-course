import React, { Component } from 'react';
import TabButton from './TabButton/TabButton';
import TabSection from './TabSection/TabSection';
import './styles.css';

class Tabs extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0
    };
    this.setActiveTab = this.setActiveTab.bind(this);
  }

  setActiveTab(activeTab) {
    this.setState({ activeTab });
  }

  renderTabs() {
    return React.Children.map(
      this.props.children,
      (child, index) =>
        <TabButton
          {...child.props}
          setActiveTab={this.setActiveTab}
          active={this.state.activeTab === index}
          index={index}
        />
    )
  }

  renderActiveSection() {
    return React.Children.toArray(this.props.children)
      .filter((child, index) => {
        return index === this.state.activeTab;
      });
  }

  render() {
    return (
      <div>
        <ul className="jsmt-tab-buttons">
          {this.renderTabs()}
        </ul>
        {this.renderActiveSection()}
      </div>
    );
  }

}

export { Tabs, TabSection };
