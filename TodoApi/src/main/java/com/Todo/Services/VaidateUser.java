package com.Todo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.Todo.Repo.Insert;
import com.Todo.Repo.User;

@Service
public class VaidateUser {
	@Autowired
	Insert add;
	
	public String[] validate(User user) {
		//System.out.println("Hello Now We Are in serve");

		//This is a service Layer We Have To perform Some Bussiness Logic Here
		String[] result = add.addUser(user);
		//result[2] = "todos here";
		return result;
	}

}
