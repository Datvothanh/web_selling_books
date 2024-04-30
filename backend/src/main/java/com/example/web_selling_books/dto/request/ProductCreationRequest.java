package com.example.web_selling_books.dto.request;


import com.example.web_selling_books.entity.Category;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductCreationRequest {
    String name;
    float price;
    String des;
    Integer count;
    String author;
    Category category;

}
