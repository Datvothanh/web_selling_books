package com.example.web_selling_books.service.user;


import com.example.web_selling_books.dto.request.UserCreationRequest;
import com.example.web_selling_books.dto.request.UserUpdateRequest;
import com.example.web_selling_books.dto.response.UserResponse;
import com.example.web_selling_books.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    UserResponse createRequest(UserCreationRequest request);
    List<User> getUsers();
    User getUser(String userId);
    UserResponse getMyInfo();
    User updateUser(String userId, UserUpdateRequest request);
    String deleteUser(String userId);

}
