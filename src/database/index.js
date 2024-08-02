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
    // this.mongo()
  }

  init() {
    this.connection = new Sequelize('postgresql://dev_burger_rp74_user:knKoxllw6CEOXXuQI4XfuYSlb7MX0WuG@dpg-cqm2fkrqf0us73a48eq0-a.oregon-postgres.render.com/dev_burger_rp74');
    models.map((model) => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }

  mongo() {
    this.mongoConnection = mongoose.connect('mongodb://mongo:VBFIkEDhbSrkqlESZibCwUKmBrnEWdfZ@viaduct.proxy.rlwy.net:41932',)
  }
}

export default new Database();