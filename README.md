# Bug-tracker



## Table of Content

-   [Description](#Description)
-   [Technologies used](#Technologies-Used)
-   [Requirements](#Requirements)
-   [How to install](#How-to-install)
-   [How to run](#How-to-run)
-   [References](#References)
-   [Contact](#Contact)


## Description

This is an API REST project created as part of continuous assessment of Cloud-based Web Applications. It was written on JavaScript using async/await. Using an API developed in Node.js this applications identifies errors on projects, returning comments and issues in response.


### Technologies used

-   Visual Studio Code **1.51.1**
-   Postman **7.34.0**
-   MongoDB Compass **1.23.0**
-   Typora **0.9.9.35.2**
-   Github
-   Heroku


## Features

-   Custom password user system with basic security with token. 
-   NPM scripts for cleaning and seeding the MongoDB database.
-   NPM script for keeping good source code formatting using prettier and ESLint.
-   JWT Tokens, make requests with a token after login with `Authorization` header with value `Bearer yourToken` where `yourToken` is the **signed and encrypted token** given in the response from the login process.


## Requirements

-   Node.js **10+**
-   JavaScript 
-   MongoDB **3.6+**

### Login credentials

email: `admin@admin.com`  
password: `12345`


## How to install

1. Clone the project from github.

```bash
git clone https://github.com/borgesdesa/bugtrackerca2
```

```bash
$ cd bugtrackerca2
$ npm install
$ npm update
```

### Setting up environments

1.  In the root this repository you will find a file named `.env.example`
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment.
5.  Upload the `.env` to your environment server.
6.  If you use the postman collection to try the endpoints, change value of the variable `server` on your environment to the url of your server, for development mode use <http://localhost:3000>

## How to run

### Database seeding samples

Run this command to seed the database with dynamic data.

```bash
npm run seed
```

### Running application

```bash
npm run dev
```

You will know server is running by checking the output of the command `npm run dev`

```bash
****************************
*    Starting Server
*    Port: 3000
*    NODE_ENV: development
*    Database: MongoDB
*    DB Connection: OK
****************************
```

## Usage

Once everything is set up to test API routes either use Postman or any other api testing application. Default username/password combination for login is `admin@admin.com/12345`.

### Creating new models

If you need to add more models to the project just create a new file in `/app/models/` and it will be loaded dynamically.

### Creating new routes

If you need to add more routes to the project just create a new file in `/app/routes/` and it will be loaded dynamically.

## Contact and references

Created by [Bruno Borges](https:/brunoborges.eu/) - feel free to hit me up!

With the help of DevEd's](https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q) tutorials: [Link 1](https://www.youtube.com/watch?v=vjf774RKrLc&t=2349s&ab_channel=DevEd), [Link 2](https://www.youtube.com/watch?v=2jqok-WgelI&t=2s&ab_channel=DevEd).


