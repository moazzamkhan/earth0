import { Document, model, Model, Schema } from "mongoose"

export interface ShareRequest extends Document {
  from: string
  to: string
  timestamp: number
  payload: string
}

const ShareRequestSchema: Schema = new Schema(
  {
    from: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    timestamp: Number,
    payload: Schema.Types.Mixed
  },
  { timestamps: { createdAt: "timestamp" } }
)

export const ShareRequestModel: Model<ShareRequest> = model<ShareRequest>("ShareRequest", ShareRequestSchema)
