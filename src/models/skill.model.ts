export class SkillModel {
    name: string;
    level: number;
    constructor(obj) {
        Object.assign(this, obj)
    }
}