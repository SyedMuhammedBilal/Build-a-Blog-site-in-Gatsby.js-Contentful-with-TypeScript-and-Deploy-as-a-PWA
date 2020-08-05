import React, {RefObject} from 'react'

import "../styles/Icon.css"

export default class Icon extends React.Component {

  nameRef: RefObject < HTMLInputElement > = React.createRef()

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.nameRef.current) {
      alert(this.nameRef.current.value)
    }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="buy-cont">
          <div className="buy-box">
            <h3 ref={this.nameRef}>Buy Now</h3>
          </div>
        </div>
      </form>
    )
  }
}