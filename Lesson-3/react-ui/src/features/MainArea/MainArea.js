import React, { Component } from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

class MainArea extends Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    const content = this.props.isFetching ? <RefreshIndicator
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
        {content}
      </div>
    );
  }
}

export default MainArea;
