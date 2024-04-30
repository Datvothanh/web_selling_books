package com.example.web_selling_books.service.category;

import com.example.web_selling_books.dto.request.CategoryCreationRequest;
import com.example.web_selling_books.entity.Category;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService {
    Category createCategory(CategoryCreationRequest request);
    List<Category> getCategories();
    Category updateCategory(String categoryId, CategoryCreationRequest request);
    String deleteCategory(String categoryId);
}
