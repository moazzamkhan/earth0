import React from "react"

import Thought from "./Thought"
import { Thing } from "../../base"

const ThoughtComponent = ({ thing }: { thing: Thing }) => <div>{thing.value as Thought}</div>

export default ThoughtComponent
