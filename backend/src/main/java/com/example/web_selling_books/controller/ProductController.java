package com.example.web_selling_books.controller;

import com.example.web_selling_books.dto.response.ApiResponse;
import com.example.web_selling_books.dto.request.ProductCreationRequest;
import com.example.web_selling_books.entity.Product;
import com.example.web_selling_books.service.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    ApiResponse<Product> createProduct(@RequestBody ProductCreationRequest request){
        ApiResponse<Product> apiResponse = new ApiResponse<>();
        apiResponse.setResult(productService.createProduct(request));
        return apiResponse;
    }

    @GetMapping("/{productId}")
    ApiResponse<Product> getProduct(@PathVariable("productId") String productId){
        ApiResponse<Product> apiResponse = new ApiResponse<>();
        apiResponse.setResult(productService.getProduct(productId));
        return apiResponse;
    }

    @GetMapping
    ApiResponse<List<Product>> getProducts(){
        ApiResponse<List<Product>> apiResponse = new ApiResponse<>();
        apiResponse.setResult(productService.getProducts());
        return apiResponse;
    }

    @GetMapping("/category/{categoryId}")
    ApiResponse<List<Product>> getProductsByCategory(@PathVariable("categoryId") String categoryId){
        ApiResponse<List<Product>> apiResponse = new ApiResponse<>();
        apiResponse.setResult(productService.getProductsByCategory(categoryId));
        return apiResponse;
    }

    @PutMapping("/{productId}")
    ApiResponse<Product> updateProduct(@PathVariable("productId") String productId, @RequestBody ProductCreationRequest request){
        ApiResponse<Product> apiResponse = new ApiResponse<>();
        apiResponse.setResult(productService.updateProduct(productId, request));
        return apiResponse;
    }

    @DeleteMapping("/{productId}")
    ApiResponse<String> deleteProduct(@PathVariable String productId){
        ApiResponse<String> apiResponse = new ApiResponse<>();
        apiResponse.setMessage(productService.deleteProduct(productId));
        return apiResponse;
    }


}
