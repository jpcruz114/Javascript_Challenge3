const sellerController = require('../controller/sellerController')
const productController = require('../controller/productController')
const cartController = require('../controller/cartController')

module.exports = (app) =>{
    //Seller
    app.get('/sellers', sellerController.list)

    app.get('/seller/:id', sellerController.view)
    
    app.post('/seller', sellerController.save)
    
    app.put('/seller/:id', sellerController.update)
    
    app.delete('/seller/:id', sellerController.delete)

    //Product
    app.get('/products', productController.list)

    app.get('/product/:id', productController.view)

    app.get('/product/search/:name', productController.search)
    
    app.post('/product', productController.save)
    
    app.put('/product/:id', productController.update)
    
    app.delete('/product/:id', productController.delete)

    //Cart
    app.get('/cartlist', cartController.cartlist)
    
    app.get('/cartreport', cartController.cartreport)

    app.post('/addcart', cartController.addcart)


}
