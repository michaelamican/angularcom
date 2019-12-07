var mongoose = require('mongoose');
var product = mongoose.model('Product');
// var Review = mongoose.model('Review');

module.exports = {
    index: function(req, res){
        console.log('index in routes will now find all products');
        product.find({}, function(err, products){
            if(err){
                console.log('Errors at retrieval at index in products.js', err)
                res.json(err);
            }
            else {
                console.log('Retrieving');
                res.json(products);
            }
        })
    },
    create: function(req, res){
        console.log('products.js create method invoked');
        //var addNum;
        //if(var addNum == undefined){
            //addNum = 0;
        // }
        //var myNumID = addNum;
        //var addNum = myNumID;
        //var myID = req.body._id;
        // var myName = req.body.name;
        // var myQty = req.body.qty;
        // var myPrice = req.body.price;
        // var myImg = req.body.img;
        // var myRes = [
        //     {_id: myID},
        //     {numID: myNumID},
        //     {name: myName},
        //     {qty: myQty},
        //     {price: myImg},
        //     {img: myRes},
        // ];
        var myRes = new product(req.body);
        myRes.save(function(err, myRes){
            if(err){
                console.log('Cound not save in controllers.create because of error: ', err);
                res.json(err);
            }
            else{
                console.log('Saved via controllers create method');
                res.json(myRes);
            }
        }) 
        //addNum += 1;
    },
    show: function(req,res){
        console.log('Hit show in products.js')
        product.findOne({_id:req.params.id}, function(err, json){
            if(err){
                console.log('could not find product')
                res.json(err);
            } else {
                res.json(json);
            }
        });
    },
    update: function(req, res){
        console.log('Hit update in products.js')
        product.findOne({_id: req.params.id}, function(err, product){
            if(err){
                console.log('Could not find product')
                res.json(err);
            } else {
                console.log('Retrieving product');
                product.name = req.body.name;
                product.qty = req.body.qty;
                product.price = req.body.price;
                product.img = req.body.img;
                product.save(function(err){
                    if(err){
                        res.json(err);
                    } else{
                        res.json(product);
                    }
                });
            }
        })

    },
    delete: function(req, res){
        console.log('Hit delete in products.js')
        product.remove({_id: req.params.id}, function(err){
            if(err){
                console.log('errors found', err);
                res.json(err);
            } else{
                console.log('deleted');
                res.json({message:'Deleted'});
            }
        })   
    },
}