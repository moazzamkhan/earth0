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
  editing: string
}
export const NOT_EDITING: any = null
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
        {this.state.editing && (
          <Editor
            thing={things.find((t: Thing) => this.state.editing === t.id)}
            onCancel={() => this.onChangeEditStatus(NOT_EDITING)}
            onSave={(thing: Thing, value: any) => {
              this.onChangeEditStatus(NOT_EDITING, () => {
                onChange(ThingUtils.updateThing(thing, { value }))
              })
            }}
          />
        )}
        {!this.state.editing && (
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
        {!this.state.editing &&
          things.map((thing: Thing, i: number) => (
            <Renderer
              key={thing.id}
              thing={thing}
              onEdit={(t: Thing) => this.onChangeEditStatus(t.id)}
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

  onChangeEditStatus(thingId: string, callback?: () => void) {
    this.setState({ editing: thingId }, callback)
  }
}
