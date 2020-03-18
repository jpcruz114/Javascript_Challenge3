const query = require('../config/db/mysql')
const controller = {}

controller.cartlist = async (req, res) => {
    try{
        var carts = await query('SELECT * FROM carts');
        res.send(carts)
    }catch(e){
        console.log(e)
    }
}

controller.addcart = async (req, res) => {
    try{
        var cart = req.body;
        await query('INSERT INTO carts SET ?', cart);
        res.send(req.body)
    }catch(e){
        console.log(e)
    }
}

controller.cartreport = async (req, res) => {
    try{
        var carts = await query('SELECT DISTINCT product_id ,SUM(quantity) FROM carts Group By product_id ');
        res.send(carts)
    }catch(e){
        console.log(e)
    }
}

module.exports = controller