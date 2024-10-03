# School Management Server

## How to set environment variables

All environment variables which are used in
the project are listed in the `.env.sample` file.

Create a `.env` file in the server directory
of your application and add the variables to
the file (like in `.env.sample` file).

## Run instructions

before running application you need to run 

`git pull` to have an up-to-date version

`npm ci` to update dependencies

`npm run prisma:migrate` in case if some migrations have been added

`npm run start` which will run an application under 4000 port.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the back end app in the development mode. This host will be available for client app to call
[http://localhost:4000/graphql](http://localhost:4000/graphql).

During the first run, the app will create an admin user based on
ADMIN_EMAIL & ADMIN_PASSWORD env variables to let you login into the system

### `npm run prisma:merge`

Merges all prisma models into single file

### `npm run prisma:generate`

Merges all prisma models as last one and updates prisma client

### `npm run prisma:migrate`

Update database based on existing migrations, and creates migration in case of model changes comparing to the database

### `npm run test`

Tests does not implemented yet

## test CURLs

### Curl to login
````
curl --location 'http://localhost:4000/graphql' \
--header 'Content-Type: application/json' \
--header 'Cookie: paa-did=a.c.ktrlkifx.86493dec-e5cf-4603-b3d8-9d147b6809e5' \
--data-raw '{
  "query": "mutation Login($email: String!, $password: String!) { login(email: $email, password: $password) { token, user {id, email, role} } }",
  "variables": {
    "email": "__admin_email__",
    "password": "__admin_password__"
  }
}'
````

### Curl to create a grade

````
curl --location 'http://localhost:4000/graphql' \
--header 'Content-Type: application/json' \
--header 'Authorization: ___JWT_TOKEN___' \
--header 'Cookie: paa-did=a.c.ktrlkifx.86493dec-e5cf-4603-b3d8-9d147b6809e5' \
--data '{
  "query": "mutation { createGrade(name: \"First Class\") { id, name } }"
}'
````

### Curl to get current user 

````
curl --location 'http://localhost:4000/graphql' \
--header 'Content-Type: application/json' \
--header 'Authorization: ___JWT_TOKEN___' \
--header 'Cookie: paa-did=a.c.ktrlkifx.86493dec-e5cf-4603-b3d8-9d147b6809e5' \
--data '{
    "query": "query { me { id, email, role } }"
}'
````