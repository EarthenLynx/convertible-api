#!bin/bash

echo 'Setting up dir structure'
mkdir ../store
mkdir ../store/tmp

echo 'Installing node modules ...'
npm install

echo 'Creating environment file'
echo 'HOST=http://localhost' >> ../.env
echo 'PORT=9000' >> ../.env

echo 'Done. Now removing config files'
rm -rf ../bin