package com.example.demo.entity;

import java.util.Date;

/**
 * Created by gf on 2020/9/18.
 */
public class User {

    private long id;

    private String mobile;

    private String password;

    private String sex;

    private Date birthdate;

    private String address;

    private String email;

    private String state;

    private Date create_time;

    private Date update_time;


    public User() {
    }

    public User(long id, String mobile, String password, String sex, Date birthdate, String address, String email, String state, Date create_time, Date update_time) {
        this.id = id;
        this.mobile = mobile;
        this.password = password;
        this.sex = sex;
        this.birthdate = birthdate;
        this.address = address;
        this.email = email;
        this.state = state;
        this.create_time = create_time;
        this.update_time = update_time;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Date getCreate_time() {
        return create_time;
    }

    public void setCreate_time(Date create_time) {
        this.create_time = create_time;
    }

    public Date getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(Date update_time) {
        this.update_time = update_time;
    }
}
