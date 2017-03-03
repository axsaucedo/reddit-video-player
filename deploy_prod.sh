#!/bin/sh

# stop on error
set -e

# Building code
npm run-script build

# Replacing all the necessary stuff
# Basically because github pages uses Jekyll, we need to make sure we have prepended /reddit-video-crawler/ so it finds all files
sed -i '' 's|<base href="/">|<base href="/reddit-video-player/">|g' build/index.html
find build/assets -type f -name "*.js" -print0 | xargs -0 sed -i '' 's|navbar.html|/reddit-video-player/navbar.html|g'
find build/assets -type f -name "*.js" -print0 | xargs -0 sed -i '' 's|redditvideo.html|/reddit-video-player/redditvideo.html|g'
find build/assets -type f -name "*.js" -print0 | xargs -0 sed -i '' 's|app.html|/reddit-video-player/app.html|g'
find build/assets -type f -name "*.js" -print0 | xargs -0 sed -i '' 's|home.css|/reddit-video-player/home.css|g'

# Deploying to gh-pages
git branch -D gh-pages || true
git checkout -b gh-pages
git add build --force
git commit -m "deploy to gh-pages"
git push origin `git subtree split --prefix build`:gh-pages --force
git checkout master
git branch -D gh-pages


