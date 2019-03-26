import { getSelectedLayers } from 'sketch-plugin-helper'

export function resize ({ coordinateKey, dimensionKey }) {
  return function ({ coordinateOffset, dimensionOffset }) {
    return function () {
      const layers = getSelectedLayers()
      layers.forEach(function (layer) {
        const frame = layer.frame
        frame[coordinateKey] += coordinateOffset
        frame[dimensionKey] += dimensionOffset
      })
    }
  }
}
