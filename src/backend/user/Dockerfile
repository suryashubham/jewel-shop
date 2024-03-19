FROM node:lts-alpine

# Set working directory inside the container
WORKDIR /app/src

COPY package*.json ./
COPY .env .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./src .


# Expose the port that the app runs on
EXPOSE 4000

# Command to run the application
CMD ["npm", "start"]
