FROM node:18.14.2-alpine as node-library-sh-frontend
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node-library-sh-frontend /app/dist/documentation /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
