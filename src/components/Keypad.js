import React, { Component } from 'react'

export default class Keypad extends Component {

    logShit = () => {
        console.log("Entering password...")
    }

    render() {
        return (
            <input onKeyUp={this.logShit} type='password' />
        )
    }
}