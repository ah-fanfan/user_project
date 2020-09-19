package com.example.demo;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

/**
 * Created by gf on 2020/9/18.
 */


@SpringBootTest(classes = UserProjectApplication.class)
@RunWith(SpringRunner.class)
public class UserTest {

    @Autowired
    UserService userService;

//    @Test
//    public void userTest(){
//        List<User> userList =userService.queryAll();
//        System.out.println(userList.size());
//    }


}
