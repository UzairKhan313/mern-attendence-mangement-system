import mongoose from "mongoose";
import { Schema } from "mongoose";

const GradeSchema = new Schema(
  {
    minAttendancePercentage: {
      type: Number,
      required: true,
    },
    maxAttendancePercentage: {
      type: Number,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Grade", GradeSchema);
