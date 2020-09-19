package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
/**
 * Created by gf on 2020/9/19.
 */
@RestController
public class LoginController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/login")
    public ModelAndView login(
            @RequestParam String mobile,
            @RequestParam String password
    ) {
        ModelAndView modelAndView=new ModelAndView();
        User user=new User();
        user.setMobile(mobile);
        user.setPassword(password);
        if (userService.login(user)>0)
            modelAndView.setViewName("index.html");
        else
        modelAndView.setViewName("login.html");
        return modelAndView;
    }

    @RequestMapping(value = "/tologin")
    public ModelAndView toLogin(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("/login.html");
        return  modelAndView;
    }

}
