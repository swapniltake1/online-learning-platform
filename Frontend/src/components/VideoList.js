import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/course/getall'); // Replace with your actual API endpoint
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
    <h1 id='header'>List of availble Courses for free</h1>
    <div className="video-container">
      {videos.map((video, index) => (
        <div className="video-item" key={index}>
          <h2>{video.coursename}</h2>
          <p>Course Author: {video.courseauthor}</p>
          <div>
            <iframe
              title={`Video ${index}`}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${extractVideoId(video.url)}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

// Extracts the video ID from the YouTube URL
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

export default VideoList;
