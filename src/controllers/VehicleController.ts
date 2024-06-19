import { Vehicle } from "../models/vehicle";
import { Request, Response } from "express";

export async function findVehicleById(req: Request, res: Response) {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    vehicle ? res.status(200).json(vehicle) : res.status(404).json({ error: "Vehicle not found" });
  } catch (error) {
    res.status(500).json({ error: "Error when searching for vehicles" });
  }
}

export async function createVehicle(req: Request, res: Response) {
  try {
    const [rental_company, model, brand, year, motor, doors, exchange, air_conditioning] = req.body;

    const vehicle = await Vehicle.create({
      rental_company,
      model,
      brand,
      year,
      motor,
      doors,
      exchange,
      air_conditioning,
    });

    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({ error: "Error when creating a new vehicle" });
  }
}

export async function updateVehicle(req: Request, res: Response) {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);

    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }

    for (const key in req.body) {
      if (req.body[key] !== null) {
        (vehicle as any)[key] = req.body[key];
      }
    }

    await vehicle?.save();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteVehicle(req: Request, res: Response) {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);

    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }

    res.status(200).json(vehicle);
    await vehicle.destroy();
  } catch (error) {
    res.status(500).json({ error: "Error deleting vehicle" });
  }
}
