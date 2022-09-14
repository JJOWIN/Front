import styled from "styled-components";
import { useState } from "react";
import { Document, Page } from 'react-pdf';
import { useNavigate } from "react-router-dom";
const ContestImg = styled.img`
    width:20vw;
    margin-right: 3vw;
`;
const ContestInfo = styled.div`
    h3{
        margin:0;
    }
    h4{
        margin:0.7vh;
    }
`;
const Menu = styled.div`
    width:60vw;
    height:5vh;
    display: flex;
`;
const Introduce = styled.div`
    overflow: scroll;
    height:100%;
    overflow: scroll;
`;
const Menuitem = styled.div`
    border:1px solid black;
    border-top:none;
    width:60vw;
    height:35vh;
    white-space: pre-wrap;
`;
const Menus = styled.div`
    border:1px solid black;
    width:25%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: green;
        color:white;
    }
`;
const api = {
    "project":{
        "name" : "메타버스 콘텐츠 공모전",
        "category" : "웹 개발",
        "contestUrl" : "https://~",
        "schoolName" : "충대",
        "description" : "사용자 기반 알고리즘을 이용해 여행지를 추천해주는 사이트를 만드는 프로젝트을 진행할 것입니다. 행복하고 화목하게~!",
        "endDate" : "2022-10-12",
        "image" : "https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg",
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
    "projectSkill":[
        {
		        "name" : "태그용 모집 스킬(ex spring)"
        },
        {
		        "name" : "태그용 모집 스킬(ex react)"
        }

    ],
    
    "recruitInfo":[
        {
            "job" : "직무(ex 백엔드)",
            "count" : "모집 인원수"
        },
        {
            "job" : "직무(ex 프론트 엔드)",
            "count" : "모집 인원수"
        }
    ]
    
}
const Output = styled.div`
    width:100%;
    height:100%;
    display: flex;
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
const ChatTop =styled.div`
`;
const Chatting = styled.div`
`;
const ChatBottom = styled.div`
`;

function ContestProjectNow(){
    const navigate = useNavigate();
    const [menu,setMenu] = useState(0);
    const [numPages, setNumPages] = useState(null);
    const [sendMessage,setSendMessage]= useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [chatting,setChatting] = useState([
        {username: "무질서도" , message:"안녕하세요??"},
        {username: "무질서도" , message:"안녕하세요??"},
        {username: "무질서도" , message:"안녕하세요??"},
        {username: "무질서도" , message:"안녕하세요??"},
    ]);
    const onChangeMessage = (e) =>{
        setSendMessage(e.target.value);
    }
        function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    return(
        <div>
            <div style={{display:"flex",justifyContent:"center",marginTop:"2vh",height:"400px"}}>
                <ContestImg src={api.project.image} alt="now"/>
                <ContestInfo style={{width:"20vw"}}>
                    <h3>공모전 명:<h4>{api.project.name}</h4></h3>
                    <h3>링크:<a href={"https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg"}><h4>{api.project.contestUrl}</h4></a></h3>
                    <h3>카테고리</h3><h4>{api.project.category}</h4>
                    <h3>학교</h3><h4>{api.project.schoolName}</h4>
                    <h3>기간</h3><h4>{api.project.endDate}</h4>
                    <h3>설명</h3><h4>{api.project.description}</h4>
                </ContestInfo>
            </div>
        <div style={{display:"flex",justifyContent:"center",marginTop:"4vh"}}>
       
            <div>
                <Menu>
                <Menus onClick={()=>setMenu(0)}>소개</Menus>
                <Menus onClick={()=>setMenu(1)}>산출물</Menus>
                <Menus onClick={()=>setMenu(2)}>팀원</Menus>
                <Menus onClick={()=>setMenu(3)}>댓글</Menus>
                </Menu>
                {menu===0?
                <Menuitem>
                  <Introduce><h4>{api.project.introduce}</h4></Introduce>
                </Menuitem>
                :
                menu===1?
                <Menuitem>
                    <Output>
                        <OutputDownload>
                            <OutputDownloadImage src="https://cdn-icons-png.flaticon.com/128/7465/7465638.png" alt="down"/>
                            <OutputDownloadName>사업계획서</OutputDownloadName>
                        </OutputDownload>
                        <OutputDownload>
                            <OutputDownloadImage src="https://cdn-icons-png.flaticon.com/128/7465/7465638.png" alt="down"/>
                            <OutputDownloadName>Diagram</OutputDownloadName>
                        </OutputDownload>
                        <OutputDownload>
                            <OutputDownloadImage src="https://cdn-icons-png.flaticon.com/128/7465/7465638.png" alt="down"/>
                            <OutputDownloadName>회의록</OutputDownloadName>
                        </OutputDownload>
                        <OutputDownload>
                            <OutputDownloadImage src="https://cdn-icons-png.flaticon.com/128/7465/7465638.png" alt="down"/>
                            <OutputDownloadName>일정표</OutputDownloadName>
                        </OutputDownload>
                    </Output>
                </Menuitem>
                :
                menu===2?
                <Menuitem>
                456
                </Menuitem>
                :
                menu===3?
                <Menuitem>
                    <ChatTop>
                       {chatting.map((item,index)=>{
                        return(
                            <Chatting>
                                {item.username} {item.message}
                            </Chatting>
                        )
                       })}
                    </ChatTop>
                    <ChatBottom>
                       <input onChange={onChangeMessage}/>
                       <button onClick={()=>console.log(sendMessage)}>전송</button>
                    </ChatBottom>
                </Menuitem>
                :  0
                }
            <div style={{justifyContent:"center",alignItems:"center",display:"flex",marginTop:"2vh"}}><button onClick={()=>navigate("/myPage/myPageJoinProject")} style={{width:"10vw",height:"5vh"}}>돌아가기</button></div>
            
            </div>
        
        </div>
        
        </div>
    )
}
export default ContestProjectNow;