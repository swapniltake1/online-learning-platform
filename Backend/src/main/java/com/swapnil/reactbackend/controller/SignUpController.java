package com.swapnil.reactbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.swapnil.reactbackend.pojo.User;
import com.swapnil.reactbackend.service.CreateUserService;
import com.swapnil.reactbackend.service.ValidateLoginService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/demo")
public class SignUpController {

	@Autowired
	private CreateUserService createUserService;
	
	@Autowired
	private ValidateLoginService validateLoginService;
	
	@GetMapping("/test")
	public String test() {
		return "Hello world";
	}
	
	@PostMapping("/signUp")
	public ResponseEntity<String> saveUser(@RequestBody User user) {
		          
		      User savedUser = createUserService.saveUser(user);
		      System.out.println("Created New User :: "+ savedUser);
		
		 if (savedUser!= null) {
	            // Replace this condition with your actual validation logic
			   System.out.println("User Created :: "+ savedUser);
	            return new ResponseEntity<>("Signup successful", HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>("Signup failed", HttpStatus.UNAUTHORIZED);
	        }
		
	}
	
	@PostMapping("/logIn")
	public ResponseEntity<String> login(@RequestBody User user) {
		
		User validateLogin = validateLoginService.validateLogin(user);
		
		if(validateLogin !=null && validateLogin.getPassword().equals(user.getPassword())) {
			System.out.println("Login Successfull ::"+ user.getUserid());
			return new ResponseEntity<String>("Login Successfull", HttpStatus.OK);
		}
		else {
			return new ResponseEntity<String>("Loginn Fail,", HttpStatus.UNAUTHORIZED);
		}
		
	}
}
