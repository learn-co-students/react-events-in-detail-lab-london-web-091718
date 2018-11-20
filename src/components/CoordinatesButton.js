// Code CoordinatesButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class CoordinatesButton extends React.Component {

    getCordinates = (e) => {
        let arr = []
        arr.push(e.clientX)
        arr.push(e.clientY)
        return arr
    }

    render () {
        return (
            <button onClick={e => this.props.onReceiveCoordinates(this.getCordinates(e))}>Click</button>
        )
    }
}

export default CoordinatesButton