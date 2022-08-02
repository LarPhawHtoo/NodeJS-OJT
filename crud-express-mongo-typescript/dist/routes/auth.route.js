"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const express_validator_1 = require("express-validator");
//import { forgotPassword, resetPassword, checkResetPassword } from '../controllers/auth.controller';
const auth_controller_1 = require("../controllers/auth.controller");
const router = express_1.default.Router();
router
    .route("/login")
    .post([
    (0, express_validator_1.body)("email").notEmpty().withMessage("Email must not be empty"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Password must not be empty")
], auth_controller_1.login);
router.route("/logout").post([], auth_controller_1.logout);
router
    .route("/signup")
    .post([
    (0, express_validator_1.body)("fullName").notEmpty().withMessage("Name must not be empty"),
    (0, express_validator_1.body)("email").notEmpty().withMessage("Email must not be empty"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Password must not be empty")
], user_controller_1.createUser);
//router
//  .route('/forgot-password')
//  .post(
//    [
//      body("email").notEmpty().withMessage("Email must not be empty")
//    ], forgotPassword);
//
//router
//  .route('/password-reset/:userId/:token')
//  .get(checkResetPassword);
//
//router
//  .route('/password-reset-update/:userId/:token')
//  .post(resetPassword);
exports.default = router;
