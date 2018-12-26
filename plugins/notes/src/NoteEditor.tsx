import {
  convertFromRaw,
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  ContentBlock
} from "draft-js"
import React, { Component, SyntheticEvent } from "react"
import "./NoteEditor.less"
import { commandGroups } from "./toolbar-data"
import clone from "clone"

interface Props {
  id: string
  content: string
  onChange: (es: EditorState) => void
}

interface State {
  editorState: EditorState
  commandGroups: any
}

class NoteEditor extends Component<Props, State> {
  domEditor: any

  constructor(props: Props) {
    super(props)
    const editorState = this._editorStateFromString(this.props.content)
    this.state = { editorState, commandGroups }

    this._onChange = this._onChange.bind(this)
    this.handleKeyCommand = this.handleKeyCommand.bind(this)

    this._mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this)
    this._toggleBlockType = this._toggleBlockType.bind(this)
    this._toggleInlineStyle = this._toggleInlineStyle.bind(this)
  }

  _onChange(editorState: EditorState) {
    const commandGroups = this._newToolbarState(editorState)
    this.setState({ editorState, commandGroups }, () => {
      this.props.onChange(editorState)
    })
  }

  focus() {
    this.domEditor && this.domEditor.focus()
  }
  handleKeyCommand(command: any, editorState: EditorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this._onChange(newState)
      return "handled"
    }
    return "not-handled"
  }

  render() {
    return (
      <div id="note-editor-wrapper">
        <div id="note-toolbar">
          {this.state.commandGroups.map((cg: any[], index: number) => (
            <div
              key={`cg-${index}`}
              className="btn-group btn-group-sm"
              style={{ margin: 5 }}
            >
              {cg.map((cmd: any) => (
                <button
                  key={cmd.id}
                  type="button"
                  className={`btn btn-outline-secondary${
                    cmd.active ? " active" : ""
                  }`}
                  onClick={(e: SyntheticEvent) => {
                    e.preventDefault()
                    e.stopPropagation()
                    this._onCommand(cmd.id)
                  }}
                >
                  {cmd.label ? cmd.label : <i className={cmd.iconClassName} />}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div id="note-editor">
          <Editor
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={this._mapKeyToEditorCommand}
            onChange={this._onChange}
            ref={(ref: any) => (this.domEditor = ref)}
          />
        </div>
      </div>
    )
  }

  _onCommand(styleType: string) {
    if (
      ["BOLD", "ITALIC", "UNDERLINE", "CODE", "STRIKETHROUGH"].indexOf(
        styleType
      ) > -1
    ) {
      this._toggleInlineStyle(styleType)
    } else {
      this._toggleBlockType(styleType)
    }    
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.props.id !== prevProps.id) {
      const editorState = this._editorStateFromString(this.props.content)
      this.setState({ editorState }, () => {
        this.domEditor.focus()
      })
    }
  }

  componentWillUnmount() {
    console.log("Component unmounting")
  }

  _getBlockStyle(block: ContentBlock) {
    switch (block.getType()) {
      case "blockquote":
        return "RichEditor-blockquote"
      default:
        return null
    }
  }

  _editorStateFromString(content: string) {
    const editorState = content
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(content)))
      : EditorState.createEmpty()
    return EditorState.moveFocusToEnd(editorState)
  }

  _mapKeyToEditorCommand(e: any) {    
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4 /* maxDepth */
      )
      if (newEditorState !== this.state.editorState) {
        this._onChange(newEditorState)
      }
      return
    }
    return getDefaultKeyBinding(e)
  }

  _toggleBlockType(blockType: string) {
    this._onChange(RichUtils.toggleBlockType(this.state.editorState, blockType))
  }

  _toggleInlineStyle(inlineStyle: string) {
    this._onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    )
  }

  _newToolbarState(editorState: EditorState) {
    const key = editorState.getSelection().getStartKey()
    const styles: string[] = [
      ...editorState
        .getCurrentInlineStyle()
        .valueSeq()
        .toArray(),
      editorState
        .getCurrentContent()
        .getBlockMap()
        .get(key)
        .getType()
    ]

    const newState = clone(this.state.commandGroups).map((el: any[]) =>
      el.map((innerEL: any) =>
        Object.assign({}, innerEL, { active: styles.indexOf(innerEL.id) > -1 })
      )
    )
    return newState
  }
}

export default NoteEditor
