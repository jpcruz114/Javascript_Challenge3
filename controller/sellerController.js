const query = require('../config/db/mysql')
const controller = {}

controller.list = async (req, res) => {
    try{
        var sellers = await query('SELECT * FROM sellers');
        res.send(sellers)
    }catch(e){
        console.log(e)
    }
}

controller.view = async (req, res) => {
    try{
        var seller = await query('SELECT * FROM sellers WHERE id = ?',parseInt(req.params.id));
        if(seller.length === 0) return res.status(404).send("the given seller Id was not found!")
        res.send(seller)
    }catch(e){
        console.log(e)
    }
}

controller.save = async (req, res) => {
    try{
        var seller = req.body;
        await query('INSERT INTO sellers SET ?', seller);
        res.send(req.body)
    }catch(e){
        console.log(e)
    }
    
}

controller.update = async (req, res) => {
    try{
        var seller = await query('UPDATE sellers SET ? WHERE id = ?', [req.body, parseInt(req.params.id)]);
        if(!seller) return res.status(404).send("the given seller Id was not found!")
        res.send(req.body)
    }catch(e){
        console.log(e)
    }
}

controller.delete = async (req, res) => {
    try{
        var seller = await query('DELETE FROM sellers WHERE id = ?',parseInt(req.params.id));     
        if(!seller) return res.status(404).send("the given seller Id was not found!")
        res.send(req.params.id)
    }catch(e){
        console.log(e)
    }
}

module.exports = controller