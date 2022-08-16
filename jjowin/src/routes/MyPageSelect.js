import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    background-color: blue;
    width:50%;
    height:1000vh;
`

function MyPageSelect(){

    return(
        
        <Container>
         찜
       </Container>
    )
}
export default MyPageSelect;