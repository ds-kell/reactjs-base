# Build stage
FROM node:18-alpine
ENV NODE_ENV development

WORKDIR /fe-react-base/

# COPY public/ /fe-react-base/public
COPY src/ /fe-react-base/src
COPY package.json /fe-react-base/
RUN npm install
# Expose port
EXPOSE 3000
CMD ["npm", "start"]