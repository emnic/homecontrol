FROM node:0.12.7

USER root
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN echo deb http://download.telldus.com/debian/ stable main >> /etc/apt/sources.list
RUN wget -q http://download.telldus.se/debian/telldus-public.key -O- | apt-key add -

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN sed -i "s/^exit 101$/exit 0/" /usr/sbin/policy-rc.d
RUN apt-get -y install apt-utils

RUN apt-get install -qqy build-essential \
    libkrb5-dev \
    telldus-core \
    libtelldus-core-dev

#COPY . /usr/src/app/

ADD package.json /usr/src/app/
RUN npm install --unsafe-perm
ADD . /usr/src/app/