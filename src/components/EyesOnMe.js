// Code EyesOnMe Component Here
import React from 'react';


class EyesOnMe extends React.Component {
  focusHander = () => {
    console.log("Good!")
  }

  blurHandler = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return(

      <button onFocus={this.focusHander} onBlur={this.blurHandler}>Button!</button>
    )
  }
}

export default EyesOnMe