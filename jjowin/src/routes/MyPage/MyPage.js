import { useState } from "react";
import {Link} from "react-router-dom"
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import profile from '../../images/profile.png'

const Container = styled.div`
   display:flex;
   width:100%;
   justify-content: center;
`
const Container2 = styled.div`
    width:13%;
    height: 80%;
    margin-top:4vh;
    a{
        text-decoration: none;
        color:black; 
    }
`
const Span = styled.span`
    display: flex;
    width: 100%;
    height:6vh;
    align-items: center;
    padding-left:2vw;
    h3{
        margin:0;
        font-weight: 600;
        font-size: 0.8vw;
    }
   &:hover{
        background-color: rgb(242,242,242);
    }
`;

function MyPage(){
    let data = {name : '이름', role : '직무'}
    const [mypage,setMypage]=useState(0);
    return(
        <div style={{display:"flex",justifyContent:"center"}}>
           <Container>
             <Container2>
                {mypage===0?
                <Link to="./myPageInfoFix"><Span style={{backgroundColor:"rgb(242,242,242)"}}><h3>회원정보 수정</h3></Span></Link>:
                <Link to="./myPageInfoFix"><Span onClick={()=>setMypage(0)}><h3>회원정보 수정</h3></Span></Link>}
                {mypage===1?
                <Link to="./myPageSelect"><Span style={{backgroundColor:"rgb(242,242,242)"}}><h3>찜한 목록 보기</h3></Span></Link>:
                <Link to="./myPageSelect"><Span onClick={()=>setMypage(1)}><h3>찜한 목록 보기</h3></Span></Link>}
                {mypage===2?
                <Link to="./myPageJoinProject"><Span style={{backgroundColor:"rgb(242,242,242)"}}><h3>참여한 프로젝트</h3></Span></Link>:
                <Link to="./myPageJoinProject"><Span onClick={()=>setMypage(2)}><h3>참여한 프로젝트</h3></Span></Link>}
                {mypage===3?
                <Link to="./myPageComment"><Span style={{backgroundColor:"rgb(242,242,242)"}}><h3>댓글</h3></Span></Link>:
                <Link to="./myPageComment"><Span onClick={()=>setMypage(3)}><h3>댓글</h3></Span></Link>}
                {mypage===4?
                <Link to="./myPageSetting"><Span style={{backgroundColor:"rgb(242,242,242)"}}><h3>설정</h3></Span></Link>:
                <Link to="./myPageSetting"><Span onClick={()=>setMypage(4)}><h3>설정</h3></Span></Link>}
             </Container2>
             <Outlet/>
           </Container>
        </div>
    )
}
export default MyPage;