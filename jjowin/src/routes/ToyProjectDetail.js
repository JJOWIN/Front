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
function ToyProjectDetail(){
   const TPinfo = {
    toyProjectName:"창업액셀러레이션 한번 나가보실 분~~~!",
    toyProjectField: "개발",
    toyProjectDay: "2022/10/22",
    toyProjectDetail:`2022 장애인 인식개선 공모전
    ■ 공모 주제
    
    - 장애인 인식개선의 내용을 담은 순수 창작물
    
     
    ■ 시상 내역
    
    - 부문무관
    
     * 대상(1) : 보건복지부장관상 / 200만원
    
     * 최우수상(2) : 한국장애인재단 이사장상 / 100만원
    
    - 영상
    
     * 우수상(3) : 신한카드 대표이사상 / 50만원
    
     * 입상(5) : 심사위원장상 / 20만원
    
    - 라디오캠페인
    
     * 우수상(3) : YTN라디오 대표이사상 / 50만원
    
     * 입상(5) : 심사위원장상 / 20만원
    
    - 포스터
    
     * 우수상(3) : 문화일보 대표이사상 / 50만원
    
     * 입상(5) : 심사위원장상 / 20만원
    
    - 웹툰
    
     * 우수상(3) : 트위터코리아 대표이사상 / 50만원
    
     * 입상(5) : 심사위원장상 / 20만원
    
    `,
    toyProjectUuniversary: "충북대학교",
    toyProjectMember:[
        {
            icon:"",
            role:"프론트엔드 개발자",
            nowPeople:1,
            maxPeople:3
        },
       {
            icon:"",
            role:"백엔드 개발자",
            nowPeople:1,
            maxPeople:3
        },
       {
            icon:"",
            role:"데이터 분석가",
            nowPeople:1,
            maxPeople:3
        }
    ],
    toyProjectSkill:["javascript","react","mysql","node.js"]
   };
  const Join=()=>{
    alert("신청되었습니다");
  }
   return (
   <Container>
    <Container1>
       <h2>프로젝트 명</h2>
       <h3>{TPinfo.toyProjectName}</h3> 
    </Container1>
    <Container1>
       <h2>프로젝트 분야</h2>
       <h3>{TPinfo.toyProjectField}</h3> 
    </Container1>
    <Container1>
       <h2>프로젝트 기간</h2>
       <h3>{TPinfo.toyProjectDay}</h3> 
    </Container1>
    <Container1>
       <h2>프로젝트 상세</h2>
       <h4>{TPinfo.toyProjectDetail}</h4> 
    </Container1>
    <h2 style={{marginBottom:"-20px"}}>팀원 모집 현황</h2>
    <Teamcollect>
        <h3 className='icon'> </h3>
        <h3 className='role'>직무</h3>
        <h3 className='people'>인원</h3>
    </Teamcollect>
    
    {TPinfo.toyProjectMember.map((item)=>{
        return(
            <Teamcollect>
                <div className='icon'>
                    <div style={{width:"100px",height:"100px",backgroundColor:"darkgray",borderRadius:"50%"}}> 
                    
                    </div>
                </div>
                <h3 className='role'>{item.role}</h3>
                <h3 className='people'>{item.nowPeople}/{item.maxPeople}</h3>
            </Teamcollect>
        )
    })}
     <Container1>
        <h2>모집 스킬</h2>
        <Skill>
        {TPinfo.toyProjectSkill.map((item)=>{
            return(
                <h3>#{item}</h3>
            );
        })}
        </Skill>
     </Container1>
     <Container1 style={{marginTop:"40px",textAlign:"center"}}>
     <a href="../toyProjectList"><Button onClick={Join}>참여신청</Button></a>
     </Container1>
   </Container>
  );
}

export default ToyProjectDetail;