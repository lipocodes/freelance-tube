import React, {useState,useEffect} from 'react';
import styled, { ThemeProvider } from "styled-components";
//import {Link} from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:calc(100vh - 56px);
color:${({theme})=>theme.text};
`;

const Wrapper = styled.div`
 display:flex;
 align-items:center;
 flex-direction:column;
 background-color: ${({theme})=>theme.bgLighter};
 border: 1px solid ${({theme})=>theme.soft};
 padding:20px 50px;
 gap:10px;
`;

const Title = styled.h1`font-size:24px;`;
const SubTitle = styled.h2`font-size:20px; font-weight:300;`;
const Input = styled.input`
border:1px solid ${({theme})=>theme.soft}
border-radius:3px;
padding:10px;
background-color:transparent;
width:100%;
`;
const Button = styled.button`
border-radius:3px;
border:none;
padding:10px 20px;
font-weight:500;
cursor:pointer;
background-color:${({theme})=>theme.soft};
color: ${({theme})=>theme.textSoft};
`;

const More = styled.div`
display:flex;
font-size:12px;
color: ${({theme})=>theme.textSoft};
margin-top:10px;
`;

const Links = styled.div`
margin-left:50px;
`;

const Link = styled.span`
margin-left:30px;
`;

const SignIn = () => {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async(e)=>{
 e.preventDefault();
 try{
   const res = await axios.post("/auth/signin",{
    name:name,
    password:password
   });
   console.log("aaaaaaaaaaaa=" + res.data.email);
 }catch(err){}
}

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>To Continue to Freelancetube</SubTitle>
        
        <Input placeholder="Username" onChange={e=>setName(e.target.value)}/>
        <Input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
        <Button onClick={handleLogin}>Sign In</Button>
        <Title>Or</Title>
        <Input placeholder="Username" onChange={e=>setName(e.target.value)}/>
        <Input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
        <Input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
      English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  )
}

export default SignIn