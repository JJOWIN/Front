import { useState } from "react";
import {Link} from "react-router-dom"
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    background-color: green;
    width:50%;
    height:1000vh;
`
const Container2 = styled.div`
    background-color: red;
`
function MyPage(){

    return(
        
        <div style={{display:"flex"}}>
           <Container>
             <Link to="./myPageInfoFix"><h1>회원정보 수정</h1></Link>
             <Link to="./myPageSelect"><h1>찜</h1></Link>
           </Container>
           <Outlet/>
        </div>
    )
}
export default MyPage;