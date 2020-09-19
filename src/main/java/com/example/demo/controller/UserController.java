package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import com.example.demo.utils.PageModel;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * Created by gf on 2020/9/18.
 */

@RequestMapping("/user")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/queryAll")
    public void queryAll(@RequestParam Integer startIndex,
                         @RequestParam Integer pageSize,
                         HttpServletResponse response) {
        PageModel<User> data = userService.queryAll(startIndex, pageSize);
        try {
            response.getWriter().write(JSONObject.fromObject(data).toString());
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    @RequestMapping("/saveUser")
    public void saveUser(User user, HttpServletResponse response) {
        boolean flag = userService.saveUser(user);
        try {
            if (flag) {
                response.getWriter().write("{ \"success\":true,\"id\":" + user.getId() + ",\"message\":\"保存成功\"}");
            } else {
                response.getWriter().write("{ \"success\":false,\"id\"null,\"message\"保存失败\"}");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    @RequestMapping("/deleteUser")
    public void deleteUser(long id, HttpServletResponse response) {
        boolean flag = userService.deleteUser(id);
        try {
            if (flag) {
                response.getWriter().write("{ \"success\":true,\"id\":" + id + ",\"message\":\"删除成功\"}");
            } else {
                response.getWriter().write("{ \"success\":false,\"id\"null,\"message\"删除失败\"}");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping("/updateUser")
    public void updateUser(User user, HttpServletResponse response) {
        boolean flag = userService.updateUser(user);
        try {
            if (flag) {
                response.getWriter().write("{ \"success\":true,\"id\":" + user.getId() + ",\"message\":\"修改成功\"}");
            } else {
                response.getWriter().write("{ \"success\":false,\"id\"null,\"message\"修改失败\"}");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
