import {Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    margin-left: 15vw;
    margin-right: 15vw;
`;
const Container1 = styled.div`
    margin-bottom:30px;
    h3,h4{
        display: block;
        border: 1px solid black;
        padding: 15px;
        border-radius: 10px;
        margin-left: 2vw;
        white-space: pre-wrap;
    }
`;  
const Teamcollect = styled.div`
    display: flex;
    padding: 1vw;
    h3.icon{
        width:30%;
        margin-left: 4vw;
        padding-left:10px;
       
    }
    h3.role{
        width: 29%;
        text-align: center;
    }
    h3.people{
        width: 33%;
        text-align: right;
    }
    div{
        width:30%;
        margin-left: 4vw;
        padding-left:10px;
    }
`;
const Skill = styled.div`
    display: flex;
    h3{
        border: 1px solid whitesmoke;
        background-color: whitesmoke;
        padding: 15px;
        border-radius: 10px;
        margin-left: 2vw;
    }
`;
const Button = styled.button`
    width:8vw;
    height: 6vh;
    border-radius: 5px;
    border: 0;
    font-size: 20px;
`;
function ContestDetail(){
    const contest = 
        {
            "id": 1,
          "title": "안동국제탈춤페스티벌 메타버스 공모전",
          "startDate": "2022-07-19T00:00:00",
          "endDate": "2022-08-31T00:00:00",
          "organizer": "안동시",
          "info": "안동국제탈춤페스티벌 메타버스 공모전● 공모 자격  - 프로그램 툴을 이용해 메타버스 제작이 가능한 전국 누구나  - 제페토 or ZEP\n  - 로블록스\n● 공모 주제  - 메타버스에서 안동국제탈춤페스티벌을 소개하고 홍보할 수 있는 모든 소재를 활용한 공간 구축    (이미지, 텍스트, 영상, 콘텐츠, 게임 등 활용)\n● 시상 내역  [제페토 or ZEP]\n  - 최우수상 : 1명(팀) 3,000,000원  - 우수상 : 2명(팀) 1,000,000원  - 장려상 : 4명(팀) 250,000원  [로블록스]  - 최우수상 : 1명(팀) 5,000,000원  - 우수상 : 2명(팀) 1,500,000원  - 장려상 : 4명(팀) 250,000원\n● 공모 일정  - 접수 기간 : 7/19(화) ~ 8/31(수)\n\n● 접수 방법  - 이메일(andong_meta@naver.com)로 본인이 구축한 메타버스 공간의 영상을 첨부하여 접수\n\n● 문의 사항  - 이메일 : andong_meta@naver.com  - 전화 : 070-7510-2559  - 공모전 운영사무국 : 10:00 ~ 17:00/ 주말, 공휴일 제외\n",
          "imageUrl": "https://jjowin-contest.s3.ap-northeast-2.amazonaws.com/6415f080-284e-11ed-b273-06fc71c11347.jpg",
          "homepage": "http://www.maskdance.com/2019/main.asp"
        }
     
    return (
    <Container>
     <Container1>
        <h2>공모전 명</h2>
        <h3>{contest.title}</h3> 
     </Container1>
     <Container1>
        <h2>공모전 기간</h2>
        <h3>{contest.startDate}~{contest.endDate}</h3> 
     </Container1>
     <Container1>
        <h2>주관</h2>
        <h3>{contest.organizer}</h3> 
     </Container1>
     <Container1>
        <h2>공모전 정보</h2>
        <h4>{contest.info}</h4> 
     </Container1>
     <Container1>
        <h2>공모전 링크</h2>
        <h4>{contest.homepage}</h4> 
     </Container1>
     <img src={contest.imageUrl}></img>
    </Container>
   );
 }
export default ContestDetail;