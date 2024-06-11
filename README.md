# Nodejs, Express, Prisma and Mysql2 Starter (RESTful API)

## Description

Web application built with Node.js, Express, Prisma, and MySQL2. It allows users to create, read, update, and delete products and users via a RESTful API.

## Features

- CRUD operations for products and users
- API versioning and structured folder organization

## Installation

##### Clone the repository:

`git clone https://github.com/joshuasarmiento/nodejs-prisma-mysql-starter.git`

##### Navigate to the project directory:

`cd nodejs-prisma-mysql-starter`

##### Install dependencies:

`npm install`

##### Setup:

###### Configure the database connection in the prisma/schema.prisma file
###### Run Prisma migrations

`npx prisma migrate dev`

##### Generate Prisma client:

`npx prisma generate`

##### Build the project:

`npm run build`

##### Start the server:

`npm run start`
