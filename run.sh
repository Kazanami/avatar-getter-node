#!/usr/bin/env bash

git config --global user.name ${GITH_USER}
git config --global user.email ${GITH_EMAIL}
yarn install
node main.js
git add ${GITH_USER}.png
git commit -m "Update Avatar Image"
git reset
