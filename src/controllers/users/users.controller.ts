import { UserModel } from "../../models/user.model";
import * as admin from 'firebase-admin';
import { FIRESTORE_COLECTIONS } from "../../config/firestore";


export class UserController {
  db: FirebaseFirestore.Firestore;

  constructor() {
    this.db = admin.firestore();
  }

  async getAll(): Promise<UserModel[]> {
    const refs = await this.db.collection(FIRESTORE_COLECTIONS.TELACAD_USERS).get();
    return refs.docs.map(doc => new UserModel(doc.data()));
  }

  async get(id: string): Promise<UserModel> {
    const ref = await this.db.collection(FIRESTORE_COLECTIONS.TELACAD_USERS).doc(id).get();
    return new UserModel(ref.data());
  }

  async add(user: UserModel): Promise<UserModel> {
    const jsonString = JSON.stringify(user);
    const ref = await this.db.collection(FIRESTORE_COLECTIONS.TELACAD_USERS).add(JSON.parse(jsonString))
    // console.log(await this.get(ref.id))
    return await this.get(ref.id);
  }
}
