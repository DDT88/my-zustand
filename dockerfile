FROM node:lts-buster-slim
                USER root
                EXPOSE 4000
                RUN mkdir /runningenv
                COPY . /runningenv
                RUN cd /runningenv \
                && npm ci \
                && npm run build \
                && npm install -g serve
                
