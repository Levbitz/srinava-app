


echo "Switching to branch master"
git checkout master

echo "Building app"
yarn build

echo "Deploying files to server"
rsync -avP dist/ sam@srinava.com:/var/www/srinava.com/
echo "Deployment complete"
