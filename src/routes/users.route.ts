import { UserController } from "../controllers/users/users.controller";
import { UserModel } from "../models/user.model";

export default class UserRoute {
  userController = new UserController();
  constructor() {}
  routes(app) {
    app.get("/", async (req, res) => {
      try{
        const users = await this.userController.getAll()
        res.send(users);
      }
      catch(e) {
        res.status(400);
        res.send(e);
      }
    });
    app.get("/:id", async (req, res) => {
      const id = req.params.id;
      const user = await this.userController.get(id);
      res.send(user);

    });
    app.post("/", async (req, res) => {
      const body = req.body;
      const user = new UserModel(body);
      const createdUser = await this.userController.add(user);
      await this.userController.add(user);
      res.send(createdUser);
    });
  }
}
