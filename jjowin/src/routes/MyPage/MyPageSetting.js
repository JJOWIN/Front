import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    background-color: yellow;
    width:50%;
    height:1000vh;
`

function MyPageSetting(){

    return(
        
        <Container>
        설정
       </Container>
    )
}
export default MyPageSetting