FROM node:lts-buster-slim
                USER root
                RUN mkdir /runningenv
                COPY . /runningenv
                RUN cd /runningenv \
                && npm ci \
                && npm run build \
                && npm install -g serve \
                EXPOSE 4000
