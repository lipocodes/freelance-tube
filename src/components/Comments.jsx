import React from 'react';
import styled from "styled-components";
import Comment from './Comment';

const Container = styled.div``;
const NewComment = styled.div`
display:flex;
gap:10px;
align-items:center;
`;
const Avatar = styled.img`
width:50px;
height:50px;
border-radius:50%;
`;
const Input = styled.input`
border:none;
border-bottom: 1px solid ${({theme})=>theme.textSoft};
background-color:transparent;
outline:none;
padding:5px;
width:100%;
`;


const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"></Avatar>
        <Input placeholder='Add a comment..'></Input>
      </NewComment>
      <Comment/>
      <Comment/>     
      <Comment/>     
      <Comment/>     
      <Comment/>     
      <Comment/>     
      <Comment/>     
      <Comment/>     
      <Comment/>     
      <Comment/>          
    </Container>
  )
}

export default Comments