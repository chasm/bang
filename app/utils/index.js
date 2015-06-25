import { filter, flatten } from "lodash"

export let generateMinefield = (f, x, y, z) => {
  return Array.apply(null, Array(x)).map(
    () => Array.apply(null, Array(y)).map(
      () => Array.apply(null, Array(z)).map(
        () => (((Math.floor(Math.random() * f) % f) === 0) ? -1 : 0)
      )
    )
  )
}

export let evaluateMinefield = (cube) => {
  let getCount = (arr, x, y, z) => {
    let pos = [ -1, 0, 1 ]

    let neighborhood = pos.map(
      (dx) => pos.map(
        (dy) => pos.map(
          (dz) => arr[ x + dx ] &&
            arr[ x + dx ][ y + dy ] &&
            arr[ x + dx ][ y + dy ][ z + dz ]
        )
      )
    )

    return filter(flatten(neighborhood, true), (x) => x === -1).length
  }

  return cube.map(
    (plane, x) => plane.map(
      (row, y) => row.map(
        (cell, z) => (cell === -1 ? -1 : getCount(cube, x, y, z))
      )
    )
  )
}
