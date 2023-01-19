# Movies-DB-Practice
This is a project for me to get familiar with sprint boot and understand it better all around

## Installation
for now you need activate each server alone

assuming you are running linux or mac here are the instructions

### Backend
you'll need gradle for this to work
```
# in ./movie_db_site/
gradle bootRun
```
however you'll need to add `base_url` and`API_KEY` enviourment variable to `./movie_db_site/src/main/resources/application.properties` for the backend server to work.
you'll find the API at localhost:8080

### Frontend
```
# in ./movie_db_front/
# to install all the dependancies
yarn

# to run the server
yarn dev
```
you'll find the webpage at localhost:3000

and you're good to go

## Contribution
since this is a personal project and it is intended for learning purposes there's no need for any contributions currently, feel free however to open issues regarding problems I might have in the project if you have the time to do so.
