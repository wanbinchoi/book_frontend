FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# 실행 단계
FROM node:20
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY server.js .             
RUN npm install express
EXPOSE 3000
CMD ["node", "server.js"]