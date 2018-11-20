// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  buttonClickHandler = (event) => {
    const coordinates = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coordinates);
  };

  render() {
    return <button onClick={(event) => this.buttonClickHandler(event)}>Coordinates</button>
  }
}
