@echo off
npm run build & cd dist & git init & git checkout -b main & git add -A & git commit -m 'deploy' & git push -f git@github.com:joniwus/joniwus.github.io.git main
