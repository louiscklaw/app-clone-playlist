#!/usr/bin/env bash

yarn -d

npx browserslist@latest --update-db

yarn dev
