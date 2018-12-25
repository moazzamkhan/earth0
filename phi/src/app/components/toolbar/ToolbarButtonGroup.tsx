import React from "react"
import "./Toolbar.less"
import ToolbarItem from "./ToolbarItem"

const ToolbarButton = (item: ToolbarItem) => (
  <button type="button" className={`btn ${item.icon}`} title={item.label} />
)

const ToolbarButtonGroup = ({ group }: { group: ToolbarItem[] }) => (
  <div className="btn-group btn-group-sm" role="group" aria-label="">
    {group.map((item: ToolbarItem) => (
      <ToolbarButton key={item.id} {...item} />
    ))}
  </div>
)
export default ToolbarButtonGroup
