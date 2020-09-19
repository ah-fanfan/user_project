package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.utils.PageModel;

import java.util.List;

/**
 * Created by gf on 2020/9/18.
 */
public interface UserService {

    int login(User user);

    PageModel<User> queryAll(Integer startIndex,Integer pageSize);

    boolean saveUser(User user);

    boolean updateUser(User user);

    boolean deleteUser(long id);

}
