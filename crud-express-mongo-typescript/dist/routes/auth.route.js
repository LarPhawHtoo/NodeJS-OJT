"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_controller_1 = require("../controllers/auth.controller");
const express_validator_1 = require("express-validator");
const authRoute = () => {
    const router = (0, express_1.Router)();
    router.post('/signup', [
        (0, express_validator_1.body)("fullName").notEmpty().withMessage("Name must not be empty"),
        (0, express_validator_1.body)("email").notEmpty().withMessage("Email must not be empty"),
        (0, express_validator_1.body)("password").notEmpty().withMessage("Password must not be empty")
    ], user_controller_1.createUser);
    router.post('/login', [
        (0, express_validator_1.body)("email").notEmpty().withMessage("Email must not be empty"),
        (0, express_validator_1.body)("password").notEmpty().withMessage("Password must not be empty")
    ], auth_controller_1.login);
    router.post('logout', [], auth_controller_1.logout);
};
exports.default = authRoute;
