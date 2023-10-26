package com.swapnil.reactbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swapnil.reactbackend.dao.UserDao;
import com.swapnil.reactbackend.pojo.User;

@Service
public class ValidateLoginService {

	@Autowired
	private UserDao userDao;
	
	public User validateLogin(User user) {
		User findByUserid = userDao.findByUserid(user.getUserid());
		return findByUserid;
		
	}
}
