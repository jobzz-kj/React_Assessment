const { Sequelize } = require("sequelize");
//creating db with name salesDb and uname as sales
//and pass as sales123
const db = new Sequelize("SALESDB", "sales", "Sales123", {
  host: "localhost",
  dialect: "sqlite",
  storage:"db.sqlite",
  //pool is the way you deal with db,defining some properties like that

  pool: {
    max: 5, //max no of threads
    min: 0, //min no of threads
    acquire: 30000, //acquire the connection in 3ms
    idle: 10000, //connection can be idle for 1ms
  },
});

module.exports = db;
