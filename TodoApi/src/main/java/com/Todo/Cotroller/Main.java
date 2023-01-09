package com.Todo.Cotroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.HttpServletBean;

import com.Todo.Repo.User;
import com.Todo.Services.Authenticate;
import com.Todo.Services.VaidateUser;
import org.springframework.web.servlet.DispatcherServlet;
@Controller
public class Main {
	
	@Autowired
	VaidateUser validate;
	
	@Autowired
	Authenticate Authuser;
	
	@RequestMapping("")
	public String name() {
		//System.out.println("Working");
		return "index";
	}
	
	@RequestMapping("/images/{name}")
	public String imgredir(@PathVariable  String name) {
		return"redirect:/static/images/"+name;
	}
	
	@GetMapping("/signup")
	private String signup() {
		return "index";
	}
	
	@CrossOrigin
	@PostMapping("/result")
	private String signup_form(@ModelAttribute User user,Model m) {
		String typ = "signup";
		if(user.getType().equals(typ)) {
			System.out.println("In Signup"+user.getTodos());
			String[] result = validate.validate(user);
			m.addAttribute("result", result);
		}else {
		//System.out.println(user.getTodoSync());
		String[] result = Authuser.Auth(user);
		m.addAttribute("result", result);
		}
		return "result";
	}
	
	@RequestMapping("/result")
	public String result() {
		//System.out.println("Working");
		return "index";
	}

}