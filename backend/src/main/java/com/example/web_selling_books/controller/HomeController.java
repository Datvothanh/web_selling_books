package com.example.web_selling_books.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/Home")
    public String index(){
        return "Wellcome to my home!!!";
    }
}
