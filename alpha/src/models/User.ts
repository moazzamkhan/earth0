import { Document, model, Model, Schema } from "mongoose"

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: { createdAt: "created", updatedAt: "modified" } }
)

export interface User extends Document {
  username: string
  password: string
  created: Date
  modified: Date
}

export const UserModel: Model<User> = model<User>("User", UserSchema)
