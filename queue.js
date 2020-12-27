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
// 优先队列
function popQ1(){
    var min = 0;
   for(let i=0; i<this.dataList.length; i++){
        if(this.dataList[i].code < this.dataList[min].code){
            min = i
        }
   } 

    return this.dataList.splice(min, 1)
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


function Dancer(name, sex){
	this.name = name
	this.sex = sex;
}

function getDancer(males, females){
	var names = [
		{"name1": "F"},
		{"name2": "M"},
		{"name3": "F"},
		{"name4": "M"},
		{"name5": "F"},
		{"name6": "M"},
		{"name7": "M"},
		{"name8": "F"}
	]
	names.forEach(function(x){
		for(var k in x) {
			let sex = x[k]
			if(sex == "F"){
				females.pushQ(k)
			}else{
				males.pushQ(k)
			}
		}
	})

}

function dance(males, females){
	while(!females.empty() && !males.empty()){
		person = females.popQ()
		person1 = males.popQ()
		console.log("F is: ", person, "M is :", person1)
	}
	console.log()
}


var males = new Queue()
var females = new Queue()
getDancer(males, females)
dance(males, females)





// 基数排序， 1按个位入队，再取出，按十位入队，再取出。

var nums = [];
for(let i = 0; i<=9 ; i++){
	nums[i] = Math.floor(Math.random() * 101);
}

// console.log(nums);


var queues = [];
for(let i=0;i<=9;i++){
	queues[i] = new Queue()
}

function deal(queues,nums, weight){
    for(let i=0; i<nums.length; i++){
        if(weight == 1 ){
            queues[nums[i]%10].pushQ(nums[i])
        }else{
            queues[Math.floor(nums[i]/10)].pushQ(nums[i])
        }
    }
}


function getData(queues, nums){
    let j = 0;
    for(var i=0; i<nums.length; i++){
        while(!queues[i].empty()){
            nums[j++] = queues[i].popQ()
        }
    }
}


console.log("before radix sort :")
console.log(nums)
deal(queues, nums, 1)
getData(queues, nums)
deal(queues, nums, 10)
getData(queues, nums)
console.log("after radix sort: ")
console.log(nums)


// 优先队列，可以去中间值

function people(name, code){
    this.name = name
    this.code = code
}


var ed = new Queue();
ed.popQ = popQ1
var p = new people("smith", 5)
ed.pushQ(p)
p = new people("Jones", 4)
ed.pushQ(p)
p = new people("tom",1)
ed.pushQ(p)
p = new people("tom1",0)
ed.pushQ(p)

console.log("第一优先级的用户：",ed.popQ())



