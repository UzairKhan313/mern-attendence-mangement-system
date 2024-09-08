import mongoose from "mongoose";
import { Schema } from "mongoose";

const AttendanceSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["present", "absent", "leave"],
      default: "present",
    },
  },
  { timestamps: true }
);

AttendanceSchema.index({ userId: 1, date: 1 }, { unique: true }); // Prevent marking multiple attendances for a single day

export default mongoose.model("Attendance", AttendanceSchema);
