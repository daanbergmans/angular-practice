module.exports = function(app, db) {
  app.post('/employees', (req, res) => {
    console.log(req.body);
  });
};
