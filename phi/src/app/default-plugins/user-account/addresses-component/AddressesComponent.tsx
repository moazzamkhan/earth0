import BaseComponent from "../BaseComponent"
import AddressEditorComponent from "./AddressEditorComponent"
import "./AddressesComponent.less"
import AddressRendererComponent from "./AddressRendererComponent"

export default class AddressesComponent extends BaseComponent {
  getEditor() {
    return AddressEditorComponent
  }

  getItemType() {
    return "address"
  }
  
  getRenderer() {
    return AddressRendererComponent
  }

  getItemLabel() {
    return "Address"
  }
}
