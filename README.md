# SHOPCART

eCommerce platform built with MERN stack. 

## Features

- Full featured shopping cart
- Product reviews and ratings
- Database seeder (users and products)
- Checkout process 
- User Profile with orders
- PayPal integration
## Usage

### Node

Be sure to have Node v14.6+ installed. 
### Env Variables 
Create a  .env file in the root and add the following
```dosini
NODE_ENV = development
PORT = 5000
MONGO_URI = <Your MongoDB URI>
JWT_SECRET = <Generate a random JWT Secret Key>
PAYPAL_CLIENT_ID = <Your PayPal Client ID>
```
## Install Dependencies 
### `npm install`
### `cd frontend`
### `npm install`

## Available Scripts 
### `npm run dev`
Runs the app in development mode. 
Open [http://localhost:3000](http://localhost:3000) to view the frontend in your browser.

The server starts on [http://localhost:5000](http://localhost:5000)
### `npm run server`
Starts the server.

### `npm run data:import`
Seeds the database with sample data of products and users.
### `npm run data:destroy`
Destroys all data in the database. 