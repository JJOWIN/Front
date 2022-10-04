import styled from "styled-components";
import React, { useState, useRef } from 'react'
import { Document, Page } from 'react-pdf';
import { useNavigate } from "react-router-dom";
const Container = styled.div`
// display:flex;
flex-wrap:wrap;
// justify-content:space-between;
width:40%;
margin:auto;
margin-top:3vh;
`;

const ContestInfoContainer = styled.div`
width:100%;
display:flex;
// justify-content:center;
margin-top:2vh;
// height;

`;
const OutputContainer = styled.div`
width:100%;
// display:flex;
// justify-content:center;
margin-top:2vh;
// height;

`;
const ContestImg = styled.img`
    width:15vw;
    height:40vh;
    margin-right: 3vw;
`;
const ContestInfo = styled.div`
display:flex;
`;
const Title = styled.p`
width:5vw;
font-size:0.7vw;
color: #868686;
margin:1vh 0 1vh 0;
`
const Text = styled.p`
width:16.5vw;
font-size:0.9vw;
color:343434;
margin:1vh 0 1vh 0;
`
const Menu = styled.div`
    width:100%;
    height:5vh;
    display: flex;
`;
const Introduce = styled.div`
    overflow: scroll;
    height:100%;
`;
const Menuitem = styled.div`
    padding:3vh;
    width:90%;
    height:50vh;
    margin-top:1vh;
    white-space: pre-wrap;
    background-color:#F8F8F8;
    border-radius:2vh;
`;
const Menus = styled.div`
    width:15%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
`;
const Hr = styled.hr`
border:0;
height:2px;
margin:1vh 0 1vh 0;
background-color:#f4f4f4;
`
const FileUploadButton = styled.button`
width:23%;
height:33%;;
border:1px solid #14B91C;
border-radius: 10px;
background-color: white;
`;

const BackButton = styled.button`
box-sizing: border-box;
background-color:#14b91c;
color:#ffffff;
border:none;
border-radius: 10px;
height: 6vh;
padding:0 7vh 0 7vh;
margin:5vh 0 5vh 0;
`
const api = {
    "project": {
        "name": "메타버스 콘텐츠 공모전",
        "category": "웹 개발",
        "contestUrl": "https://~",
        "schoolName": "충대",
        "description": "사용자 기반 알고리즘을 이용해 여행지를 추천해주는 사이트를 만드는 프로젝트을 진행할 것입니다. 행복하고 화목하게~!",
        "endDate": "2022-10-12",
        "image": "https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg",
        "introduce": ` ●  스터디 목표 및 진행방식
 
 [목표] : 인공지능(머신러닝,딥러닝) 관련 지식을 깊게 공부하여 논문을 읽고 구현하는 정도를 목표로 하고있습니다. 또한 스터디한 내용을 가공하여 학습서비스(웹)를 만들어볼 예정이고  가능하다면 수익창출의 목표도 있습니다. 

 [진행방식] : 큰 커리큘럼을 정한뒤 매 주마다 그 안의 한가지 소주제를 학습합니다. 어느정도 학습한 내용이 쌓일때 학습서비스를 만들어서 배포합니다 

 [장소/횟수] : 주말 1회 온라인 회의 혹은 오프라인회의(가까운곳에 거주시) 저는 동탄2지구 거주중입니다. 대중교통 한시간거리까지는 가능합니다(강남,수원,오산,병점)

 [기간] :  목표달성시 까지 진행합니다.


 ●  참여 조건

 [지식수준] :  python에 대한 기본적인 개념, 기초영어

 [참여회비] : 없음

 [기타] : 인공지능과 개발에 대한 열정


 ●  자세한 내용 
 저는 인공지능 관련 부트캠프를 수료한 비전공자 개발자 입니다. 지금은 서버개발자 혹은 머신러닝 엔지니어로 구직중이고 학습과 경험을 위해 스터디를 모집하고 있습니다.

 제 성향은 원리를 파악하는 학습법을 선호합니다 예를들면 수학공부할때는 모든 수학공식을 증명해야 직성이 풀리고 무슨공부를 하던 제 스스로 이해가 가야 다음으로 넘어가는 스타일 입니다

 학습서비스를 만들게된다면 개념이 주어지고 퀴즈나 테스트를 하는 방식의 서비스를 만들고 싶습니다.  사용회원을 모집해서 수익을 창출하는 것도 생각하고 있습니다.


 별내용은 없지만 그래도 깃헙이랑 블로그 링크 올립니다
 깃헙페이지  https://github.com/haa-ru
 블로그페이지  https://velog.io/@haruharu"`
    },
    "projectSkill": [
        {
            "name": "태그용 모집 스킬(ex spring)"
        },
        {
            "name": "태그용 모집 스킬(ex react)"
        }

    ],

    "recruitInfo": [
        {
            "job": "직무(ex 백엔드)",
            "count": "모집 인원수"
        },
        {
            "job": "직무(ex 프론트 엔드)",
            "count": "모집 인원수"
        }
    ]

}
const Output = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: space-between;

