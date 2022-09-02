import {Link,useNavigate} from "react-router-dom"
import styled from "styled-components";
import { useMutation } from "react-query";
import { useState } from "react";
import { useRecoilValue,useSetRecoilState } from "recoil";
import { LoginStatus, TotalId, TotalPw } from "../atom.js";

const Container = styled.div`
    width:40%;
    height:100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 15vh;
`;
const Wraps = styled.div`
    width:30%;
    height:100vh;
    background-color: #dee2e6;
`;
const HTMLS = styled.div`
    display:flex;
    margin-right: -25px;
`;
const Container1 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top:3vh;
`;
const Contianer2 = styled.div`
    margin-top: 4vh;
`;
const Container3 = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    a{
        text-decoration: none;
        margin: 20px;
        color:black;
        &:visited{
            color:black;
        }
    }
`;
const Button = styled.button`
    width:20vw;
    height: 6vh;
    border-radius: 5px;
    border: 0;
    font-size: 20px;
    background-color: #AD9AEE;
`;
const ID = styled.input`
    width:20vw;
    height: 4vh;
    border-radius: 5px;
    border: 1px solid darkgray;
`;
function Login(){
    
    const postdata = async (data) => {
        fetch("http://43.200.200.255:8080/user/login", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            if(data.resultCode===0){
                navigate('/');
            }
          });
      }
      const { mutate, isLoading } = useMutation(postdata, {
          onSuccess: data => {
          },
          onError: () => {
            alert("there was an error")
          },
        });

    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();
    const setterFnId=useSetRecoilState(TotalId);
    const setterFnPw=useSetRecoilState(TotalPw);
    const setterLoginStatus=useSetRecoilState(LoginStatus);
    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onClickLoginHandler = () => {
        mutate({
            "email":id,
            "password":password
        })
        setterFnId(id);
        setterFnPw(password);
        setterLoginStatus(1); 
        
    }
    return(
        <HTMLS>
        <Wraps style={{marginLeft:"-9px"}}>
        </Wraps>
        <Container>
            <Container1>
                <div style={{width:"100px",height:"100px",backgroundColor:"#AD9AEE",borderRadius:"50%",margin:0}}></div>
            </Container1>
           <Container1>
              <ID placeholder="ID" onChange={onIdHandler} value={id}/>
            </Container1>
             <Container1>
            <ID placeholder="PW" type='password' onChange={onPasswordHandler} value={password}/>
            </Container1>
            <Contianer2>
              {/* <a href="/"> */}
                <Button onClick={onClickLoginHandler}>로그인</Button>
                {/* </a> */}
            </Contianer2>
            <Container3>
                <Link to="../findId">ID 찾기</Link>
                <Link to="../findPw">PW 찾기</Link>
                <Link to="../signUp">회원가입</Link>
            </Container3>
        </Container>
        <Wraps style={{marginRight:"-9px"}}> 
        </Wraps>
        </HTMLS>
    )
}
export default Login;