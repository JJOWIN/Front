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
    align-items: center;
`;
const Container2 = styled.div`
    width:80%;
    height:70%;
    border-radius: 3vh;
    margin-bottom: 10vh;
    border: 1px solid black;
   
`;
const EmailAgree = styled.div`
    display: flex;
    margin-top: 5vh;
    margin-left:3vw;
`;
const ProofSelf = styled(EmailAgree)``;
const College = styled(EmailAgree)``;
const Out = styled(EmailAgree)`
    justify-content: center;
    margin-right: 3vw;
`;
const Submit = styled.div`
   
`;
const Button = styled.button`
        width:30%;
        margin-right:3vw;
        height:4vh;
        background-color:${(props) => props.color};
`

function MyPageInfoFix(){
    const [proof,setProof] = useState(0); 
    const college = useRecoilValue(University);
    const [emailAccept,setEmailAccept] = useState(0);
    const [email,setEmail] = useState("knh6269@gmail.com");
    const password ='12345';

    const user={
        college:"충북대학교"
    }   
    const onClickSubmit = () =>{
        alert("변경되었습니다");
        console.log(emailAccept,proof,college);
    }
   const emailAgree = () =>{
        setEmailAccept(1);
   }
   const emailDisAgree = () =>{
        setEmailAccept(0);
   }    
   const collegeProof=()=>{
    console.log("인증합시다");
   }
   
    return(
       <Container>
          <Container2>
            <EmailAgree>
                <span>이메일 수신 동의 </span>
                {emailAccept?  
                <div><button style={{backgroundColor:"skyblue"}}>ON</button><button onClick={emailDisAgree}>Off</button></div>: 
                <div><button onClick={emailAgree}>ON</button><button style={{backgroundColor:"skyblue"}}>Off</button></div>}
            </EmailAgree>  
            <ProofSelf>
               {proof?
                    <h3>휴대폰 본인인증 (O)</h3>
                   :
                   <div>
                   <h3>휴대폰 본인인증 (x)</h3>
                   <button>인증받기</button>
                  
                   </div> 
            }
            </ProofSelf>

            <College>
                {college?
                <div style={{display:"flex"}}>
                    <h3>인증된 학교 :</h3>
                    <h3>{college}</h3>
                </div>:
                <div>
                    <div>
                    <h3>인증된 학교: 없음</h3>
                    <input placeholder="학교 이메일 입력"></input>
                    <button onclick={collegeProof}>인증받기</button>
                    </div>
                 <input style={{marginTop:"1vh"}}placeholder="인증번호 입력" />
                </div>
                }
            </College>
            <Out>
                <button style={{width:"80%", backgroundColor:"orange",height:"4vh"}}>회원탈퇴</button>
            </Out>
            <Submit>
            <a href="/myPage/myPageInfoFix"><Button color="blue" onClick={onClickSubmit}>확인</Button></a>
                <a href="/myPage/myPageInfoFix"><Button color="red">취소</Button></a>
            </Submit>
          </Container2>
       </Container>
    )
}
export default MyPageInfoFix;