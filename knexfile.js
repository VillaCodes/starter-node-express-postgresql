const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: "postgres://vhegzdey:kd4Vrz34V4WB-KA-IMmgkhKlLZFWt5DJ@kashin.db.elephantsql.com/vhegzdey",
    migrations: {
    directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
          directory: path.join(__dirname, "src", "db", "seeds"),
         }
  },
};