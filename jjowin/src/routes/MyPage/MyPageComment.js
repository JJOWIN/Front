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
function MyPageComment(){

    return(
       <Container>
        댓글보기 
       </Container>
    )
}
export default MyPageComment;