var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.get('/employees', (req, res) => {
    db.collection('employees').find().toArray(function(err, docs) {
      if (err) {
        res.send({'error':'An error has occurred'})
      } else {
        res.send(docs);
      }
    });
  });

  app.get('/employees/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };

    db.collection('employees').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  app.post('/employees', (req, res) => {
    const employee = { employeeId : req.body.employeeId, name : req.body.name, age : req.body.age, salary : req.body.salary };

    db.collection('employees').insert(employee, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.put('/employees/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const employee = { employee_id : req.body.employeeId, name : req.body.name, age : req.body.age, salary : req.body.salary };

    db.collection('employees').update(details, employee, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(employee);
      }
    });
  });

  app.delete('/employees/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };

    db.collection('employees').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Employee ' + id + ' deleted!');
      }
    });
  });
};
