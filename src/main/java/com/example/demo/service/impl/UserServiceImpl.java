package com.example.demo.service.impl;

import com.example.demo.entity.User;
import com.example.demo.mapper.UserMapper;
import com.example.demo.service.UserService;
import com.example.demo.utils.PageModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;


/**
 * Created by gf on 2020/9/18.
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public int login(User user) {
        return userMapper.login(user);
    }

    @Override
    public PageModel<User> queryAll(Integer startIndex,Integer pageSize) {
        PageModel<User> pageData=new PageModel<>();
        List<User> users= userMapper.queryAll(startIndex,pageSize);
        pageData.setPageData(users);
        pageData.setTotal(userMapper.querySize());
        int pageNum=pageData.getTotal()%pageSize==0? pageData.getTotal()/pageSize:(pageData.getTotal()/pageSize+1);
        pageData.setPageTotal(pageNum);
        return pageData;
    }

    @Override
    public boolean saveUser(User user) {
        return userMapper.saveUser(user);
    }

    @Override
    public boolean updateUser(User user) {
        return userMapper.updateUser(user);
    }

    @Override
    public boolean deleteUser(long id) {
        return userMapper.deleteUser(id);
    }
}
