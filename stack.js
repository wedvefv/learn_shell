

function push(ele){
	this.dataList[this.top++] = ele;
}

function pop(){
	return this.dataList[--this.top];
}

// 返回栈顶元素
function peek(){
	return this.dataList[this.top-1];
}

function len(){
	return this.top
}

function clear(){
	this.top = 0 
}

function print(){
	for(var i=0; i<this.top; i++){
		console.log("===="+this.dataList[i])
	}
}

function stack(){
	this.dataList = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.len = len;
	this.print = print;
}

var s = new stack()
// console.log(s)
s.push("name1")
s.push("name2")
s.push("name3")
s.push("name4")
var x = s.pop();
console.log(s.dataList)
console.log(x)
s.print()



function mulBase(num, base){
	var s = new stack();
	do {
		s.push(num % base);
		num = Math.floor(num / base)
	}while(num > 0);

	var ret = ''
	while(s.len() > 0 ){
		ret += s.pop()
	}

	return ret
}


console.log(mulBase(16, 8))


// 判断回文


function isHuiwen(word){
	var s = new stack();
	for(var i=0; i<word.length; i++){
		s.push(word[i]);
	}

	var ret = ""
	while(s.len() >0){
		ret += s.pop()

	}

	if (ret == word) {
		return true
	}else{
		return false
	}
}

console.log(isHuiwen("hello olleh"))

	
function fact(n){
	var s = new stack()
	while(n >1){
		s.push(n--)
	}
	var product  = 1 
	while(s.len() > 0 ){
		product += s.pop()
	}

	return product;
}


console.log(fact(4))