import { Outlet,Link } from 'react-router-dom';
import styled from 'styled-components';

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
        margin-top:1vh;
    }
`;

const Layout = () => {
   return (
    <div>
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
        <div style={{width:'40%'}}>
            <Link to ="/toyprojectList">
            <h2>토이프로젝트</h2>
            </Link>
        </div>
        <div className='login'>
            <a href="../login"><button>로그인</button></a>
        </div>
      </Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;