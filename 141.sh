#!/bin/bash
# 测试shell扩展${a:+b}
# 如果a存在不是空，则使用b的值

prepend() { 
	if [ -d "$2" ] 
	then
		eval $1="$2\${$1:+':'\$$1}"
		 
		echo "+++++"$PATH
	fi
}

a="PATH"

prepend $a  "/usr/local"
