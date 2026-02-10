FROM node:latest

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

WORKDIR /usr/app

# Install dependencies first (will be cached if package.json doesn't change)
COPY package*.json ./
RUN npm install

# Install expo-cli globally
RUN npm install --global expo-cli

# Don't copy code - use volumes for hot reload in development
CMD [ "npx", "expo", "start", "--clear" ]
