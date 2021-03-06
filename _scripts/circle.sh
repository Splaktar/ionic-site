#!/bin/bash

ARG_DEFS=(
  "--index=(.*)"
  "--total=(.*)"
)

function buildforjekyll {
  echo "Cloning ionic-site in _site"
  mkdir ./_site
  cd _site
  git clone https://$GH_AUTH_TOKEN@github.com:driftyco/ionic-site.git .
  git config --global user.email "perry@ionic.io"
  git config --global user.name "perry"

  echo "Checking out production branch"
  git checkout origin/production -b production

  echo "Building site with jekyll"
  cd ..
  jekyll build

  echo "Committing to production branch"
  cd ./_site
  git commit -a -m "automated build of $CIRCLE_SHA1"

  echo "Pushing production branch to origin"
  git push origin production
  cd ..

  echo "Cleaning up"
  rm -R _site
}

if [ -d "_scripts" ]; then
  buildforjekyll
fi
