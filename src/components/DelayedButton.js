// Code DelayedButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class DelayedButton extends React.Component {
    clickHandler = (e) => {
        e.persist()
        setTimeout( () => this.props.onDelayedClick(e), this.props.delay )
    }
    render () {
        return (
            <button onClick={ (e) => this.clickHandler(e) }>Delay Button</button>
        )
    }
}

export default DelayedButton