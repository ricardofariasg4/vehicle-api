FROM node:22.2.0

WORKDIR /app

COPY . .

RUN npm install
RUN npx tsc
RUN npm run build

FROM node:22.2.0-alpine

WORKDIR /app

COPY --from=0 /app/package.json ./package.json
COPY .env .env
RUN npm install --only=production
COPY --from=0 /app/dist/bundle.js ./app/bundle.js

EXPOSE 3000

CMD ["npm", "start"]