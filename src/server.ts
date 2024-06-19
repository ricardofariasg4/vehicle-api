import express from "express";
import routes from "./routes";
import cors from "cors";
import { connectDatabase } from "./config/database";
import { createVehicle } from "./models/vehicle";

// Basic configuration
const app = express();
const port = 3000;

// Database connection
connectDatabase();

// Create tables
createVehicle();

// Middlewares
app.use(cors()); // This is an example API, there are not problem activate CORS
app.use(routes);

// Server
app.listen(port, () => {
  console.log(`App link: http://localhost:${port}`);
});
