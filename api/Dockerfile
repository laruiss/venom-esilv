FROM node:15.11.0

WORKDIR /app

EXPOSE 3000

# Copy source code from src to /app/src
COPY src src/

COPY .eslintrc.js package.json package-lock.json ./

RUN npm install

CMD ["npm", "run", "dev"]
