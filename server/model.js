var mongoose = require('mongoose');
mongoose.connect('mongodb://123.57.223.74/bookstore');
var BookSchema = new mongoose.Schema({
    name:String,
    image:String,
    price:Number
});
exports.Book = mongoose.model('Book',BookSchema);
/*
exports.Book.create({
    name:'node.js',
    price:70,
    image:'http://img0.imgtn.bdimg.com/it/u=2514142305,4187501989&fm=21&gp=0.jpg'
},function(err,book){
    console.log(book);
});*/
/*
exports.Book.remove({},function(err,result){
    console.log(err);
    console.log(result);
});*/
