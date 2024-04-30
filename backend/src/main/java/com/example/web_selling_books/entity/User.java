package com.example.web_selling_books.entity;

import com.example.web_selling_books.enums.RoleUser;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.Set;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user")
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;
    String email;
    String firstname;
    String lastname;
    String password;
    String username;
    String phoneNumber;
    LocalDate dob;
    Set<String> roles;
}
