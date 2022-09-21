const express = require('express');
const app = express();
const port = process.env.PORT | 3000;

app.use(express.json());

app.all('/*', (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Mucker mock server listening on port ${port}`);
});
