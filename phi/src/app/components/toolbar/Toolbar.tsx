import React from "react";
import "./Toolbar.less";
import ToolbarButtonGroup from "./ToolbarButtonGroup";
import ToolbarItem from "./ToolbarItem";
import { ToolbarState } from "./ToolbarState";

const Toolbar = ({ groups }: ToolbarState) => (
  <div id="toolbar" className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    {groups.map((group: ToolbarItem[], index: number) => (
      <ToolbarButtonGroup key={`g-${index}`} group={group} />
    ))}
  </div>
)

export default Toolbar
