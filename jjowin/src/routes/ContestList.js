import { useState } from "react";
import styled from "styled-components";
import ContestProjectList from "./ContestProjectList";
const Container  = styled.div`
    height: 5vh;
    background-color: powderblue;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    h3{
        margin-top: 0;
        margin-bottom: 0;
    }
`;
const Container1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ContestLists = styled.div`
    width:80%;
    
`;
function ContestList(){
    return(
        <>
        <Container>
         <h3>공모전 리스트</h3>
        </Container>
        <Container1>
            <ContestLists>
                d
            </ContestLists>
        </Container1>
        <ContestProjectList/>
        </>
    )
}
export default ContestList;