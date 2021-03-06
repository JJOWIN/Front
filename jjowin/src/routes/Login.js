import {Link} from "react-router-dom"
import styled from "styled-components";
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
    return(
        <HTMLS>
        <Wraps style={{marginLeft:"-9px"}}>
        </Wraps>
        <Container>
            <Container1>
                <div style={{width:"100px",height:"100px",backgroundColor:"#AD9AEE",borderRadius:"50%",margin:0}}></div>
            </Container1>
           <Container1>
              <ID placeholder="ID" />
            </Container1>
             <Container1>
            <ID placeholder="PW" />
            </Container1>
            <Contianer2>
              <a href="/"><Button>로그인</Button></a>
            </Contianer2>
            <Container3>
                <Link to="./findId">ID 찾기</Link>
                <Link to="./findPw">PW 찾기</Link>
                <Link to="./signUp">회원가입</Link>
            </Container3>
        </Container>
        <Wraps style={{marginRight:"-9px"}}> 
        </Wraps>
        </HTMLS>
    )
}
export default Login;