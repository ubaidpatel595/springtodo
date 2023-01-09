package com.Todo.Repo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table(name="users")
public class User {
	@Id
	private String mobile;
	
	private String fullname;
	private String password;
	private String todos;
	
	@Transient
	private String todoSync;
	
	@Transient
	private String type;
	
	
	
	public String getTodoSync() {
		return todoSync;
	}
	public void setTodoSync(String todoSync) {
		this.todoSync = todoSync;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getTodos() {
		return todos;
	}
	public void setTodos(String todos) {
		this.todos = todos;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	

}
