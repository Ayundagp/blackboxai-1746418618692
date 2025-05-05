-- Create database
CREATE DATABASE IF NOT EXISTS mobile_app_db;
USE mobile_app_db;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create form_data table
CREATE TABLE IF NOT EXISTS form_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    region VARCHAR(100),
    area VARCHAR(100),
    kebun VARCHAR(100),
    blok_no_baris VARCHAR(100),
    arah_masuk VARCHAR(100),
    no_pokok VARCHAR(50),
    jumlah_buah_bulan1 INT,
    jumlah_buah_bulan2 INT,
    jumlah_buah_bulan3 INT,
    jumlah_buah_bulan4 INT,
    jumlah_bunga INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert default admin user (password: admin123)
INSERT INTO users (username, password) VALUES 
('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');
