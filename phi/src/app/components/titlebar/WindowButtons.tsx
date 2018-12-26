import React from "react"
import { remote } from "electron"

const WindowButtons = ({}) => (
  <div id="window-buttons" className="btn-toolbar">
    <div className="btn-group btn-group-sm" role="group" aria-label="">
      <button
        id="max-btn"
        type="button"
        className="btn btn-success"
        onClick={event => {
          const window = remote.getCurrentWindow()
          if (window.isMaximized()) {
            window.restore()
          } else {
            window.maximize()
          }
        }}
      />
      <button
        id="min-btn"
        type="button"
        className="btn btn-warning"
        onClick={event => {
          const window = remote.getCurrentWindow()
          window.minimize()
        }}
      />
      <button
        id="close-btn"
        type="button"
        className="btn btn-danger"
        onClick={event => {
          const window = remote.getCurrentWindow()
          window.close()
        }}
      />
    </div>
  </div>
)

export default WindowButtons
