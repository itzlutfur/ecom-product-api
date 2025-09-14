const data = require('../data.json');


const getAllProducts = (req, res) => {
    const productList = data.map(product => {
        const {id, name, price, category} = product;
        const totalReviews = product.productReviews.length;
        return {id, name, price, category, totalReviews};
    });
    res.status(200).send(productList);
}

const getProductById = (req, res) => {
    const productId = req.params.id;
    res.send(`Details of product with ID: ${productId}`);
}

module.exports = {getAllProducts, getProductById};