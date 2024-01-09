#base Image
FROM node:18.19.0-alpine
# create working directory
WORKDIR /app
# copy files to /app
COPY . .

# install dependencies
RUN npm install

#Expose port 8000
EXPOSE 8000

# build styles
RUN npm run build-tail

# start app
CMD [ "npm", "start" ]