import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

export class Vehicle extends Model {
  public id!: string;
  public rental_company!: string;
  public model!: string;
  public brand!: string;
  public year!: number;
  public motor!: number;
  public doors!: number;
  public exchange!: string;
  public air_conditioning!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Vehicle.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    rental_company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    motor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    doors: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    exchange: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    air_conditioning: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "vehicles",
  }
);

export async function syncVehicleTable() {
  await Vehicle.sync();
}
