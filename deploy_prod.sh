
git branch -D gh-pages
git checkout -b gh-pages
git add $1 --force
git commit -m "deploy to gh-pages"
git push origin `git subtree split --prefix build`:gh-pages --force
git checkout master
git branch -D gh-pages
