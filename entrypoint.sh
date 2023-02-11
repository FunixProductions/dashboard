#!/bin/ash
rm -rf /home/container/tmp
mkdir /home/container/tmp

echo "⟳ Starting Nginx..."
/usr/sbin/nginx -c /home/container/nginx/nginx.conf -p /home/container/
