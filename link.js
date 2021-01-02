// 

function Node(ele){
	this.ele = ele ;
	this.next = null;
}


function LList(){
	this.head = new Node("head")
	this.find = find;
	this.insert = insert;
	this.remvoe = remove;
	this.display = display;
}

function find(item){
	var curNode = this.head;
	while(curNode.ele != item){
		curNode = curNode.next;
	}
	if(curNode.ele == item){
		return curNode
	}
	return null
}


function insert(newEle, item){
	var newNode = new Node(newEle, item)
	var curNode = this.find(item)
	if curNode != null {
		
	}
}




