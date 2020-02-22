FROM nginx:stable
ADD dist/friend/ web/dist
ADD docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
