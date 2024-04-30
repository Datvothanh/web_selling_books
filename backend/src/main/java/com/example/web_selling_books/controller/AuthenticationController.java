package com.example.web_selling_books.controller;


import com.example.web_selling_books.dto.request.AuthenticationRequest;
import com.example.web_selling_books.dto.request.IntrospectRequest;
import com.example.web_selling_books.dto.request.LogoutRequest;
import com.example.web_selling_books.dto.response.ApiResponse;
import com.example.web_selling_books.dto.response.AuthenticationResponse;
import com.example.web_selling_books.dto.response.IntrospectResponse;
import com.example.web_selling_books.service.Authentication.AuthenticationService;
import com.nimbusds.jose.JOSEException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/log-in")
    ApiResponse<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        AuthenticationResponse result = authenticationService.authenticate(request);
        ApiResponse<AuthenticationResponse> apiResponse = new ApiResponse<>();
        apiResponse.setResult(AuthenticationResponse.builder()
                .token(result.getToken())
                .authenticated(true)
                .id(result.getId())
                .build());
        return apiResponse;
    }


    @PostMapping("/introspect")
    ApiResponse<IntrospectResponse> authenticate(@RequestBody IntrospectRequest request) throws ParseException, JOSEException {
        IntrospectResponse result = authenticationService.introspect(request);
        ApiResponse<IntrospectResponse> apiResponse = new ApiResponse<>();
        apiResponse.setResult(result);
        return apiResponse;
    }

    @PostMapping("/log-out")
    ApiResponse<Void> logout(@RequestBody LogoutRequest request) throws ParseException, JOSEException {
        ApiResponse<Void> apiResponse = new ApiResponse<>();
        authenticationService.logout(request);
        return apiResponse;
    }

}
