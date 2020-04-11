npm run build &&
git checkout gh-pages &&
rm -rf  *.html *.js *.json *.css &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m "update" &&
git push 