import { useState } from "react";
import {Link} from "react-router-dom"
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    background-color: yellow;
    width:50%;
    height:1000vh;
`
const Container2 = styled.div`
    background-color: red;
`
function MyPageInfoFix(){

    return(
       <Container>
         회원 정보 수정
       </Container>
    )
}
export default MyPageInfoFix;