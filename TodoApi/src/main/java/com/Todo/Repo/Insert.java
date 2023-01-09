package com.Todo.Repo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.stereotype.Repository;

@Repository
public class Insert {
	public String[] addUser(User user){
		try{Configuration config = new Configuration();
		config.configure("com/Todo/Repo/cfg.xml");
		SessionFactory factory = config.buildSessionFactory();
		Session session  = factory.openSession();
		Transaction tx = session.beginTransaction();
		session.persist(user);
		
		tx.commit();
		session.close();
		factory.close();
		//System.out.println("Hello We Are Now In Repo "+tx.getStatus());
		String[] result = {"success","Registration Successfull",user.getTodos()};
		return result;
		
		}
		catch( jakarta.persistence.PersistenceException  e) {
			if(e.getCause() instanceof org.hibernate.exception.ConstraintViolationException) {
				String[] result = {"failed","User Already Exist",user.getTodos()};
				return result;
			}else {
				String[] result = {"failed","Something Went Wrong",user.getTodos()};
				return result;
			}
			
		}
		
	}
//	public static void main(String[] args) {
//		System.out.println("Hello");
//		User user = new User();
//		user.setFullname("Test USer");
//		user.setMobile("9148749147");
//		user.setPassword("Ubaid");
//		addUser(user);
//	}
}
