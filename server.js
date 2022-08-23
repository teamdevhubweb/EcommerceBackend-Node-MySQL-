require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_middleware/error-handler');

app.use("/static", express.static("uploads"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/users', require('./UserController/users.controller'));

app.use('/products', require('./UserController/product.controller'));

app.use('/brands', require('./UserController/brand.controller'));

app.use('/carts', require('./UserController/carts.controller'));

app.use('/reviews', require('./UserController/review.controller'));

app.use('/taxes', require('./UserController/tax.controller'));

app.use('/GetReview', require('./UserController/product.controller'));


// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));