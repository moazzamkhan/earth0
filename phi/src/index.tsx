import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import App from "./app/App"
import appStateReducer from "./app/reducers/app-state.reducer"
import "./index.less"

let storePromise: any
if (process.env.PHI_CONTEXT === "browser") {
  storePromise = import("./store/web/ThingStore")
} else {
  storePromise = import("./store/electron/ThingStore")
}


// load plugins

storePromise.then((storeModule: any) => {  
  const thingStore = new storeModule.ThingStore()

  const store = createStore(appStateReducer, thingStore.getData())

  store.subscribe(() => {
    thingStore.saveData(store.getState())
  })

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  )
})
