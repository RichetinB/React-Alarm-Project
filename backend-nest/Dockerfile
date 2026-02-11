FROM node:22-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY prisma ./prisma
RUN npx prisma generate || true

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
