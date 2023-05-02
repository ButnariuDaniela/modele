export class UserProfilModel {
    id: number;
    name: string;
    surname: string;
    statusID: number;

    get fullName(): string {
        return `${this.name} ${this.surname};`;
    };

    get status(): string {
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