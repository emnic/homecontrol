#!/bin/bash
echo "Starting web server"
DEBUG=homecontrol NODE_ENV=test ./bin/www > server.log &

echo "Starting webdriver"
./node_modules/protractor/bin/webdriver-manager start > webdriver.log &
