import React from 'react'

class CoordinatesButton extends React.Component {
    
    coordinates(event) {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render () {
        return (<button onClick={event => this.coordinates(event)} />)
    }
}

export default CoordinatesButton