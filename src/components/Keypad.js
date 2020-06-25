
import React, { Component } from 'react'

export default class Keypad extends Component {
    render() {

    let handleKeyUp = () => {
            console.log('Entering password...')
        }

        return(
            <input onKeyUp={handleKeyUp} type="password" />
        )
    }
}
