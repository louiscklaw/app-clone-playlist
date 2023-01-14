#!/usr/bin/env bash

# rm -rf node_modules/*

set -ex

npm i -D

npm run migrate_reset

npm run dev

