#!/bin/ash
rm -rf /home/container/*

mkdir /home/container/tmp
mkdir /home/container/logs
touch /home/container/error.log
cp -rf /home/nginx /home/container

echo "⟳ Starting Nginx..."
/usr/sbin/nginx -c /home/container/nginx/nginx.conf -p /home/container/
