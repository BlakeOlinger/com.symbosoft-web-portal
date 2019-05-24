package com.symbosoft.webportal.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebPortalController {

    @Value("${spring.application.name}")
    String appName;

    @GetMapping("/")
    public String homePage() {
        return "index";
    }
}
