import { useState } from "react";
import styled from "styled-components";
import '../index.css';

const Container1 = styled.div`
    display: flex;
    margin-left:24vw;
    font-family: 'SUIT';
    margin-top:3vh;
    div,button{
        margin:1vw;
    }
    align-items: center;
    img{
        border-radius: 1vw;
        width:40%;
    }
    .title{
        font-size: 0.8vw;
        font-weight: 500;
        color:#14B91C;
    }
    .name{
        font-size:1.5vw;
        width:15vw;
        font-weight: 600;
    }
    .date{
        font-size:0.7vw;
        font-weight: 600;
    }
    .detail{
        cursor:pointer;
        background-color: #65D66A;
        border:0;
        border-radius: 0.8vw;
        font-family: 'SUIT';
        font-size:0.65vw;
        color:white;
        padding:1vh 0.5vw 1vh 0.5vw;
    }
`;
const Contest = styled.div`
   width:25%;
`;
const Container2 = styled.div`
     display: flex;
    margin-left:24vw;
    font-family: 'SUIT';
    margin-top:3vh;
    div,button{
        margin:1vw;
    }
    align-items: center;
    img{
        border-radius: 1vw;
        width:40%;
    }
    .title{
        font-size: 0.8vw;
        font-weight: 500;
        color:#14B91C;
    }
    .name{
        font-size:1.5vw;
        width:15vw;
        font-weight: 600;
    }
    .date{
        font-size:0.7vw;
        font-weight: 600;
    }
    .detail{
        cursor:pointer;
        background-color: #65D66A;
        border:0;
        border-radius: 0.8vw;
        font-family: 'SUIT';
        font-size:0.65vw;
        color:white;
        padding:1vh 0.5vw 1vh 0.5vw;
    }
`;
function Main(){
    
    return(
        <>
        <Container1>
            <Contest>
                <div className="title">지금 주목할만한 공모전들</div>
                <div className="name">2022 미래 일러스트 국제 디자인 공모전</div>
                <div className="date">22.08.09-22.08.12</div>
                <button className="detail">자세히보기</button>
            </Contest>
            <img src="https://user-images.githubusercontent.com/44117975/193845697-379d6d77-cf66-4b61-a839-94cb3115302c.png" alt="main"/>
        </Container1>
        <Container2>
            <img src="https://user-images.githubusercontent.com/44117975/193849808-de35e08a-1ddc-425d-85bc-92e409f559ed.png" alt="main2"/>
            <Contest>
                <div className="title">모집중인 프로젝트 모음</div>
                <div className="name">유플러스 대학생 감성서포터즈 11기 모집</div>
                <div className="date">22.08.09-22.08.12</div>
                <button className="detail">자세히보기</button>
            </Contest>
        </Container2>
        </>
    )
}
export default Main;