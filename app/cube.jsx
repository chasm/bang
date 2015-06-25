import React, { Component } from "react"

class Cube extends Component {

  constructor (props) {
    super(props)

    this.state = {
      hidden: true
    }
  }

  handleClick () {
    this.setState({
      hidden: false
    })
  }

  render () {
    let value = this.props.count === -1 ? "&times" : this.props.count
    let bomb = this.props.count === -1 ? " bomb" : ""
    let revealed = this.state.hidden ? "" : " revealed"

    let out = this.state.hidden ? "&middot;" : value

    return <span
      className={"Cube" + bomb + revealed}
      data-x={this.props.x}
      data-y={this.props.y}
      data-z={this.props.z}
      onClick={this.handleClick.bind(this)}
      dangerouslySetInnerHTML={{ __html: out }} />
  }
}

export default Cube
