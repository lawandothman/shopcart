# SHOPCART

eCommerce platform built with MERN stack. 

## Features

- Full featured shopping cart
- Product reviews and ratings

## Usage

### Node

Be sure to have Nodev14.6+ installed. 
### Env Variables 
Create a  .env file in the root and add the following
```
NODE_ENV = development
PORT = 5000
MONGO_URI = <Your MongoDB URI>
```
### Install Dependencies 
```
npm install 
cd frontend
npm install
```
### Run 
```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only 
npm run server
```

### Seed Database 
You can use the following commands to seed the database with some dummy data of users and products, as well as destroy all data. 
```
# Import Data
npm run data:import

# Destroy data
npm run data:destroy
```