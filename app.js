const express = require('express');
const app = express();
const port = 3000;
const productRoute = require('./route/productRoute');



app.use(express.json());

app.use('/api/product',productRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

