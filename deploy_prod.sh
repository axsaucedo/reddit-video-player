#!/bin/sh

# stop on error
set -e 

# Building code
npm run-script build

# Replacing all the necessary stuff
sed -i '' 's|<base href="/">|<base href="/reddit-video-crawler/">|g' build/index.html
find build/assets -type f -name "*.js" -print0 | xargs -0 sed -i '' 's|home.html|/reddit-video-crawler/home.html|g' 
find build/assets -type f -name "*.js" -print0 | xargs -0 sed -i '' 's|navbar.html|/reddit-video-crawler/navbar.html|g' 
find build/assets -type f -name "*.js" -print0 | xargs -0 sed -i '' 's|todolist.html|/reddit-video-crawler/todolist.html|g' 
find build/assets -type f -name "*.js" -print0 | xargs -0 sed -i '' 's|app.html|/reddit-video-crawler/app.html|g' 
find build/assets -type f -name "*.js" -print0 | xargs -0 sed -i '' 's|home.css|/reddit-video-crawler/home.css|g' 

# Deploying to gh-pages
git branch -D gh-pages || true
git checkout -b gh-pages
git add build --force
git commit -m "deploy to gh-pages"
git push origin `git subtree split --prefix build`:gh-pages --force
git checkout master
git branch -D gh-pages


