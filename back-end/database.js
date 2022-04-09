const mongoose = require('mongoose');
const URI = require('');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindEndModify', false);
mongoose.set('useCreatIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(URI)
  .them(() => { console.log('DB is Up') })
  .catch(() => { console.log(err) })