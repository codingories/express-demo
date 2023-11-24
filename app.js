let express = require('express')
let app = express();

app.get('/xxx', function (req, res) {
  res.send('你好');
});

const port = 4000
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
