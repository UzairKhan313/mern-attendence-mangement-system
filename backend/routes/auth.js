import express from "express";
import { register, login, logout } from "../controllers/auth.js";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";

const router = express.Router();

// router.route("/").get(getAllStudents);
// router
//   .route("/add/new")
//   .put(fileUpload.single("image"), protectRoutes, adminRoutes, addNewStudent);
// router.route("/login").post(authStudent);
// router.route("/logout").post(studentLogout);

// router
//   .route("/:id")
//   .get(protectRoutes, adminRoutes, getStudentDetail)
//   .patch(protectRoutes, adminRoutes, updateStudent)
//   .delete(protectRoutes, adminRoutes, deleteStudent);

// router.route("/:id/absent").post(protectRoutes, checkOut);
// router.route("/:id/present").post(protectRoutes, checkIn);
// router.route("/:id/status").post(protectRoutes, getStudentStatus);

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);

export default router;
