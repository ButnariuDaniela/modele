import { SkillModel } from "./skill.model";

export class ManagerModel {
    id: number;
    name: string;
    skills: SkillModel[];

    constructor(obj) {
        // console.log(obj);
        Object.assign(this, obj);
        this.skills = obj.skills.map(skill => new SkillModel(skill))
    }
}