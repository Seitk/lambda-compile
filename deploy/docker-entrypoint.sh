#!/usr/bin/env bash
set -e

cd /src
# rm -rf node_modules
npm install

apt-get update
apt-get install zip -y

# Add files you need here
zip -r dist/`date '+%Y-%m-%d--%H-%M-%S'`.zip index.js .browserslistrc package.json package-lock.json node_modules