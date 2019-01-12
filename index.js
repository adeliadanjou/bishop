const app = require('./app');
const Router = require('./controllers/items')



app.use('/', Router)


app
  .use('/items', require('./controllers/items'))
  .all('*', (req, res) => res.sendStatus(404))
  .listen(3000);
