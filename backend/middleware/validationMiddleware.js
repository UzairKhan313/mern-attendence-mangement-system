import mongoose from "mongoose";
import { body, validationResult, param } from "express-validator";
import { BadRequestError, UnauthorizedError } from "../errors/custom_error.js";

import User from "../models/User.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("no job")) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith("not authorized")) {
          throw new UnauthorizedError("not authorized to access this route");
        }
        throw new BadRequestError(errorMessages);
      }

      next();
    },
  ];
};

// Validating Job inputs comming in request
// export const validateJobInput = withValidationErrors([
//   body("company").notEmpty().withMessage("company is required"),
//   body("position").notEmpty().withMessage("position is required"),
//   body("jobLocation").notEmpty().withMessage("job location is required"),
//   body("jobStatus")
//     .isIn(Object.values(JOB_STATUS))
//     .withMessage("invalid status value"),
//   body("jobType").isIn(Object.values(JOB_TYPE)).withMessage("invalid job type"),
// ]);

// Validating parameter comming in request
// export const validateIdParam = withValidationErrors([
//   param("id").custom(async (value, { req }) => {
//     const isValidId = mongoose.Types.ObjectId.isValid(value);
//     if (!isValidId) throw new BadRequestError("invalid MongoDB id");
//     const job = await Job.findById(value);
//     if (!job) throw new NotFoundError(`no job with id : ${value}`);
//     const isAdmin = req.user.role === "admin";
//     const isOwner = job.createdBy.toString() === req.user.userId;
//     if (!isAdmin && !isOwner)
//       throw new UnauthorizedError("Not authorized to access the route.");
//   }),
// ]);

// Validating Registeration comming in request
export const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
]);

// Validating login inputs comming in request
export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password").notEmpty().withMessage("password is required"),
]);

// Validating updating user inputs comming in request
// export const validateUpdateUserInput = withValidationErrors([
//   body("name").notEmpty().withMessage("name is required"),
//   body("email")
//     .notEmpty()
//     .withMessage("email is required")
//     .isEmail()
//     .withMessage("invalid email format")
//     .custom(async (email, { req }) => {
//       const user = await User.findOne({ email });
//       if (user && user._id.toString() !== req.user.userId) {
//         throw new BadRequestError("email already exists");
//       }
//     }),
//   body("lastName").notEmpty().withMessage("last name is required"),
//   body("location").notEmpty().withMessage("location is required"),
// ]);
