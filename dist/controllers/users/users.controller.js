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
exports.UserController = void 0;
const user_model_1 = require("../../models/user.model");
const admin = require("firebase-admin");
const firestore_1 = require("../../config/firestore");
class UserController {
    constructor() {
        this.db = admin.firestore();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const refs = yield this.db.collection(firestore_1.FIRESTORE_COLECTIONS.TELACAD_USERS).get();
            return refs.docs.map(doc => new user_model_1.UserModel(doc.data()));
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const ref = yield this.db.collection(firestore_1.FIRESTORE_COLECTIONS.TELACAD_USERS).doc(id).get();
            return new user_model_1.UserModel(ref.data());
        });
    }
    add(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonString = JSON.stringify(user);
            const ref = yield this.db.collection(firestore_1.FIRESTORE_COLECTIONS.TELACAD_USERS).add(JSON.parse(jsonString));
            // console.log(await this.get(ref.id))
            return yield this.get(ref.id);
        });
    }
}
exports.UserController = UserController;
