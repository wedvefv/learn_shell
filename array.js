var names = ["David", "Mike", "Cynthia"]
// 从终端读取

names.sort()
console.log(names)

names.forEach(function(x){console.log("===: "+x)})


function createArr(file){
	var arr = read(file).split("\n")
	for(var i=0; i< arr.length; ++i){
		arr[i] = arr[i].trim();
	}

	return arr
}
