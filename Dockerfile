# Build stage
FROM node:18-alpine
ENV NODE_ENV development

WORKDIR /app/

# COPY public/ /app/public
COPY src/ /app/src
COPY public/ /app/public

COPY package.json /app/

RUN npm install

# Expose port
EXPOSE 3000

CMD ["npm", "start"]
