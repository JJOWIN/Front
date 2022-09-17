import { useState } from "react";
import {Link} from "react-router-dom"
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { isLoginedAtom, TotalId, TotalPw, LoginStatus ,University} from "../../atom.js";
import { useSetRecoilState, useRecoilValue } from "recoil";
const Container = styled.div`
    width:50%;
    height:100vh;
    display: flex;
    justify-content: center;
`;
const Container2 = styled.div`
    width:50vw;
    margin-left:3vw;
    height:70%;
    margin-bottom: 10vh;
    margin-top: 2vh;
`;
const EmailAgree = styled.div`
    display: flex;
    margin-top: 5vh;
    margin-left:3vw;
`;
const ProofSelf = styled(EmailAgree)``;
const Submit = styled.div`
`;

const Profile =styled.div`
    margin-left:1vw;
    padding-bottom:3vh;
    border-bottom: 3px solid rgb(248,242,248);
`;
const Profiles = styled.div`

    width:30%;
    h2{
        font-size: 0.9vw;
        font-weight: bold;
    }
`;
const Information = styled.div`
    width:70%;
    display:flex;
    align-items:center;
`;
const ProfileImage = styled.div`
    margin-top:2vh;
    img{
        border-radius: 1vw;
        width:6vw;
    }
`;
const ProfileInfo = styled.div`
    margin-left: 1vw;
`;
const ProfileInfoName = styled.div`
    display: flex;
    h3{
        margin-top:2vh;
    }
    h4{
        margin-left: 0.5vw;
        color:rgb(62,198,68);
        background-color: rgb(242,255,248);
        border-radius: 1vw;
        margin-top:1.9vh;
        padding:0.1vw;
        cursor: pointer;
        font-size:0.65vw;
    }
   
`;
const ProfileText = styled.div`
    input{
        width:27vw;
        height:6vh;
        border:none;
        border-radius: 0.7vw;
        background-color: rgb(242,242,242);
        padding-left: 1vw;
        ::placeholder{
            color:black;
            font-weight: 600;
            font-size: 0.65vw;
        }
    }
    img{
        position: absolute;
        margin-top:2vh;
        right: 30.5vw;
        width:0.9vw;
    }
`;
const MyInfo = styled.div`

margin-left:1vw;
`;
const MyInfos =styled.div`
    margin-top:4vh;
    h2{
        font-size: 0.9vw;
        font-weight: bold;
    }
`;
const Email = styled.div`
    display: flex;
    margin-left: 0.5vw;
    .infoTitle{
        color:darkgray;
        width:12%;
    }
    font-size: 0.75vw;
`;
const Role = styled(Email)`
    h5{
        margin-left: 0.5vw;
        color:rgb(62,198,68);
        background-color: rgb(242,255,248);
        border-radius: 1vw;
        padding:0.1vw;
        font-size:0.55vw;
        position: absolute;
        right:25vw;
        cursor: pointer;
    }
`;
const College = styled(Email)`

    h5{
        margin-left: 0.5vw;
        text-align: right;
        color:rgb(62,198,68);
        background-color: rgb(242,255,248);
        border-radius: 1vw;
        padding:0.1vw;
        font-size:0.5vw;
        margin-top:2vh;
    }
`;
const Skill = styled(Email)`
    h5{
        margin-left: 0.5vw;
        color:rgb(62,198,68);
        background-color: rgb(242,255,248);
        border-radius: 1vw;
        padding:0.1vw;
        font-size:0.55vw;
        position: absolute;
        right:25vw;
        cursor:pointer;
        }
`;
const Button = styled.button`
    width:20%;
    margin-left:1.5vw;
    margin-top:2vh;
    font-size:0.7vw;
    font-weight:500;
    height:4.5vh;
    border-radius: 0.5vw;
    background-color: rgb(240,240,240);
    border:0.1vw solid darkgray;
  `;
function MyPageInfoFix(){
    const Universitys = useRecoilValue(University);
   
    return(
       <Container>
          <Container2>
                <Profile>
                    <Profiles>
                        <h2>프로필</h2>
                    </Profiles>
                    <Information>
                        <ProfileImage><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj80V9xpfm3YeaQuSv8zIyIu05u1nR_MQGaA&usqp=CAU" alt="profileimage"></img></ProfileImage>
                        <ProfileInfo>
                            <ProfileInfoName>
                                <h3>김이름</h3>
                                <h4>수정하기</h4>
                            </ProfileInfoName>
                            <ProfileText>
                                <input placeholder="안녕하세요, 같이 개발할 팀원 모집중입니다 잘 부탁드립니다~!"/>
                                <img src="https://cdn-icons-png.flaticon.com/128/1250/1250615.png" alt="pencil"/>
                            </ProfileText>
                        </ProfileInfo>
                    </Information>
                </Profile>
                <MyInfo>
                    <MyInfos>
                        <h2>나의 정보</h2>
                    </MyInfos>
                    <Email>
                        <h4 className="infoTitle">이메일</h4> <h4>jjowin@email.com</h4>
                    </Email>
                    <College>
                    <h4 className="infoTitle">학교인증</h4> {Universitys===0?<><h4>없음</h4><h5 style={{color:"red",marginTop:"2.2vh"}}>미인증</h5></>:<><h4>{Universitys}</h4><h5>인증완료</h5></>}
                    </College>
                    <Role>
                    <h4 className="infoTitle">직무</h4> <h4>프론트 엔드 개발자 </h4><h5>수정하기</h5>
                    </Role>
                    <Skill>
                    <h4 className="infoTitle">숙련도</h4> <h4>97점</h4><h5>수정하기</h5>
                    </Skill>
                </MyInfo>
                <Button>비밀번호 변경</Button>
          </Container2>
       </Container>
    )
}
export default MyPageInfoFix;
 