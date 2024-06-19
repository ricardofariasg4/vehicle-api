import { Sequelize } from "sequelize";
import dotenv from "dotenv";

const env = dotenv.config();

const sequelize = new Sequelize(
  // Example: mysql://user:pass@localhost:3306/db_name
  `mysql://${env.parsed?.DB_USER}:${env.parsed?.DB_PASS}@${env.parsed?.DB_HOST}:${env.parsed?.DB_PORT}/${env.parsed?.DB_NAME}`
);

export async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export default sequelize;
