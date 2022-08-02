"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { Router } from 'express';
//import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/user.controller';
//
//const userRoute = () => {
//  const router = Router();
//
//  router.post('/users', createUser);
//
//  router.get('/users', getAllUsers);
//
//  router.get('/users/:id', getUser);
//
//  router.patch('/users/:id', updateUser);
//
//  router.delete('/users/:id', deleteUser);
//
//  return router;
//};
//
//export { userRoute };
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const express_validator_1 = require("express-validator");
const auth_controller_1 = require("../controllers/auth.controller");
const router = express_1.default.Router();
router
    .route("/")
    .get(user_controller_1.getUsers)
    .post([
    (0, express_validator_1.body)("name").notEmpty().withMessage("Email must note be empty"),
    (0, express_validator_1.body)("email").notEmpty().withMessage("Email must note be empty")
], user_controller_1.createUser);
router.route("/logout").post([], auth_controller_1.logout);
router.
    route("/search")
    .post(user_controller_1.findByName);
router
    .route("/:id")
    .post(user_controller_1.findUser)
    .put(user_controller_1.updateUser)
    .delete(user_controller_1.deleteUser);
exports.default = router;
