import { ManagersController } from "../controllers/managers/managers.controller";

export class ManagersRoute {
  managersController = new ManagersController();
  routes(app): void {
    app.get("/managers", async (req, res) => {
      const managers = await this.managersController.getAll();
      console.log(managers);
      res.send(managers);
    });

    app.get("/managers/:id", async (req, res) => {
        const id = parseInt(req.params.id, 10);
        const manager = await this.managersController.get(id);
        res.send(manager)
    });
  }
}
