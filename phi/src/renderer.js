// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { remote } = require("electron")
;(function handleWindowControls() {
  // When document has loaded, initialise
  document.onreadystatechange = () => {
    if (document.readyState == "complete") {
      init()
    }
  }

  function init() {
    let window = remote.getCurrentWindow()
    const minButton = document.getElementById("min-btn"),
      maxButton = document.getElementById("max-btn"),
      closeButton = document.getElementById("close-btn")

    minButton.addEventListener("click", event => {
      window = remote.getCurrentWindow()
      window.minimize()
    })

    maxButton.addEventListener("click", event => {
      window = remote.getCurrentWindow()
      if (window.isMaximized()) {
        window.restore()
      } else {
        window.maximize()
      }
    })

    closeButton.addEventListener("click", event => {
      window = remote.getCurrentWindow()
      window.close()
    })
  }
})()
