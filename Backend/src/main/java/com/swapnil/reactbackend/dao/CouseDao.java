package com.swapnil.reactbackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.swapnil.reactbackend.pojo.CourseDetails;

@Repository
public interface CouseDao extends JpaRepository<CourseDetails, Integer> {

}
