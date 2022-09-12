import { useState } from "react";
import {Link} from "react-router-dom"
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import profile from '../../images/profile.png'

const Container = styled.div`
    background-color: beige;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width:50%;
    height:100vh;
    flex-direction: column;
`
const Container2 = styled.div`
    border: 1px solid black;
    background-color: white;
    width:60%;
    height: 80%;
    a{
        text-decoration: none;
        color:black; 
    }
`
const Span = styled.span`
    display: flex;
    height:5vh;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid gray;
    h3{
        margin:0;
    }
   &:hover{
        background-color: gray;
    }
`;

function MyPage(){
    let data = {name : '이름', role : '직무'}
    return(
        <div style={{display:"flex"}}>
           <Container>
            <div>
            <img src={profile} alt='profile' style={{width:"30%"}}/>
            <h2>{data.name}</h2>
            <h2>{data.role}</h2>
            </div>
             <Container2>
                <Link to="./myPageInfoFix"><Span><h3>회원정보 수정</h3></Span></Link>
                <Link to="./myPageSelect"><Span><h3>찜</h3></Span></Link>
                <Link to="./myPageJoinProject"><Span><h3>참여한 프로젝트</h3></Span></Link>
                <Link to="./myPageComment"><Span><h3>댓글</h3></Span></Link>
                <Link to="./myPageSetting"><Span><h3>설정</h3></Span></Link>
             </Container2>
           </Container>
           <Outlet/>
        </div>
    )
}
export default MyPage;