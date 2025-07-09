CREATE TABLE cart_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT NOT NULL,
    name VARCHAR(100),
    price DECIMAL(10, 2),
    quantity INT,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE menu_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(50),
    icon VARCHAR(10),
    rating FLOAT
);

