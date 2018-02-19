const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, './react-ui/build')));

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

app.listen(port, () => console.log('Example app listening on port 5000!'));
