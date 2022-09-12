import { useState } from "react";
import {Link,useNavigate} from "react-router-dom"
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    background-color: yellow;
    width:50%;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
function MyPageJoinProject(){
    const navigate = useNavigate();

    return(

       <Container>
         <div style={{width:"300px",height:"300px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"white"}}onClick={()=>navigate("/contestProjectNow")}> 이동!</div>
       </Container>
    )
}
export default MyPageJoinProject;