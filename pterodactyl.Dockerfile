FROM node:18.12.1 as BUILD

MAINTAINER Antoine PRONNIER, <antoine.pronnier@gmail.com>

WORKDIR /container/build-dashboard/

RUN npm install -g @angular/cli

COPY . .

RUN npm install
RUN ng build

FROM nginx as NGINX

MAINTAINER Antoine PRONNIER, <antoine.pronnier@gmail.com>

EXPOSE 9855

COPY nginxdashboard.conf /etc/nginx/conf.d/default.conf
COPY --from=BUILD /container/build-dashboard/dist/dashboard /usr/share/nginx/html
