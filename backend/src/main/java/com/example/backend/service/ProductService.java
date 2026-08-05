package com.example.backend.service;

import com.example.backend.model.Product;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
     public List<Product> getProducts() {
        return List.of(
            new Product(1, "Laptop", 99.9),
            new Product(2, "Phone", 49.9),
            new Product(3, "Tablet", 29.9)
        );
    }
}