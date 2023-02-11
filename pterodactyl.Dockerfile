FROM node:19 as BUILD

MAINTAINER Antoine PRONNIER, <antoine.pronnier@gmail.com>

WORKDIR /container/build-dashboard/

RUN npm install -g @angular/cli

COPY . .

RUN npm install
RUN ng build

FROM alpine as NGINX

MAINTAINER Antoine PRONNIER, <antoine.pronnier@gmail.com>

EXPOSE 9855

RUN apk --update --no-cache add nginx

COPY ./nginx /home/container/

COPY --from=BUILD /container/build-dashboard/dist/dashboard /home/container/webroot

USER container
ENV USER container
ENV HOME /home/container
WORKDIR /home/container

COPY ./entrypoint.sh /entrypoint.sh

CMD ["/bin/ash", "/entrypoint.sh"]
