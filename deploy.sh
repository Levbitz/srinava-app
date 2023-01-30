


echo "Switching to branch master"
git checkout master

echo "Building app"
yarn build

echo "Deploying files to server"
rsync -avP dist/ sam@172.105.39.26/:/var/www/172.105.39.26/
echo "Deployment complete"
