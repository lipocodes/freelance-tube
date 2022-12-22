import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({type}) => {
  const [videos, setVideos] = useState([]);
  let rr;

  useEffect(() => {
    const fetchVideos = async () => {
      rr =  await axios.get("https://freelancetube-api.onrender.com/api/users/find/lior751");
      
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <>
    {rr}
    <Container>
     
      {videos.map((video) => (
        <Card key={video._id} video={video}/>
   
      ))}
    </Container>
    </>
  );
};

export default Home;
