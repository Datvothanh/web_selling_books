package com.example.web_selling_books.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "product")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;
    String name;
    float price;
    String des;
    String author;
    Integer count;

    @ManyToOne
    @JoinColumn(name = "seller_id")
    User seller;

    @ManyToOne
    @JoinColumn(name = "category_id")
    Category category;


}
