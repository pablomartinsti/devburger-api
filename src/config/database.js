import 'dotenv/config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // Neon exige SSL
      rejectUnauthorized: false, // Para evitar problemas com certificados SSL
    },
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

export default sequelize;