`;
const OutputDownload = styled.div`
    width:25%;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
`;
const OutputDownloadImage = styled.img`
    
`;
const OutputDownloadName = styled.div`
    
`
const ChatTop = styled.div`
`;
const Chatting = styled.div`
`;
const ChatBottom = styled.div`
`;

function ContestProjectNow() {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(0);
    const [numPages, setNumPages] = useState(null);
    const [sendMessage, setSendMessage] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [chatting, setChatting] = useState([
        { username: "무질서도", message: "안녕하세요??" },
        { username: "무질서도", message: "안녕하세요??" },
        { username: "무질서도", message: "안녕하세요??" },
        { username: "무질서도", message: "안녕하세요??" },
    ]);
    const onChangeMessage = (e) => {
        setSendMessage(e.target.value);
    }
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    const fileRef = useRef(null);

    const onClickFileUploadHandler = () => {
        fileRef.current.click();
    }
    return (
        <Container>
            <h3>프로젝트 관리</h3>
            <ContestInfoContainer>
                <ContestImg src={api.project.image} alt="now" />
                <div>
                    <ContestInfo>
                        <Title>공모전명</Title><Text>{api.project.name}</Text>
                    </ContestInfo>
                    <ContestInfo>
                    <Title>링크</Title><Text><a href={"https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg"}>{api.project.contestUrl}</a></Text>
                    </ContestInfo>
                    <ContestInfo>
                    <Title>카테고리</Title><Text>{api.project.category}</Text>
                    </ContestInfo>
                    <ContestInfo>
                        <Title>학교</Title><Text>{api.project.schoolName}</Text>
                    </ContestInfo>
                    <ContestInfo>
                        <Title>기간</Title><Text>{api.project.endDate}</Text>
                    </ContestInfo>
                    <ContestInfo>
                        <Title>설명</Title><Text>{api.project.description}</Text>
                    </ContestInfo>
                </div>
            </ContestInfoContainer>
            <Hr></Hr>
                    <OutputContainer>
                            <Menu>
                                {menu === 0? <Menus onClick={() => setMenu(0)}><p style={{borderBottom:"0.3vh solid rgb(95,206,102)", paddingBottom:"1vh"}}>소개</p></Menus>:<Menus onClick={() => setMenu(0)}><p style={{borderBottom:"0.3vh solid white", paddingBottom:"1vh"}}>소개</p></Menus>}
                                {menu === 1? <Menus onClick={() => setMenu(1)}><p style={{borderBottom:"0.3vh solid rgb(95,206,102)", paddingBottom:"1vh"}}>산출물</p></Menus>:<Menus onClick={() => setMenu(1)}><p style={{borderBottom:"0.3vh solid white", paddingBottom:"1vh"}}>산출물</p></Menus>}
                                {menu === 2? <Menus onClick={() => setMenu(2)}><p style={{borderBottom:"0.3vh solid rgb(95,206,102)", paddingBottom:"1vh"}}>팀원</p></Menus>:<Menus onClick={() => setMenu(2)}><p style={{borderBottom:"0.3vh solid white", paddingBottom:"1vh"}}>팀원</p></Menus>}
                                {menu === 3? <Menus onClick={() => setMenu(3)}><p style={{borderBottom:"0.3vh solid rgb(95,206,102)", paddingBottom:"1vh"}}>댓글</p></Menus>:<Menus onClick={() => setMenu(3)}><p style={{borderBottom:"0.3vh solid white", paddingBottom:"1vh"}}>댓글</p></Menus>}
                            </Menu>
                            {menu === 0 ?
                                <Menuitem>
                                    <Introduce>{api.project.introduce}</Introduce>
                                </Menuitem>
                                :
                                menu === 1 ?
                                    <Menuitem>
                                        <Output>
                                        <input type="file" ref={fileRef} style={{ display: 'none' }} />
                                            <FileUploadButton type="button" onClick={onClickFileUploadHandler}><img src='https://user-images.githubusercontent.com/58421346/193834132-888c3d4b-10c5-4457-8f7f-99c7ce9e4a8e.png'></img></FileUploadButton>
                                            <input type="file" ref={fileRef} style={{ display: 'none' }} />
                                            <FileUploadButton type="button" onClick={onClickFileUploadHandler}><img src='https://user-images.githubusercontent.com/58421346/193834132-888c3d4b-10c5-4457-8f7f-99c7ce9e4a8e.png'></img></FileUploadButton>
                                            <input type="file" ref={fileRef} style={{ display: 'none' }} />
                                            <FileUploadButton type="button" onClick={onClickFileUploadHandler}><img src='https://user-images.githubusercontent.com/58421346/193834132-888c3d4b-10c5-4457-8f7f-99c7ce9e4a8e.png'></img></FileUploadButton>
                                            <input type="file" ref={fileRef} style={{ display: 'none' }} />
                                            <FileUploadButton type="button" onClick={onClickFileUploadHandler}><img src='https://user-images.githubusercontent.com/58421346/193834132-888c3d4b-10c5-4457-8f7f-99c7ce9e4a8e.png'></img></FileUploadButton>

                                            
                                            
                                            {/* <OutputDownload>
                                                <OutputDownloadImage src="https://cdn-icons-png.flaticon.com/128/7465/7465638.png" alt="down" />
                                                <OutputDownloadName>사업계획서</OutputDownloadName>
                                            </OutputDownload>
                                            <OutputDownload>
                                                <OutputDownloadImage src="https://cdn-icons-png.flaticon.com/128/7465/7465638.png" alt="down" />
                                                <OutputDownloadName>Diagram</OutputDownloadName>
                                            </OutputDownload>
                                            <OutputDownload>
                                                <OutputDownloadImage src="https://cdn-icons-png.flaticon.com/128/7465/7465638.png" alt="down" />
                                                <OutputDownloadName>회의록</OutputDownloadName>
                                            </OutputDownload>
                                            <OutputDownload>
                                                <OutputDownloadImage src="https://cdn-icons-png.flaticon.com/128/7465/7465638.png" alt="down" />
                                                <OutputDownloadName>일정표</OutputDownloadName>
                                            </OutputDownload> */}
                                        </Output>
                                    </Menuitem>
                                    :
                                    menu === 2 ?
                                        <Menuitem>
                                            456
                                        </Menuitem>
                                        :
                                        menu === 3 ?
                                            <Menuitem>
                                                <ChatTop>
                                                    {chatting.map((item, index) => {
                                                        return (
                                                            <Chatting>
                                                                {item.username} {item.message}
                                                            </Chatting>
                                                        )
                                                    })}
                                                </ChatTop>
                                                <ChatBottom>
                                                    <input onChange={onChangeMessage} />
                                                    <button onClick={() => console.log(sendMessage)}>전송</button>
                                                </ChatBottom>
                                            </Menuitem>
                                            : 0
                            }
                            <div style={{ justifyContent: "center", alignItems: "center", display: "flex"}}><BackButton onClick={() => navigate("/myPage/myPageJoinProject")}>돌아가기</BackButton></div>

                    </OutputContainer>
                </Container>
                )
}
                export default ContestProjectNow;