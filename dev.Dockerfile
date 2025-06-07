FROM node:22 AS BUILD

LABEL maintainer="Antoine PRONNIER <antoine.pronnier@gmail.com>"

WORKDIR /container/build-dashboard/

RUN npm install -g @angular/cli

COPY . .

RUN npm ci
RUN ng build --configuration=development

FROM nginx:alpine AS NGINX

LABEL maintainer="Antoine PRONNIER <antoine.pronnier@gmail.com>"

ENV HOME /home/container
WORKDIR /home/container

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=BUILD /container/build-dashboard/dist/dashboard /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
