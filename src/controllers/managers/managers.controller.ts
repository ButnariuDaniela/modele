import * as admin from "firebase-admin";
import { FIRESTORE_COLECTIONS } from "../../config/firestore";
import { ManagerModel } from "../../models/manager.model";

export class ManagersController {
  db: FirebaseFirestore.Firestore;

  constructor() {
    this.db = admin.firestore();
  }

  async getAll(): Promise<ManagerModel[]> {
    const managers = await this.db.collection(FIRESTORE_COLECTIONS.MANAGERS).get()
    return managers.docs.map(doc => {
    //    console.log(doc.data())
        return new ManagerModel(doc.data())
    })
}

  async get(id: number): Promise<any> {
   const res = await this.db.collection(FIRESTORE_COLECTIONS.MANAGERS).where('id', '==', id).get();
    const managers = res.docs.map(doc => doc.data());
    return new ManagerModel(managers);
}
}
