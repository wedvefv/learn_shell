dat=`date +'%Y-%m-%d %H:%M:%S'`
all:
	echo $(echo $(dat))
	git add .
	git commit -m 1
	git push origin main
