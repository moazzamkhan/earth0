import { Thing } from "../../../../base";
import React from "react"

import { ThingUtils } from "../../utils/thing.utils"

export interface BaseProps {
  thing: Thing
  onChange: any
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
    const { thing, onChange } = this.props
    const items = thing.value as any[]
    const Editor = this.getEditor()
    const Renderer = this.getRenderer()

    return (
      <div id="items-box">
        {this.state.editing !== NOT_EDITING && (
          <Editor
            item={items[this.state.editing]}
            onCancel={() => this.onChangeEditStatus(NOT_EDITING)}
            onSave={(item: any) => {
              const index = this.state.editing
              this.onChangeEditStatus(NOT_EDITING, () => {
                onChange(ThingUtils.updateThingValueArray(thing, item, index))
              })
            }}
          />
        )}
        {this.state.editing === NOT_EDITING && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => {
              this.onChangeEditStatus(NEW_ITEM)
            }}
          >
            New {this.getItemLabel()}
          </button>
        )}
        <hr />
        {this.state.editing === NOT_EDITING &&
          items.map((item: any, i: number) => (
            <Renderer
              key={`item-${i}`}
              item={item}
              onEdit={() => this.onChangeEditStatus(i)}
              onDelete={() => this.onDelete(i)}
            />
          ))}
      </div>
    )
  }

  getItemLabel() {
    return ""
  }

  getRenderer(): any {
    return React.Component
  }

  getEditor(): any {
    return React.Component
  }
  onDelete(index: number) {
    this.props.onChange(ThingUtils.deleteThingValueArray(this.props.thing, index))
  }

  onChangeEditStatus(status: number, callback?: () => void) {
    this.setState({ editing: status }, callback)
  }
}
