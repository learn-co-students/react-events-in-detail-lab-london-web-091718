import React, { Component } from 'react'

class CoordinatesButton extends React.Component {

    render() {
        return (
            <button onClick={this.handleClick}/>
        )
    }

    handleClick = event => {
        const coords = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coords)
    }

}

export default CoordinatesButton

