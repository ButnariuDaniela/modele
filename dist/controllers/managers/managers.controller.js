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
exports.ManagersController = void 0;
const admin = require("firebase-admin");
const firestore_1 = require("../../config/firestore");
const manager_model_1 = require("../../models/manager.model");
class ManagersController {
    constructor() {
        this.db = admin.firestore();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const managers = yield this.db.collection(firestore_1.FIRESTORE_COLECTIONS.MANAGERS).get();
            return managers.docs.map(doc => {
                //    console.log(doc.data())
                return new manager_model_1.ManagerModel(doc.data());
            });
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.db.collection(firestore_1.FIRESTORE_COLECTIONS.MANAGERS).where('id', '==', id).get();
            const managers = res.docs.map(doc => doc.data());
            return new manager_model_1.ManagerModel(managers);
        });
    }
}
exports.ManagersController = ManagersController;
