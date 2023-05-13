FROM node:14-alpine
WORKDIR /app
COPY . .
RUN npm install --only=production
EXPOSE $PORT
CMD ["bash", "start.sh"]