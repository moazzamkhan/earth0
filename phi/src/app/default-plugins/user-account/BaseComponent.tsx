import React from "react"
import { Thing } from "../../../../base"
import { ThingUtils } from "../../utils/thing.utils"

export interface BaseProps {
  things: Thing[]
  onCreate: any
  onChange: any
  onDelete: any
}

export interface BaseState {
  // -2, not editing, -1 for new, otherwise index
  editing: number
}
export const NOT_EDITING = -2
export const NEW_ITEM = -1

export default class BaseComponent extends React.Component<BaseProps, BaseState> {
  constructor(props: BaseProps) {
    super(props)
    this.state = { editing: NOT_EDITING }
    this.onChangeEditStatus = this.onChangeEditStatus.bind(this)
  }

  render() {
    const { things, onChange } = this.props
    const Editor = this.getEditor()
    const Renderer = this.getRenderer()

    return (
      <div id="items-box">
        {this.state.editing !== NOT_EDITING && (
          <Editor
            item={things[this.state.editing].value}
            onCancel={() => this.onChangeEditStatus(NOT_EDITING)}
            onSave={(value: any) => {
              const index = this.state.editing
              this.onChangeEditStatus(NOT_EDITING, () => {
                onChange(ThingUtils.updateThing(things[index], value))
              })
            }}
          />
        )}
        {this.state.editing === NOT_EDITING && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => {
              this.props.onCreate()
              // this.onChangeEditStatus(NEW_ITEM)
            }}
          >
            New {this.getItemLabel()}
          </button>
        )}
        <hr />
        {this.state.editing === NOT_EDITING &&
          things.map((thing: Thing, i: number) => (
            <Renderer
              key={`item-${i}`}
              item={thing.value}
              onEdit={() => this.onChangeEditStatus(i)}
              onDelete={() => this.props.onDelete(thing.id)}
            />
          ))}
      </div>
    )
  }

  getItemLabel() {
    return ""
  }

  getItemType() {
    return ""
  }
  getRenderer(): any {
    return React.Component
  }

  getEditor(): any {
    return React.Component
  }

  onChangeEditStatus(status: number, callback?: () => void) {
    this.setState({ editing: status }, callback)
  }
}
