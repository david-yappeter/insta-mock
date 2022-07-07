FROM node:16.13.2-alpine as builder

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Remove Static assets from nginx
RUN rm -rf ./*
COPY --from=builder /app/build .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
