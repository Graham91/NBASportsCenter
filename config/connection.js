var config = require("./config.json");

var mysql = require("mysql");

var Sequelize = require("sequelize");

var sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(
    config.production.database,
    config.production.username,
    config.production.password,
    config.production
  );
} else {
  // sequelize = new Sequelize(
  //   config.development.database,
  //   config.development.username,
  //   config.development.password,
  //   config.development
  // );
  sequelize = new Sequelize(
    config.production.database,
    config.production.username,
    config.production.password,
    config.production
  );
}{
"username": "p7bqsabng0c840in",
"password": "d42wz1yw60ifj17g",
"database": "sgdy6okilap7wfj4",
"host": "x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
"port": 3306,}
/* var testConnection = connection.development;

var ericVariable = mysql.createConnection({testConnection});

console.log(testConnection)
// Make connection.
ericVariable.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
}); */
// Export connection for our ORM to use.

module.exports = { sequelize: sequelize };
