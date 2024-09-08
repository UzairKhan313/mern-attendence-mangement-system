import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student",
    },
    avatar: {
      type: String,
      default: "uploads/images/default.jpeg", // URL to the profile picture
    },
    attendance: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attendance",
      },
    ],
    leaveRequests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "LeaveRequest",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
