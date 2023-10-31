import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

const CourseCrud = () => {
  const [courseName, setCourseName] = useState('');
  const [courseAuthor, setCourseAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const addCourse = async () => {
    try {
      await axios.post('http://localhost:8080/course/addcourse', {
        coursename: courseName,
        courseauthor: courseAuthor,
        url: url,
      });
      setCourseName('');
      setCourseAuthor('');
      setUrl('');
      setSuccessMessage('Course added to the database');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Courses</h2>
      {successMessage && (
        <div style={{ color: 'green', marginBottom: '10px' }}>{successMessage}</div>
      )}
      <Form onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <Label for="courseName">Course Name</Label>
          <Input
            type="text"
            name="courseName"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
          <Label for="courseAuthor">Course Author</Label>
          <Input
            type="text"
            name="courseAuthor"
            id="courseAuthor"
            value={courseAuthor}
            onChange={(e) => setCourseAuthor(e.target.value)}
          />
          <Label for="url">URL</Label>
          <Input
            type="text"
            name="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </FormGroup>
        <Button color="primary" onClick={addCourse}>
          Add Course
        </Button>
      </Form>
    </Container>
  );
};

export default CourseCrud;
