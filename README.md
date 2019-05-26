# Phone-catalog
Product catalogue of phones app

## How to run the app

## Requires:

Node


If you want to run the app, you need go to **backend directory**

### `cd ./backend`

Next step install node modules :

### `npm install`

After install node modules, start NodeJS app :

### `node app.js`

Now the same but in frontend side :

`cd ./frontend/phone-catalog` (if you are on root of project)

`cd ../frontend/phone-catalog` (if you are on previous directory)

Install node modules of frontend side :

### `npm install`

And last step run React App :

### `npm start`

***
*Note: If do you want see app from (i.e a mobile)*

*You need change IP in `./frontend/phone-catalog/src/utils/constants.js`*

*Change API_URL value to IP where NodeJS API is running and port 4000*

Like this :

`var API_URL = "http://192.168.0.16:4000";` 
