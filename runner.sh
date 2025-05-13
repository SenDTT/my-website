#!/bin/bash

if ! command -v nvm &> /dev/null; then
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi
nvm use 22
yarn install
yarn build
pm2 restart ecosystem.config.cjs
