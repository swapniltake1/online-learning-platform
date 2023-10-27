package com.swapnil.reactbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swapnil.reactbackend.dao.CouseDao;
import com.swapnil.reactbackend.pojo.CourseDetails;

@Service
public class CourseService {

	@Autowired
	private CouseDao courseDao;
	
	public CourseDetails addCourse(CourseDetails courseDetails) {
		
		CourseDetails createdCourse = courseDao.save(courseDetails);
		
		return createdCourse;
	}
	
	public List<CourseDetails> getAllCourseDetails() {
		
		List<CourseDetails> findAll = courseDao.findAll();
		
		return findAll;
	}
}
