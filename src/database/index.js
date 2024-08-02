import { Sequelize } from "sequelize";
import mongoose from "mongoose";

import configDatabase from '../config/database.js'

import User from '../app/models/User.js';
import Product from "../app/models/Product.js";
import Category from "../app/models/Category.js";

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init();
    this.mongo()
  }

  init() {
    this.connection = new Sequelize('postgresql://postgres:bNLtVQytGFoLNYFlhzovQjgXoDFYeKRt@roundhouse.proxy.rlwy.net:11115/railway');
    models.map((model) => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }

  mongo() {
    this.mongoConnection = mongoose.connect('mongodb://localhost:27017/devburger',)
  }
}

export default new Database();