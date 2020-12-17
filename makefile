all:
	dd=`date +"%Y-%m-%d %H:%M:%S"`
	git add .
	git commit -m echo ${dd}
	git push origin main
