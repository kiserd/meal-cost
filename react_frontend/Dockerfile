FROM node:latest as build

WORKDIR /build
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /build/build /frontend/build

CMD ["nginx", "-g", "daemon off;"]
