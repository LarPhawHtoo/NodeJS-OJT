"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutService = exports.loginService = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_2 = __importDefault(require("bcrypt"));
const user_model_1 = __importDefault(require("../models/user.model"));
const loginService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    user_model_1.default.findOne({ email: req.body.email }).then((user) => __awaiter(void 0, void 0, void 0, function* () {
        if (!user) {
            return res.status(401).send({
                success: false,
                message: 'Could not find user'
            });
        }
        if (!(0, bcrypt_1.compareSync)(req.body.password, user.password)) {
            return res.status(401).send({
                success: false,
                message: 'Incorrect Password'
            });
        }
        const payload = {
            email: yield bcrypt_2.default.hash(user.email, 12),
            id: yield bcrypt_2.default.hash(user.id, 12)
        };
        const token = jsonwebtoken_1.default.sign(payload, 'secrect', { expiresIn: '1d' });
        return res.status(200).send({
            success: true,
            message: 'Login Successfully!',
            users: user,
            token: token
        });
    }));
});
exports.loginService = loginService;
const logoutService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.session = null;
    return res.json({ "message": "Logout Successfully" });
});
exports.logoutService = logoutService;
