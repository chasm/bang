import "babel-core/polyfill"

require("./styles/app.less")

import React, { Component } from "react"

import { Col, Grid, Row } from "react-bootstrap"

import { generateMinefield, evaluateMinefield } from "./utils"

import Cube from "./cube"

class App extends Component {
  render() {
    let mines = evaluateMinefield(generateMinefield(7, 8, 10, 12))

    let out = mines.map(
      (x, i) => <section className="Board">{
        x.map(
          (y, j) => <Row>{
            y.map(
              (z, k) => <Cube count={z} x={x} y={y} z={z} />
            )
          }</Row>
        )
      }</section>
    )

    return (
      <Grid className="Bang">{out}</Grid>
    )
  }
}

React.render( <App />, document.getElementById("app") )
