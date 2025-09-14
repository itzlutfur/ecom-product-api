

/* 
simple product api

GET/products - list all products - total product review count
GET/products/:id - get a single product details by id


*/

const getAllProducts = (req, res) => {
    res.send('List of all products');
}

const getProductById = (req, res) => {
    const productId = req.params.id;
    res.send(`Details of product with ID: ${productId}`);
}

