package com.Todo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Todo.Repo.User;
import com.Todo.Repo.UserLogin;

@Service
public class Authenticate {
	@Autowired
	public UserLogin login ;
		public String[] Auth(User user) {
			String[] result = login.userlogin(user);
			return result;
		}
}
