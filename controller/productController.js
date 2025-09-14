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
    const result = data.find(product => product.id == productId);
    if(!result) {
        return res.status(404).send({message: 'Product not found'});
    } else {
        res.status(200).send(result);
    }
    
}

module.exports = {getAllProducts, getProductById};