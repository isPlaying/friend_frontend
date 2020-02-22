cd ..
npm run build
TIMENOW=`date +%Y%m%d`
docker build -f docker/Dockerfile -t isplaying/friend_frontend:dev_${TIMENOW} .
rm -rf dist
docker push isplaying/friend_frontend:dev_${TIMENOW}
