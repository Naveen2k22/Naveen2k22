const express = require('express');
const app = express();
app.listen(3000, function() {
  console.log('listening on 3000')
})
app.get('/', (req, res) => {
  console.log('Hello')
  res.send('Hello World')
})
