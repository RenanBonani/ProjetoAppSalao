const express = require('express');
const app = express();
const morgan = express();

app.use(morgan('dev'))
app.set('port', 8000);

app.listen(app.get('port'), () => {
  console.log(`listening on port ${app.get('port')}`)
});