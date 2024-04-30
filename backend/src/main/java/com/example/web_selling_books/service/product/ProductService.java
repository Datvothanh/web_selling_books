package com.example.web_selling_books.service.product;

import com.example.web_selling_books.dto.request.ProductCreationRequest;
import com.example.web_selling_books.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {
    Product createProduct(ProductCreationRequest request);
    Product getProduct(String productId);
    List<Product> getProducts();
    List<Product> getProductsByCategory(String categoryId);
    Product updateProduct(String productId, ProductCreationRequest request);

    String deleteProduct(String productId);

}
