import React, { useState, useEffect }  from "react";
import axios from 'axios';
import {
    Card, CardBody,CardTitle, CardSubtitle, CardText, CardFooter, Button, Container,} from 'reactstrap';


    const Course =()=>{

        const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/course/getall'); 
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);
  return (
    <div style={{backgroundColor: "silver"}}>
      <h1 className="text-danger text-center" >
        List of available Courses for free
      </h1>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {videos.map((video, index) => (
          <Card key={index} className="m-3" style={{ width: '400px' }}>
            <CardBody className="p-3">
              <CardSubtitle tag="h5" className="font-weight-bold">{video.coursename}</CardSubtitle>
              <CardText>Course Author: {video.courseauthor}</CardText>
              <Container className="embed-responsive embed-responsive-16by9">
                <div className="embed-responsive-item">
                  <iframe
                    title={`Video ${index}`}
                    className="w-100"
                    src={`https://www.youtube.com/embed/${extractVideoId(video.url)}`}
                    allowFullScreen
                  ></iframe>
                </div>
              </Container>
              <Container className="d-flex justify-content-center">
                <Button color="danger" href={video.url} target="_blank" rel="noopener noreferrer">
                  View On Youtube
                </Button>
              </Container>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

const extractVideoId = (url) => {
    const videoId = url.split('v=')[1];
    if (videoId) {
      const ampersandPosition = videoId.indexOf('&');
      if (ampersandPosition !== -1) {
        return videoId.substring(0, ampersandPosition);
      }
      return videoId;
    }
    return null;
  };
  

export default Course;