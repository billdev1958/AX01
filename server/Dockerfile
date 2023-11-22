# Use the image base from Node.js
FROM node:20-alpine3.17

# Set the working directory inside the container
WORKDIR  /usr/src/app

# Copy the package.json file and install the dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port on wich the Express.js application listens
EXPOSE  3001

# COmmand for init the application
CMD ["npm", "start"]


