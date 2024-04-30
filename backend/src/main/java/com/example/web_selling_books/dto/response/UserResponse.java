package com.example.web_selling_books.dto.response;


import com.example.web_selling_books.enums.RoleUser;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserResponse {
    String id;
    String email;
    String phoneNumber;
    String firstname;
    String lastname;
    String username;
    LocalDate dob;
    Set<String> roles;
}
