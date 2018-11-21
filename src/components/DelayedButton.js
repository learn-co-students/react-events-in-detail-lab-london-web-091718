// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {

    handleClick = (event) => {setTimeout(() => {
        event.persist()
                this.props.onDelayedClick(event)
            }, this.props.delay)
        }

    render(){
        return(
            <button onClick={this.handleClick}>Button</button>
        )
    }
}

export default DelayedButton