CREATE DATABASE learndb;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL
);

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(order_id),
    product_id INT REFERENCES products(product_id),
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO products (product_name, price, stock_quantity) VALUES
('Laptop', 999.99, 50),
('Smartphone', 499.99, 200),
('Tablet', 299.99, 150);

INSERT INTO customers (first_name, last_name, email) VALUES
('John', 'Doe', 'johndoe@gmail.com),
('Jane', 'Smith', 'johnsmith@gmail.com),
('Alice', 'Johnson', 'alicejohnson@gmail.com);

INSERT INTO orders (customer_id) VALUES
(1),
(2),
(3);

INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
(1, 1, 1, 999.99),
(1, 2, 2, 499.99),
(2, 3, 1, 299.99),
(3, 1, 1, 999.99),
(3, 3, 1, 299.99);

SELECT * FROM products;
SELECT * FROM customers;
SELECT * FROM orders;
SELECT * FROM order_items;