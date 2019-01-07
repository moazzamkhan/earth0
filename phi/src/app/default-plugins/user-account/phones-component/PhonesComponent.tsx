import BaseComponent from "../BaseComponent";
import PhoneEditorComponent from "./PhoneEditorComponent";
import PhoneRendererComponent from "./PhoneRendererComponent";

export default class PhonesComponent extends BaseComponent {
  getEditor() {
    return PhoneEditorComponent
  }

  getItemType() {
    return "phone"
  }

  getRenderer() {
    return PhoneRendererComponent
  }

  getItemLabel() {
    return "Phone"
  }
}
