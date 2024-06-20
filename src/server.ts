import express from "express";
import routes from "./routes";
import cors from "cors";
import { connectDatabase } from "./config/database";
import { syncVehicleTable } from "./models/vehicle";

// Basic configuration
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // This is an example API, there are not problem activate CORS
app.use(routes);

// Database connection
connectDatabase();

// Create tables
syncVehicleTable();

// Server
app.listen(port, () => {
  console.log(`App link: http://localhost:${port}`);
});
