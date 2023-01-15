#!/usr/bin/env bash

# rm -rf node_modules/*

set -ex

npm i -D

npm run rm_db
npm run db_push
npm run db_seed

npm run dev
