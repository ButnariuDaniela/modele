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
Object.defineProperty(exports, "__esModule", { value: true });
const users_controller_1 = require("../controllers/users/users.controller");
const user_model_1 = require("../models/user.model");
class UserRoute {
    constructor() {
        this.userController = new users_controller_1.UserController();
    }
    routes(app) {
        app.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userController.getAll();
                res.send(users);
            }
            catch (e) {
                res.status(400);
                res.send(e);
            }
        }));
        app.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const user = yield this.userController.get(id);
            res.send(user);
        }));
        app.post("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const user = new user_model_1.UserModel(body);
            const createdUser = yield this.userController.add(user);
            yield this.userController.add(user);
            res.send(createdUser);
        }));
    }
}
exports.default = UserRoute;
