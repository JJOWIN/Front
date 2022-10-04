import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components";
import { useMutation } from "react-query";
import { useState } from "react";
import { postLogin } from '../../api.js'
import { TotalId, TotalPw, LoginStatus ,University} from "../../atom.js";
import { useSetRecoilState, useRecoilValue } from "recoil";

const Container = styled.div`
// display:flex;
flex-wrap:wrap;
// justify-content:space-between;
width:40%;
margin:auto;
margin-top:3vh;
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
box-sizing: border-box;
background-color:#14b91c;
color:#ffffff;
border:none;
border-radius: 10px;
height: 6vh;
padding:0 7vh 0 7vh;
margin:3vh 0 1vh 0;
    width:22vw;
    height: 6vh;
    font-size: 20px;
`;
const ID = styled.input`
background-color:white;
border-color:#B8B8B8;
border-radius: 10px;
height: 6vh;
width:20vw;
&:focus{outline-color:#14b91c;
background-color:white;}
padding:0 0 0 2vh;
::placeholder{
    color:darkgray;
    margin-left: 3vw;
}
`;
function Login() {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();
    const setterFnId = useSetRecoilState(TotalId);
    const setterFnPw = useSetRecoilState(TotalPw);
    const setterLoginStatus = useSetRecoilState(LoginStatus);
    const setterUniversity = useSetRecoilState(University);

    const { mutate, isLoading } = useMutation(postLogin, {
        onSuccess: data => {
            alert(data.resultMsg)
            if (data.resultCode === 0) {
                setterFnId(id);
                setterFnPw(password);
                setterLoginStatus(1);
                setterUniversity(data.list[0].schoolName);
                navigate('/')
            }
        },
        onError: () => {
            alert("there was an error")
        },
    });
    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onClickLoginHandler = () => {
        mutate({
            "email": id,
            "password": password
        })
    }
    return (
            <Container>
                <h3>로그인</h3>
                <Container1>
                    <ID placeholder="ID" onChange={onIdHandler} value={id} />
                </Container1>
                <Container1>
                    <ID placeholder="PW" type='password' onChange={onPasswordHandler} value={password} />
                </Container1>
                <div style={{ justifyContent: "center", alignItems: "center", display: "flex"}}><Button onClick={onClickLoginHandler}>로그인</Button></div>
                <Container3>
                    <Link to="../findId">ID 찾기</Link>
                    <Link to="../findPw">PW 찾기</Link>
                    <Link to="../signUp">회원가입</Link>
                </Container3>
            </Container>

    )
}
export default Login;