import React from 'react';

class DelayedButton extends React.Component {
    
    handleOnClick = (event) => {
        event.persist()
        setTimeout( () => this.props.onDelayedClick(event), this.props.delay);
    }
        render() {
        return (
            <button onClick= { this.handleOnClick } >TimeOut</button>
            )
        }
}

export default DelayedButton
