import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    focusMaine = () => {
        console.log('Good!')
    }

    babyComeBack = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onFocus={this.focusMaine} onBlur={this.babyComeBack}>This Thing</button>
        )
    }
}