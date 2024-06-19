import { Request, Response, Router } from "express";
import * as VehicleController from "./controllers/VehicleController";

const route = Router();

route.get("/", (req: Request, res: Response) => {
  res.send("OK");
});

// Find vehicle using id
route.get("/vehicle/:id", VehicleController.findVehicleById);

// Create vehicle and store it on database
route.post("/vehicle", VehicleController.createVehicle);

// Update specific vehicle
route.put("/vehicle/:id", VehicleController.updateVehicle);

// Delete specific vehicle
route.delete("/vehicle/:id", VehicleController.deleteVehicle);

export default route;
