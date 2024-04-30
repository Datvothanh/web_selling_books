package com.example.web_selling_books.service.Authentication;

import com.example.web_selling_books.dto.request.AuthenticationRequest;
import com.example.web_selling_books.dto.request.IntrospectRequest;
import com.example.web_selling_books.dto.request.LogoutRequest;
import com.example.web_selling_books.dto.response.AuthenticationResponse;
import com.example.web_selling_books.dto.response.IntrospectResponse;
import com.nimbusds.jose.JOSEException;
import org.springframework.stereotype.Service;

import java.text.ParseException;

@Service
public interface AuthenticationService {

    AuthenticationResponse authenticate(AuthenticationRequest request);
    IntrospectResponse introspect(IntrospectRequest request) throws JOSEException, ParseException;
    void logout(LogoutRequest request) throws JOSEException, ParseException;
}
