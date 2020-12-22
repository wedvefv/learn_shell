// 队列

function Queue(){
	this.dataList = []
	this.pushQ = pushQ
	this.popQ = popQ
	this.front = front
	this.back = back
	this.toString = toString
	this.empty = empty
}

function pushQ(ele){
	this.dataList.push(ele)
}

function popQ(){
	return this.dataList.shift();
}

function front(){
	return this.dataList[0]
}

function back(){
	return this.dataList[this.dataList.length-1];
}


function toString(){
	var str = ""
	for(var i=0; i<this.dataList.length; i++){
		str += this.dataList[i] +"\n";
	}

	return str
}

function empty(){
	if(this.dataList.length==0){
		return true
	}

	return false;
}


var q = new Queue()

q.pushQ(1)
q.pushQ(2)
q.pushQ(3)
console.log(q.toString());

console.log("front: ", q.front())
console.log("front: ", q.back())
console.log("pop: ", q.popQ())

