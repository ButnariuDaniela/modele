"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfilModel = void 0;
class UserProfilModel {
    get fullName() {
        return `${this.name} ${this.surname};`;
    }
    ;
    get status() {
        switch (this.statusID) {
            case 1:
                return 'Away';
            case 2:
                return 'Online';
            case 3:
                return 'Offline';
            case 4:
                return 'Invisible';
        }
    }
}
exports.UserProfilModel = UserProfilModel;
