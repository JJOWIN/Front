import {Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from "react-slick";
import "../../slick.css"
import "../../slick-theme.css"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Container2 = styled.div`
    width:45%;
    margin-left:6vw;
`;
const Contest = styled.div`
    margin-top:6vh;
    display: flex;
    height:40vh;
    border-bottom: 3px solid rgb(248,242,248);
`;
const ContestImg = styled.div`
    width:30%;
    max-height:35vh;
    img{
        width:100%;
        height:100%;
    }
`;
const ContestInfo = styled.div`
    margin-left:4vw;
    h4{
        display: inline-block;
        padding:0.1vw;
        font-size:0.6vw;
    }
    .title{
        color:gray;
    }
`;
const Project = styled.div`
    margin-top:2vh;
`;
const Team = styled.div`
    border-top: 3px solid rgb(248,242,248);
    margin-top:5vh;
`;
const ContestName = styled.div``;
const ContestOwner = styled.div``;
const ContestDate = styled.div``;
const ContestCategory = styled.div``;
const Button = styled.button`
    padding:0.4vw;
    border-radius: 0.9vw;
    border:none;
    color:white;
    background-color: rgb(20,185,28);
    margin-top:1vh;
`;
const ProjectDetail = styled.div`
    margin-top: 3vh;
    font-size:0.6vw;
`;
const ProjectLetter = styled.div`
    height:30vh;
    overflow:scroll;
    h4{
        font-weight: 300;
    }
`;
const TeamDetail= styled.div`
    display: flex;
    h3{
        font-size:0.6vw;
        margin:0;
    }
     margin-top:3vh;
     h4{
        cursor: pointer;
        position: absolute;
        right:24.5vw;
        margin:0;
        color: rgb(20,185,28);
     }
`;
const TeamSlider = styled.div`
    margin-top: 3vh;
    img{
        width:10.5vw;
        margin-left:0.5vw;
    }
    h3{
        margin-top:2vh;
        padding:0.35vw 0.5vw 0.35vw 0.5vw;
        font-size: 0.6vw;
        color: rgb(20,185,28);
        border:1px solid  rgb(20,185,28);
        display: inline-block;
        border-radius: 1vw;
    }
    h4{
        width:95%;
        font-weight: 500;
    }
`;
function ContestProjectDetail(){
    const settings = {
        dots: true,  // 점은 안 보이게
        infinite: true, // 무한으로 즐기게
        speed: 500,
        slidesToShow: 4, //4장씩 보이게 해주세요
        slidesToScroll: 1, //1장씩 넘어가세요
    };

    return(
        <Container>
           <Container2>
                <Contest>
                    <ContestImg>
                        <img src="https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg" alt="contestImg"/>
                    </ContestImg>
                    <ContestInfo>
                        <ContestName>
                            <h2>2022 기업멤버십 SW캠프 채용 확정형 교육생 모집</h2>
                        </ContestName>
                        <ContestOwner>
                            <h4 className='title'>주최</h4> <h4>청년재단</h4>
                        </ContestOwner>
                        <ContestDate>
                            <h4 className='title'>기간</h4> <h4>2022.09.19~2022.09.21</h4>
                        </ContestDate>
                        <ContestCategory>
                            <h4 className='title'>분야</h4> <h4>교육/강연/멘토링</h4>
                        </ContestCategory>
                        <Button>홈페이지 바로가기</Button>
                        
                    </ContestInfo>
                </Contest>
                <Project>
                    <ProjectDetail>
                        <h3>상세내용</h3>
                    </ProjectDetail>
                    <ProjectLetter>
                        <h4>공모전 대한 설명이 적혀있습니다.</h4>
                    </ProjectLetter>
                </Project>
                <Team>
                    <TeamDetail>
                        <h3>팀원 모집</h3> <h4>더보기</h4>
                    </TeamDetail>
                    <TeamSlider>
                        <Slider {...settings}>
                         {[1,1,1,1,1,1].map((item,index)=>{
                            return(
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj80V9xpfm3YeaQuSv8zIyIu05u1nR_MQGaA&usqp=CAU" alt="team"/>
                                    <h3>팀원 모집중</h3>
                                    <h4>같이 진행하실 개발자 구합니다~! 현재 2명 있어요~</h4>
                                </div>
                            )
                         })}
                        </Slider>
                    </TeamSlider>
                </Team>
           </Container2>
        </Container>
    )
}
export default ContestProjectDetail;