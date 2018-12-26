import { convertToRaw, EditorState } from "draft-js"
import React, { Component } from "react"
import {Thing} from "epsilon-base"
import NoteEditor from "./NoteEditor"

interface Props {
  thing: Thing
  onChange: any
}

class NoteComponent extends Component<Props, {}> {
  noteEditor: any

  render() {
    const { thing, onChange } = this.props
    return (
      <div
        id="note-component"
        style={{ height: "100%" }}
        onClick={() => this.noteEditor && this.noteEditor.focus()}
      >
        <NoteEditor
          ref={(ref: any) => (this.noteEditor = ref)}
          id={thing.id}
          content={thing.value}
          onChange={(editorState: EditorState) => {
            const plainText = editorState.getCurrentContent().getPlainText()
            const value = JSON.stringify(
              convertToRaw(editorState.getCurrentContent())
            )
            const name = plainText
              .trim()
              .split(/\n/)[0]
              .substring(0, 16)
            if (name) {
              onChange(Object.assign({}, thing, { name, value }))
            } else {
              onChange(Object.assign({}, thing, { value }))
            }
          }}
        />
      </div>
    )
  }
}

export default NoteComponent
