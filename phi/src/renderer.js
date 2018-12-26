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
    // do on init
  }
})()
