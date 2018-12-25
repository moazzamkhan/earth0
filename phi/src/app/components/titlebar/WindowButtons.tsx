import React from "react"

const WindowButtons = ({}) => (
  <div id="window-buttons" className="btn-toolbar">
    <div className="btn-group btn-group-sm" role="group" aria-label="">
      <button id="max-btn" type="button" className="btn btn-success" />
      <button id="min-btn" type="button" className="btn btn-warning" />
      <button id="close-btn" type="button" className="btn btn-danger" />
    </div>
  </div>
)

export default WindowButtons
