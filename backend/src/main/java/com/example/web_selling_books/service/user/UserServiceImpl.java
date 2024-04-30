package com.example.web_selling_books.service.user;


import com.example.web_selling_books.dto.request.UserCreationRequest;
import com.example.web_selling_books.dto.request.UserUpdateRequest;
import com.example.web_selling_books.dto.response.UserResponse;
import com.example.web_selling_books.entity.User;
import com.example.web_selling_books.enums.RoleUser;
import com.example.web_selling_books.exception.AppException;
import com.example.web_selling_books.enums.ErrorCode;
import com.example.web_selling_books.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserResponse createRequest(UserCreationRequest request){
        User user = new User();
        HashSet<String> roles = new HashSet<>();
        if(userRepository.existsByUsername(request.getUsername()))
            throw new AppException(ErrorCode.USERNAME_EXISTED);

        if(userRepository.existsByEmail(request.getEmail()))
            throw new AppException(ErrorCode.EMAIL_EXISTED);

        roles.add(RoleUser.USER.name());
        user.setRoles(roles);
        user.setPhoneNumber(request.getPhoneNumber());
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setFirstname(request.getFirstname());
        user.setLastname(request.getLastname());
        user.setDob(request.getDob());
        user.setEmail(request.getEmail());
        userRepository.save(user);

        return UserResponse
                .builder()
                .phoneNumber(user.getPhoneNumber())
                .firstname(user.getFirstname())
                .lastname(user.getLastname())
                .dob(user.getDob())
                .email(user.getEmail())
                .id(user.getId())
                .username(user.getUsername())
                .roles(user.getRoles())
                .build();
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public UserResponse getMyInfo(){
        var context = SecurityContextHolder.getContext();
        String name = context.getAuthentication().getName();
        User user = userRepository.findByUsername(name).orElseThrow(
                () -> new AppException(ErrorCode.USER_NOT_EXISTED)
        );
        return UserResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .phoneNumber(user.getPhoneNumber())
                .username(user.getUsername())
                .lastname(user.getLastname())
                .firstname(user.getFirstname())
                .dob(user.getDob())
                .roles(user.getRoles())
                .build();
    }

    @Override
    @PostAuthorize("returnObject.username == authentication.name || hasRole('ADMIN')")
    public User getUser(String userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }



    @Override
    public User updateUser(String userId, UserUpdateRequest request) {
        User user = getUser(userId);
        PasswordEncoder passwordEncoder =new BCryptPasswordEncoder(10);
        user.setPhoneNumber(request.getPhoneNumber());
        user.setFirstname(request.getFirstname());
        user.setLastname(request.getLastname());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setDob(request.getDob());
        return userRepository.save(user);
    }

    @Override
    public String deleteUser(String userId) {
        userRepository.deleteById(userId);
        return "User has been deleted";
    }
}
