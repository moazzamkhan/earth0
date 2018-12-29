import BaseComponent from "../BaseComponent";
import EmailEditorComponent from "./EmailEditorComponent";
import EmailRendererComponent from "./EmailRendererComponent";

export default class EmailsComponent extends BaseComponent {
    
  getEditor() {
    return EmailEditorComponent
  }

  getRenderer() {
    return EmailRendererComponent
  }

  getItemLabel() {
    return "Email"
  }
}
