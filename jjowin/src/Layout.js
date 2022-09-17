import { Outlet,Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue,useSetRecoilState } from 'recoil';
import { LoginStatus,TotalId,TotalPw } from './atom';
import { useState } from 'react';

const TopBanner = styled.div`
    width:100%;
    text-align: center;
    color:white;
    padding:1.5vh 0 2vh 0;
    background: linear-gradient( to right, rgb(144,214,150),rgb(139,217,197), rgb(95,206,102) );
    h4{
        display: inline;
    }
    .topBanner{
        padding:0.3vh;
        cursor: pointer;
    }
`;
const Header = styled.div`
   display: flex;
   width:100%;
   height:9.5vh;
   justify-content: center;
   border-bottom: 1px solid rgb(242,242,242);
`;
const Head = styled.div`
    display: flex;
    width:62%;
    h4{
        font-weight: 600;
        font-size:0.7vw;
      
    }
`;
const Logo = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
    width:15%;
    &:hover{
        color:rgb(95,206,102);
    }
`;
// const Contest = styled(Logo)`
//     width:7%;
// `;
const Contest = styled(Logo)`
    width:7%;
    font-weight: 600;
    font-size:0.7vw;
    display: block;
    h4{margin:0;
        line-height:9.5vh;
        text-align: center;
    }
    ul {
        color:black;
        display:none;
        width:100px;
        padding:5px;
        list-style :none;
        position: relative;
        top:-30px;
        background-color: #e8f8e9;
        border-radius:10px;
        opacity: 0.5;
    }
    li {
        margin:5px 0 5px 0;
        &:hover{
            color:rgb(95,206,102);
        }
    }
    &:hover{
        ul {
            display:block;
            
        }
    }
`;
const ToyProject = styled(Logo)`
    width:10%;
`;
const Search = styled.div`
    width:47%;
    align-items: center;
    justify-content: left;
    display: flex;
    margin-left: 2vw;
    input{
        width:70%;
        height:50%;
        border-radius: 1vw;
        background-color: rgb(248,248,248);
        border:none;
        font-size:0.7vw;
        padding:0 0 0 2vh;
        ::placeholder{
            color:darkgray;
            margin-left: 3vw;
        }
    }
    img{
        width:1.5vw;
        position: absolute;
        right: 39.5vw;
        cursor:pointer;
    }
`;
const Footer = styled.div`
    padding:1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    background-color: rgb(245,245,245);
    
`;
const Foot = styled.div`
    width:63%;
`;
const FooterTop = styled.div`
    display: flex;
    
`;
const FooterMiddle = styled.div`
    padding-top:5vh;
    padding-bottom:5vh;
    border-bottom: 1px solid lightgray;
    h5{ 
        margin:0;
        padding-top:1vh;
        margin-left:2vw;
        font-weight: 600;
        font-size:0.7vw;
        color:darkgray;
    }
`;
const FooterBottom = styled.div`
    margin-top: 1vh;
    h5{ 
        margin:0;
        padding-top:1vh;
        margin-left:2vw;
        font-weight: 600;
        font-size:0.7vw;
        color:darkgray;
    }
`;
const FooterLogo = styled.div``;
const Alarm = styled(Logo)`
    width:7%;`;
const Mypage = styled(Logo)`
    width:7%;`;
const Login = styled(Logo)`
    width:7%;`;
const FooterContest = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    h4{
        display: inline;
        margin-left:2vw;
        font-weight: 600;
        font-size:0.7vw;
        color:darkgray;
    }
`;
const FooterToyProject = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    h4{
        display: inline;
        margin-left:2vw;
        font-weight: 600;
        font-size:0.7vw;
        color:darkgray;
    }
    `;

const Layout = () => {
  const loginStatus = useRecoilValue(LoginStatus);
  const [topBanner,setTopBanner] = useState(1);
  const setterLoginStatus=useSetRecoilState(LoginStatus);
  const setterFnId=useSetRecoilState(TotalId);
  const setterFnPw=useSetRecoilState(TotalPw);
  const navigate=useNavigate();
  
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
            <Head>
                <Logo onClick={()=>navigate("/")}><img style={{width:"100%",height:"100%",objectFit:"fill"}} src="https://user-images.githubusercontent.com/44117975/190598663-aeef7c10-ca05-4850-b20e-dcf66ccbeb88.PNG" alt="jjowinLogo"></img></Logo>
                {/* <Contest onClick={()=>navigate("/contestList")}><h4>공모전</h4></Contest> */}
                <Contest>
                    <h4 onClick={()=>navigate("/contestList")}>공모전</h4>
                    <ul>
                        <li onClick={()=>navigate("/contestList")}>공모전</li>
                        <li onClick={()=>navigate("/contestList/contestProjectList")}>공모전 프로젝트</li>
                    </ul>
                </Contest>
                <ToyProject onClick={()=>navigate("/toyprojectList")}><h4>토이프로젝트</h4></ToyProject>
                <Search><input placeholder="디자인공모전"/><img src="https://cdn-icons-png.flaticon.com/128/2801/2801881.png" alt="searchIcon"/></Search>
                <Alarm onClick={()=>navigate()}><h4>알림</h4></Alarm>
                <Mypage onClick={()=>navigate("/myPage/myPageInfoFix")}><h4>마이페이지</h4></Mypage>
                {!loginStatus?
                <Login onClick={()=>navigate("/login")}><h4>로그인</h4></Login>:
                <Login onClick={onClickLogOut}><h4>로그아웃</h4></Login>}
            </Head>
        </Header>
        <main>
        <Outlet />
        </main>
        <Footer>
            <Foot>
                <FooterTop>
                    <FooterLogo>
                        <img style={{width:"100%",height:"100%",objectFit:"fill"}} src="https://user-images.githubusercontent.com/44117975/190621512-54a2e02e-f0c3-4a6e-8243-6201ea2ee52d.PNG" alt="jjowinLogo"></img>
                    </FooterLogo>
                    <FooterContest><h4>공모전</h4><h4>토이프로젝트</h4></FooterContest>
                    <FooterToyProject></FooterToyProject>
                </FooterTop>
                <FooterMiddle>
                    <h5>사업자등록번호: 364-81-01692 | 대표자: 김강민</h5>
                    <h5>T. 02-2214-4600IF 070-7729-2006</h5>
                    <h5>E. allforyoung@maycan.co.kr</h5>
                </FooterMiddle>
                <FooterBottom>
                    <h5>®주식회사메이켄 All rights reserved</h5>
                </FooterBottom>
            </Foot>
        </Footer>
    </div>
  );
};

export default Layout;