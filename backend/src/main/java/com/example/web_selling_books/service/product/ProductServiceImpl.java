package com.example.web_selling_books.service.product;

import com.example.web_selling_books.dto.request.ProductCreationRequest;
import com.example.web_selling_books.entity.Product;
import com.example.web_selling_books.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product createProduct(ProductCreationRequest request) {
        Product product = new Product();
        product.setCount(request.getCount());
        product.setName(request.getName());
        product.setDes(request.getDes());
        product.setCategory(request.getCategory());
        product.setPrice(request.getPrice());
        product.setAuthor(request.getAuthor());
        return productRepository.save(product);
    }

    @Override
    public Product getProduct(String productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    @Override
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @Override
    public List<Product> getProductsByCategory(String categoryId) {
        return productRepository.findByCategoryId(categoryId);
    }

    @Override
    public Product updateProduct(String productId, ProductCreationRequest request) {
        Product product = getProduct(productId);
        product.setCount(request.getCount());
        product.setName(request.getName());
        product.setDes(request.getDes());
        product.setPrice(request.getPrice());
        product.setAuthor(request.getAuthor());
        product.setCategory(request.getCategory());
        return productRepository.save(product);
    }

    @Override
    public String deleteProduct(String productId) {
        productRepository.deleteById(productId);
        return "Product has been deleted";
    }
}
