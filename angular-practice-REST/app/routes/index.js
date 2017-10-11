const employeeRoutes = require('./employee_routes');
const statisticsRoutes = require('./statisticsRoutes');

module.exports = function(app, db) {
  employeeRoutes(app, db);
  statisticsRoutes(app, db);
};
