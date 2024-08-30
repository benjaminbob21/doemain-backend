import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "postgresql://bob:gAVOpK7Vwea3jaw7YbMkh6B1rNYZcSs0@dpg-cr7vsodsvqrc73dlv4f0-a.oregon-postgres.render.com/doeproject_tmju",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: true, // Use true if SSL certificates are fully validated
      },
    },
  }
);

// export const sequelize = new Sequelize("doe-project", "postgres", "bob", {
//   host: "localhost",
//   dialect: "postgres",
// });

sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });