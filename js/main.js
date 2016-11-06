/*
$('.slider').slick({
    dots: true
});


var source = [22,51,-4,31,62,7,327,27,88,-3,-48];

var user = {
	name: 'Artur',
	login: 'fireworkx',
	password: 'Aeeewwtg',
	address: {
		city: 'LP',
		house: {
			flat: 45,
			floor: 2
		}
	}
};


function props(obj){
	for(var propName in obj){
		
		if( typeof obj[propName] == 'object'){
			props(obj[propName]);
		}else{
		console.log(propName + ':' + obj[propName]);
		}
	}
}


function sumArray(arr, index, operation){
	
	index = index || 0;
	operation = operation || '+';
	
	
	if( index == arr.length - 1){
		return arr[index];
	}else{
		if( operation == '+'){
			return arr[index] + sumArray(arr, index + 1);
		}
		if( operation == '-'){
			return arr[index] - sumArray(arr, index + 1);
		}
		if( operation == '*'){
			return arr[index] * sumArray(arr, index + 1);
		}
		if( operation == '/'){
			return arr[index] / sumArray(arr, index + 1);
		}
	}
	
}


//console.log(sumArray(source, 0, '/'));



var count = 0;

function fibRow(number, curVar){
	
	function fib(n){
		
		count++;
		
		if( n <= 1){
			return n;
		}else{
			return fib(n-1) + fib(n-2);
		}
	}
	
	curVar = curVar || 1;
	
	console.log(fib(curVar));
	
	if( number > curVar ){
		fibRow(number, curVar + 1);
	}
}

time1 = new Date();

//console.log(fibRow(35));

//console.log( 'Количество вызовов : ' + count + ' | Затраченное время : ' + (new Date - time1));


var count2 = 0

function fibCi(num){
	
	count2++;
	
	var fibArray = [];
	
	for(var i = 0; i < num; i++){
		if( i <= 1 ){
			fibArray[i] = 1;
		}else{
			fibArray[i] = fibArray[i-1] + fibArray[i-2];
		}
	}
	
	return fibArray;
}

//console.log('-------------------------------------');

time2 = new Date();

//console.log(fibCi(35));
//console.log('Количество вызовов : ' + count2 + ' | Затраченное время : ' + (new Date() - time2));
















var q = {
	price: 100,
	count: 25,
	
	getPrice: function(){
		alert('Цена: ' + q.price);
	}
};


function getWidth(){
	return this.width;
}

var arr = [{width: 30},{width: 10},{}];

if( getWidth.call(arr[0]) > getWidth.call(arr[1]) ){
	//alert('1-й больше');
}else{
	//alert('2-й больше');
}




function product(name, price){
	
	product.count++;
	this.name = name;
	this.price = price;
	
	this.getDiscount = function (){
		var discount = this.price * 0.75;
		return this.price - discount;
	}
}

product.count = 0;

product.getCount = function (){
	return product.count;
}

var tv = new product('tv', 27500);
var car = new product('car', 127500);
var phone = new product('phone', 7500);

console.log(tv.getDiscount());
console.log(car.getDiscount());
console.log(phone.getDiscount());

console.log(product.getCount());

function ItemConstructor(){
	
	
}


Item.createEmpty = function (){
	var item = new ItemConstructor;
	item.name = 'Empty';
	item.price = 100;
	item.width = 1;
	item.height = 2;
	return item;
}

Item.createFromData = function (data){
	this.name = data.name;
	this.price = data.price;
	this.width = data.width;
	this.height = data.height;
}

var tv = new Item.createFromData({name: 'telek', price: 26000});


console.log(tv);




var Cart = function(){
	var items = [];
	
	this.getProduct = function(index){
		return items[index];
	}
	
	this.addProduct = function(product){
		if( !validateProduct(product) ){
			console.error('Wrong product');
		}
		
		var con = getProductByName(product.name);
		
		if( con ){
			con.count++;
		}else{
			items.push({obj: product, count: 1});
		}
	}
	
	function getProductByName(productName){
		for(var i = 0; I < items.length; i++){
			if( items[i].obj.name == productName ){
				return items[i];
			}
		}
	}
	
	function validateProduct(product){
		if( product.name != undefined && product.price != undefined){
			return true;
		}
		return false;
	}
	
	
}

function Product(){
	
}

Product.createEmpty = function(){
	var product = new Product;
	product.price = 10;
	product.name = 'Empty';
	return product;
}

Product.createFromData = function(data){
	var product = new Product;
	product.price = data.price;
	product.name = data.name;
	return product
}

var cart = new Cart();


cart.addProduct(Product.createEmpty());



*/


function setHeight(){
	$('.header').css({
		height: $(window).height() + 'px'
	});
}

setHeight();
$(window).resize( setHeight() );

$(document).ready(function(){
    $('.container').each(function(){
        var highestBox = 0;
        $('.col-md-4 ', this).each(function(){
            if($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        $('.col-md-4 ',this).height(highestBox);
    });
});
















