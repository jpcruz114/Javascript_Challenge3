const query = require('../config/db/mysql')
const controller = {}

controller.list = async (req, res) => {
    try{
        var products = await query('SELECT * FROM products');
        res.send(products)
    }catch(e){
        console.log(e)
    }
}

controller.view = async (req, res) => {
    try{
        var product = await query('SELECT * FROM products WHERE id = ?',parseInt(req.params.id));
        if(product.length === 0) return res.status(404).send("the given product Id was not found!")
        res.send(product)
    }catch(e){
        console.log(e)
    }
}

controller.search = async (req, res) => {
    try{
        const name = req.params.name;
        var product = await query('SELECT * FROM products WHERE product_name LIKE "'+'%'+name+'%'+'" OR product_description LIKE "'+'%'+name+'%'+'"');
        if(product.length === 0) return res.status(404).send("the given product was not found!")
        res.send(product)
    }catch(e){
        console.log(e)
    }
}

controller.save = async (req, res) => {
    try{
        var product = req.body;
        await query('INSERT INTO products SET ?', product);
        res.send(req.body)
    }catch(e){
        console.log(e)
    }
    
}

controller.update = async (req, res) => {
    try{
        var product = await query('UPDATE products SET ? WHERE id = ?', [req.body, parseInt(req.params.id)]);
        if(!product) return res.status(404).send("the given product Id was not found!")
        res.send(req.body)
    }catch(e){
        console.log(e)
    }
}

controller.delete = async (req, res) => {
    try{
        var product = await query('DELETE FROM products WHERE id = ?',parseInt(req.params.id));     
        if(!product) return res.status(404).send("the given product Id was not found!")
        res.send(req.params.id)
    }catch(e){
        console.log(e)
    }
}

module.exports = controller