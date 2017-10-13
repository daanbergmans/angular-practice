const employeeRoutes = require('./employee_routes');
const statisticsRoutes = require('./statistics_routes');

module.exports = function(app, db) {
  employeeRoutes(app, db);
  statisticsRoutes(app, db);
};
