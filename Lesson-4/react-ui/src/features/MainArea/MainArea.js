import React, { Component } from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { Tabs, TabSection } from '../Tabs/Tabs';

class MainArea extends Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    const locations = this.props.isFetching ? <RefreshIndicator
      size={50}
      top={0}
      left={0}
      loadingColor="#FF9800"
      status="loading"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
      }}
    /> :
      this.props.locations.map(location =>
        <li key={location.id}>
          <img src={location.image} alt={location.name} />
          {location.name}
        </li>)

    return (
      <div className="home-page-container">
        <Tabs>
          <TabSection name="Locations">{locations}</TabSection>
          <TabSection name="Amenities">A list of amenities</TabSection>
          <TabSection name="Type">A list of types</TabSection>
        </Tabs>
      </div>
    );
  }
}

export default MainArea;
