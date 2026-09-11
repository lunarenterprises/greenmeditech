var express = require("express");
var route = express();
// var { ApikeyVerify } = require("./components/ApiKeyVerify");
route.get('/', (req, res) => {
    res.send('hello ')
})

var {AddProduct} = require("./controller/addproduct");
route.post("/add-product",AddProduct)

var {ListProduct} = require("./controller/listproducts");
route.post("/list-product",ListProduct)

var {ViewProduct} = require("./controller/viewproduct");
route.post("/view-product",ViewProduct)

var {DeleteProduct} = require("./controller/deleteproduct");
route.post("/delete-product",DeleteProduct)

var {Login} = require("./controller/login");
route.post("/login",Login)

var {OrderList} = require("./controller/orderlist");
route.post("/order-list",OrderList)

var {ProductStock} = require("./controller/productstock");
route.post("/stock",ProductStock)

var {OrderSummary} = require("./controller/ordersummary");
route.post("/order-summary",OrderSummary)

var {EditProduct} = require("./controller/editproduct");
route.post("/edit-product",EditProduct)

var {AddOrder} = require("./controller/addorder");
route.post("/add-order",AddOrder)

module.exports = route;
