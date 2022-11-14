import { Sequelize } from "sequelize";
import db from '../config/dbConnection';

const userModel = db.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    salt:{
      type: Sequelize.STRING,
    },
     createdAt: {
      type: Sequelize.DATE,
      required: true,
    },
    updatedAt: {
      type: Sequelize.DATE,
      required: true,
    },
  },
);

export default userModel;
