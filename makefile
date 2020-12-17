dat=`date +'%Y-%m-%d %H:%M:%S'`
all:
	echo $(dat)
	git add .
	git commit -m date
	git push origin main
