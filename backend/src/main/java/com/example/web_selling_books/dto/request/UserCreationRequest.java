package com.example.web_selling_books.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserCreationRequest {
    @Email(message = "Email is not valid", regexp = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$")
    @NotEmpty(message = "Email cannot be empty")
    String email;
    @Size(min = 3, message = "Username must at least 3 characters")
    @NotEmpty(message = "Username cannot be empty")
    String username;
    @Size(min = 9, message = "Phone number is incorrect")
    @NotEmpty(message = "Phone number cannot be empty")
    String phoneNumber;
    @Size(min = 8, message = "Password must at least 8 characters")
    @NotEmpty(message = "Password cannot be empty")
    String password;
    LocalDate dob;
    @Size(min = 3, message = "First name must at least 3 characters")
    @NotEmpty(message = "First name cannot be empty")
    String firstname;
    @Size(min = 3, message = "Last name must at least 3 characters")
    @NotEmpty(message = "Last name cannot be empty")
    String lastname;

}
