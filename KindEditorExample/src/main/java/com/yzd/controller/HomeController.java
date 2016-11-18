package com.yzd.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Administrator on 2016/11/16.
 */
@Controller
@RequestMapping("/home/")
public class HomeController {
    @RequestMapping("t1")
    public String T1()
    {
        return "home/t1";
    }
    @RequestMapping("t2")
    public String T2()
    {
        return "home/t2";
    }
    @RequestMapping("t3")
    public String T3()
    {
        return "home/t3";
    }
    @RequestMapping("t4")
    public String T4()
    {
        return "home/t4";
    }
}
