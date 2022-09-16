import { Outlet,Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue,useSetRecoilState } from 'recoil';
import { LoginStatus,TotalId,TotalPw } from './atom';
import { useState } from 'react';

const TopBanner = styled.div`
    width:100%;
    text-align: center;
    color:white;
    padding:1.5vh 0 2.5vh 0;
    background: linear-gradient( to right, rgb(144,214,150),rgb(139,217,197), rgb(95,206,102) );
    h4{
        display: inline;
    }
    .topBanner{
        padding:0.3vh;
    }
`;
const Header = styled.header`
    background: white;
    padding:16;
    font-size: 48;
    font-weight:bold;
    margin-top:-10px;
    margin-left:-10px;
    margin-right:-10px;
    display: flex;
    justify-content: center;
    border-bottom: 3px solid black;
   
    h2{
        display: inline;
        padding: 20px;
        &:hover{
            background-color: gray;
        }
        &:visited{
            color:black;
        }
    }
    div{
        margin-top: 3vh;
    }
    button{
        background-color:white;
        margin-top:1vh;
        width:5vw;
        height:4vh;
        border-radius:10px;
        margin-left:auto;
        font-size:20px;
        &:hover{
            background-color: gray;
        }
    }
    a{
        text-decoration:none;
        width:25%;
        margin-bottom: 1vh;
        margin-top:2.5vh;
        color:black;
    }
    div.login{
        justify-content: right;
        text-align: right;
        margin-top:2vh;
    }
`;

const Layout = () => {
  const loginStatus = useRecoilValue(LoginStatus);
  const [topBanner,setTopBanner] = useState(1);
  const setterLoginStatus=useSetRecoilState(LoginStatus);
  const setterFnId=useSetRecoilState(TotalId);
  const setterFnPw=useSetRecoilState(TotalPw);
  const onClickLogOut=()=>{
    setterLoginStatus(0);
    setterFnId("");
    setterFnPw("");
  }
   return (
    <div>
      {topBanner?
      <TopBanner><h4>쪼인과 조인하고 공모전 상금 싹쓸이 하자!</h4><h4 className="topBanner" onClick={()=>setTopBanner(0)}> x</h4></TopBanner>:""}
      <Header>
        <div style={{width:"20%",marginTop:0}}>
           <Link to="/">
           <h1>JJowin</h1>
           </Link> 
        </div>
        <div style={{width:'20%'}}>
            <Link to ="/contestList">
            <h2>공모전</h2>
            </Link>
        </div>
        <div style={{width:'30%'}}>
            <Link to ="/toyprojectList">
            <h2>토이프로젝트</h2>
            </Link>
        </div>
        <div style={{width:'30%'}}>
            <Link to ="/search">
            <h2>검색</h2>
            </Link>
        </div>
        <div className='mypage'>
            <a href="../myPage/myPageInfoFix"><h2>㉾</h2></a>
        </div>
        <div className='login'>
            {!loginStatus?<a href="/login"><button>로그인</button></a>:
            <a href="/login"><button onClick={onClickLogOut}>로그아웃</button></a>}
        </div>
      </Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;