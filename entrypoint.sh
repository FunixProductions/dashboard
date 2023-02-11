#!/bin/ash
rm -rf /home/container/*

cp -rf /home/nginx /home/container/

echo "⟳ Starting Nginx..."
/usr/sbin/nginx -c /home/container/nginx/nginx.conf -p /home/container/
