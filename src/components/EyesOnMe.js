import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    render() {

        let handleOnFocus = () => {
            console.log('Good!')
        }

        let handleOnBlur = () => {
            console.log('Hey! Eyes on me!')
        }

        return(
            <button onFocus={handleOnFocus} onBlur={handleOnBlur}>Button</button>
        )
    }
}


