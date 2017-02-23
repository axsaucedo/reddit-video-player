#!/bin/sh

# stop on error
set -e 

# Building code
npm run-script build

# Replacing all the necessary stuff
sed -i '' 's|<base href="/">|<base href="/reddit-video-crawler/">|g' build/index.html

# Deploying to gh-pages
git branch -D gh-pages
git checkout -b gh-pages
git add $1 --force
git commit -m "deploy to gh-pages"
git push origin `git subtree split --prefix build`:gh-pages --force
git checkout master
git branch -D gh-pages
