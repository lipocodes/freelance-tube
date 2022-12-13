import React from 'react'
import styled from "styled-components";
const Container = styled.div`
 display:flex;
 gap:10px;
 margin:30px 0;
`;

const Avatar = styled.img`
 width:50px;
 height:50px;
 border-radius:50%;
`;

const Details = styled.div`
 display:flex;
 flex-direction:column;
 gap:10px;
`;

const Name = styled.span`
font-name:13px;
font-weight:500;
color:${({theme})=>theme.text};
`;

const Date = styled.span`
font-size:12px;
font-weight:400;
color: ${({theme})=>theme.textSoft};
margin-left:5px;
`;

const Text = styled.div`font-size:14px;color:${({theme})=>theme.text};`;


const Comment = () => {
  return (
    <Container>
      <Avatar src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"/>
      <Details>
        <Name>Lior Polak <Date>1 day ago</Date> </Name>
        
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall</Text>
      </Details>
    
    </Container>
  )
}

export default Comment