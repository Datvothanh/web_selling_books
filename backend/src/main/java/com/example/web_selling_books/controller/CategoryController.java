package com.example.web_selling_books.controller;

import com.example.web_selling_books.dto.response.ApiResponse;
import com.example.web_selling_books.dto.request.CategoryCreationRequest;
import com.example.web_selling_books.entity.Category;
import com.example.web_selling_books.service.category.CategoryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;


    @PostMapping
    ApiResponse<Category> createCategory(@RequestBody @Valid CategoryCreationRequest request) {
        ApiResponse<Category> apiResponse = new ApiResponse<>();
        apiResponse.setResult(categoryService.createCategory(request));
        return apiResponse;
    }

    @GetMapping
    ApiResponse<List<Category>> getCategories() {
        ApiResponse<List<Category>> apiResponse = new ApiResponse<>();
        apiResponse.setResult(categoryService.getCategories());
        return apiResponse;
    }

    @PutMapping("/{categoryId}")
    ApiResponse<Category> updateCategory(@PathVariable String categoryId, @RequestBody @Valid CategoryCreationRequest request) {
        ApiResponse<Category> apiResponse = new ApiResponse<>();
        apiResponse.setResult(categoryService.updateCategory(categoryId, request));
        return apiResponse;
    }

    @DeleteMapping("/{categoryId}")
    ApiResponse<String> deleteCategory(@PathVariable String categoryId){
        ApiResponse<String> apiResponse = new ApiResponse<>();
        apiResponse.setMessage(categoryService.deleteCategory(categoryId));
        return apiResponse;
    }

}
