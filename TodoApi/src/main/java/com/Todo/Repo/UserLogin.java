package com.Todo.Repo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.stereotype.Repository;

@Repository
public class UserLogin {
	
		public String[] userlogin(User user) {
			
			//Get Form Data
			String pass = user.getPassword();
			String mobi = user.getMobile();
			
			Configuration config = new Configuration();
			config.configure("com/Todo/Repo/cfg.xml");
			SessionFactory factory = config.buildSessionFactory();
			Session session = factory.openSession();
			Transaction tx = session.beginTransaction();
			User data  = session.get(User.class,mobi);
			
			if(data != null) {
				if(data.getPassword().equals(pass)) {
					
					//Merging or Updating  Todos
					String ini_off_todos = user.getTodos();
					if(user.getTodoSync().equals("true")) {
						System.out.println("We Have to overrite");
						data.setTodos(ini_off_todos);
						String[] response = {"success","Login Successfull",ini_off_todos};
						tx.commit();
						return response;
					}else {
						System.out.println("We Have to Merge");
						String on_todos = data.getTodos();
						if(on_todos.length()<1) {
							data.setTodos(ini_off_todos);
							String[] response = {"success","Login Successfull",ini_off_todos};
							tx.commit();
							return response;
						}else {
							if(ini_off_todos.length()>3) {
								System.out.println(ini_off_todos.length());
								String off_todos = ini_off_todos.substring(0, ini_off_todos.length()-1)+",";
								String op_on_todo = data.getTodos().substring(1);
								String merge_todos = off_todos+op_on_todo;
								data.setTodos(merge_todos);
								String[] response = {"success","Login Successfull",merge_todos};
								tx.commit();
								return response;
							}else {
								String[] response = {"success","Login Successfull",data.getTodos()};
								return response;
							}
							
						}
						
					}					
					//System.out.println("User Authenticated ");
				}else{
					String[] response = {"failed","Incorrect Password",user.getTodos()};
					return response;
					//System.out.println("Incorrect Password");
				}
			}else {
				String[] response = {"failed","User Not Found",user.getTodos()};
				return response;
				//System.out.println("User Not Found");
			}
			
		}
}
