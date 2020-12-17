dat=`date +'%Y-%m-%d %H:%M:%S'`
all:
	echo $(dat)
	git add .
	git commit -m $dat
	git push origin main
