"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerModel = void 0;
const skill_model_1 = require("./skill.model");
class ManagerModel {
    constructor(obj) {
        // console.log(obj);
        Object.assign(this, obj);
        this.skills = obj.skills.map(skill => new skill_model_1.SkillModel(skill));
    }
}
exports.ManagerModel = ManagerModel;
