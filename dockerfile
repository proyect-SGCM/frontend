FROM node:lts-alpine3.12 as node
#FROM ubuntu:16.04 as node

WORKDIR /app

COPY /angular/. /app
#VOLUME /app
RUN npm install
#COPY ./ /app
#COPY /angular/. /app
RUN npm run build -- --prod

FROM nginx:alpine
COPY --from=node /app/dist/frontend /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf