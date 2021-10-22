FROM node:lts-buster-slim
                USER root
                RUN mkdir /runningenv
                COPY . /runningenv
                RUN cd /runningenv \
                && npm ci \
                && npm run build \
                && npm install -g serve \
                && nohup serve -s build -l 4000
                EXPOSE 4000
