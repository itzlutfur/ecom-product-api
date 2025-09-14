const express = require('express');
const app = express();
const port = 3000;
const productRoute = require('./route/productRoute');
const { checkUserAgent } = require('./middleware/userMiddleware');
const ratelimit = require('express-rate-limit');

app.use(express.json());
app.use(checkUserAgent);

const rateLimiter = ratelimit({
    windowMs: 1 * 1000, // 1 sec
    max: 2, // limit each IP to 1 request per windowMs
    message: "Too many requests from this IP, please try again later"
});
app.use('/api/products',rateLimiter,productRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

