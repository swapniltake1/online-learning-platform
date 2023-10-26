package com.swapnil.reactbackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.swapnil.reactbackend.pojo.User;


@Repository
public interface UserDao extends JpaRepository<User, Integer> {

	// get user details by username
	User findByUserid(String userid);
}
