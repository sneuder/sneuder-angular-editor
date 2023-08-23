# production
FROM node:16.20.1-alpine as prod

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 4200

CMD ["npm", "start"]

# dev
FROM node:16.20.1-alpine as dev

WORKDIR /app

EXPOSE 4200

CMD tail -f /dev/null
CMD ["npm", "i"]
CMD ["npm", "start"]