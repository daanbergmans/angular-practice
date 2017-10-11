module.exports = function(app, db) {

  app.get('/statistics', (req, res) => {
    db.collection('statistics').find().toArray(function(err, data) {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(data);
      }
    });
  });

  app.post('/statistics', (req, res) => {
    const statistic = { pageName : req.body.pageName, viewCount : 1 };

    db.collection('statistics').insert(statistic, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.put('/statistics/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const statistic = { pageName : req.body.pageName, name : req.body.viewCount };

    db.collection('statistics').update(details, statistic, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(statistic);
      }
    });
  });

  app.delete('/statistics/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };

    db.collection('statistics').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Statistic with id: ' + id + ' deleted!');
      }
    });
  });

}
