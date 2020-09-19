package com.example.demo.utils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by gf on 2020/9/8.
 */
public class PageModel<T> {

    private Integer pageSize=10;

    private Integer pageTotal=0;

    private Integer pageIndex=0;

    private Integer total=0;

    private List<T>   pageData=new ArrayList<T>();

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getPageTotal() {
        return pageTotal;
    }

    public void setPageTotal(Integer pageTotal) {
        this.pageTotal = pageTotal;
    }

    public Integer getPageIndex() {
        return pageIndex;
    }

    public void setPageIndex(Integer pageIndex) {
        this.pageIndex = pageIndex;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public List<T> getPageData() {
        return pageData;
    }

    public void setPageData(List<T> pageData) {
        this.pageData = pageData;
    }

    public PageModel() {
    }
}
