import { Sequelize, DataTypes } from "sequelize";

const { NODE_ENV, DB_HOST, DB_NAME, DB_USER, DB_PASS, DB_PORT } = process.env;

export const sequelize =
  NODE_ENV === "production"
    ? new Sequelize(DB_NAME, DB_USER, DB_PASS, {
        dialect: "postgres",
        host: DB_HOST,
        port: DB_PORT,
      })
    : new Sequelize({ dialect: "sqlite", storage: ":memory:" });

export const products = sequelize.define("products", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
  await sequelize.sync();
} catch (error) {
  console.error("Unable to connect to the database:", error);
  throw new Error(error);
}
