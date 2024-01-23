FROM node:20 as BUILD

MAINTAINER Antoine PRONNIER, <antoine.pronnier@gmail.com>

WORKDIR /container/build-dashboard/

RUN npm install -g @angular/cli

COPY . .

RUN npm ci
RUN ng build --configuration=development

FROM nginx:alpine as NGINX

MAINTAINER Antoine PRONNIER, <antoine.pronnier@gmail.com>

ENV HOME /home/container
WORKDIR /home/container

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=BUILD /container/build-dashboard/dist/dashboard /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
