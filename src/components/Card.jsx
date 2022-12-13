import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom"

const Container = styled.div`
 display: ${(props)=>props.type==="sm"&&"flex"}; 
 width:${(props)=>props.type!=="sm"&&"360px"};
 margin-bottom: ${(props)=>props.type==="sm"?"10px":"45px"}; 
 cursor:pointer;
 gap:10px;
`;

const Image = styled.img`
  width:100%;
  height:${(props)=>props.type==="sm"?"120px":"202px"};
  backgroud-color:#999;
  flex:1;
`;

const Details = styled.div`
display:flex;
margin-top:${(props)=>props.type==="sm"?"0px":"16px"};
gap:12px;
flex:1;
`;

const ChannelImage = styled.img`
  width:36px;
  height:36px;
  border-radius:50%;
  background-color:#999;
  display: ${(props)=>props.type==="sm"&&"none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
font-size:16px;
font-weight:500;
color:${({theme})=>theme.text}
`;

const ChannelName = styled.h2`
font-size:14px;
color:${({theme})=>theme.textSoft};
margin:9px 0;
`;

const Info = styled.div`
font-sie:14px;
color:${({theme})=>theme.textSoft}
`;


const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA"></Image>  
        <Details type={type}>
          <ChannelImage type={type} src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"/>
          <Texts>
            <Title>TestVideo</Title> 
            <ChannelName>FreelanceTube</ChannelName> 
            <Info> 1000 views Uploaded 1h ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>

  )
}

export default Card