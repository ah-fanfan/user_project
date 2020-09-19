package com.example.demo.mapper;

import com.example.demo.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by gf on 2020/9/18.
 */
@Mapper
public interface UserMapper {
    int login(User user);

    Integer querySize();

    List<User> queryAll(Integer startIndex,Integer pageSize);

    boolean saveUser(User user);

    boolean updateUser(User user);

    boolean deleteUser(long id);


}
