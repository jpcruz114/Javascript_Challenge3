# Javascript_Challenge3

Tools Needed:
- Node
- MySQL
- API Testing Tools (e.g. Insomnia, Postman)

Database setup:
- Create a schema and name it "javascript_challenge_database"
- Create the needed tables:
    - sellers
        - id - INT
        - seller_name - VARCHAR(45)
        - gender - VARCHAR(45)
        - created_at - TIMESTAMP
        - updated_at - TIMESTAMP
    - products
        - id - INT
        - seller_id - INT
        - product_name - VARCHAR(45)
        - product_description - VARCHAR(45)
        - created_at - TIMESTAMP
        - updated_at - TIMESTAMP
    - cart
        - id - INT
        - product_id - INT
        - quantity - DOUBLE
        - created_at - TIMESTAMP
- Connection sample setup:
    - host: '127.0.0.1',
    - user: 'root',
    - password: '',
    - database: 'javascript_challenge_database'

How To Run APIs:
- API routers are found in routes/index.js
- Run this API using localhost:3000
- Use API testing tools like Insomnia or Postman

Solution:
- This problem was done using NodeJS(ExpressJS as framework and in ES6),MySQL was used as database management tool.
- GET method was used if the user wants to list the sellers, products and the cart or view by 1 by 1 the sellers, products and the cart.
- POST method was used if the user wants to add a data in sellers, products and cart table.
- PUT method was used if the user wants to update a data in seller, products and cart table.
- DELETE method was used if the user wants to delete a data in seller, products and cart table.
