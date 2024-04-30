package com.example.web_selling_books.service.category;

import com.example.web_selling_books.dto.request.CategoryCreationRequest;
import com.example.web_selling_books.entity.Category;

import com.example.web_selling_books.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category createCategory(CategoryCreationRequest request) {
        Category category = new Category();
        category.setName(request.getName());
        category.setDes(request.getDes());
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category updateCategory(String categoryId, CategoryCreationRequest request) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        category.setName(request.getName());
        category.setDes(request.getDes());
        return categoryRepository.save(category);
    }

    @Override
    public String deleteCategory(String categoryId) {
        categoryRepository.deleteById(categoryId);
        return "Category has been deleted";
    }
}
