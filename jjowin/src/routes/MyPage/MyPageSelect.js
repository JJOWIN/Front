import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width:50%;
    padding-bottom: 10vh;
`;
const Container2 = styled.div`
margin-left:4vw;
`;
const Tag = styled.div`
    margin-top:2vw;
  
    display:flex;
    .projectSelect{
        margin-left:1.5vw;
    }
    h4{
        cursor: pointer;
        padding-bottom: 0.5vh;
    }
`;  
const ContestList = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 4vh;
    margin-top:2vh;
`;
const ContestLists = styled.div`
width:33.333%;
    img{
        width:40%;
        height:40%;
        margin-top: 1vh;
    }
`;

const ContestListImage = styled.div`
    img{
        width:13vw;
    }
`;
const ContestGather = styled.div`
    margin-top:1vh;
    h5{
        color:rgb(62,198,68);
        border:1px solid rgb(62,198,68);
        border-radius: 1vw;
        padding: 0.2vw 0.4vw 0.2vw 0.4vw;
        font-size:0.55vw;
        display: inline;
        }
`;
const ContestDate = styled.div`
    h5{
        margin:0;
        font-size:0.7vw;
        font-weight: 300;
    }
`;
const ContestName = styled.div`
    h4{
        font-size:0.72vw;
        margin:1vw;
        margin-bottom:0.3vw;
        margin-left:0;
    }
`;
function MyPageSelect(){
    const [status,setStatus] = useState(1);
    const selectContest = [
        {img:"https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg", gather:"모집중",name:"2022 미래 일러스트 국제 디자인 공모전",date:"22.08.09-22.08.12"},
        {img:"https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg", gather:"모집중",name:"2022 미래 일러스트 국제 디자인 공모전",date:"22.08.09-22.08.12"},
        {img:"https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg", gather:"모집중",name:"2022 미래 일러스트 국제 디자인 공모전",date:"22.08.09-22.08.12"},
        {img:"https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg", gather:"모집중",name:"2022 미래 일러스트 국제 디자인 공모전",date:"22.08.09-22.08.12"},
        {img:"https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg", gather:"모집중",name:"2022 미래 일러스트 국제 디자인 공모전",date:"22.08.09-22.08.12"},
        {img:"https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg", gather:"모집중",name:"2022 미래 일러스트 국제 디자인 공모전",date:"22.08.09-22.08.12"},
    ]
    const selectProject = [
        {img:"https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg", gather:"모집중",name:"2022 미래 일러스트 국제 디자인 프로젝트",date:"22.08.09-22.08.12"},
        {img:"https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg", gather:"모집중",name:"2022 미래 일러스트 국제 디자인 프로젝트",date:"22.08.09-22.08.12"},
        {img:"https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg", gather:"모집중",name:"2022 미래 일러스트 국제 디자인 프로젝트",date:"22.08.09-22.08.12"},
        {img:"https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg", gather:"모집중",name:"2022 미래 일러스트 국제 디자인 프로젝트",date:"22.08.09-22.08.12"},
        {img:"https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg", gather:"모집중",name:"2022 미래 일러스트 국제 디자인 프로젝트",date:"22.08.09-22.08.12"},
        {img:"https://www.thinkcontest.com/ufiles/contest/bc33eeb9f7a55470ec0e75f810358c337784a52f.jpg", gather:"모집중",name:"2022 미래 일러스트 국제 디자인 프로젝트",date:"22.08.09-22.08.12"},
    ]   
    return(
        <Container>
            <Container2>
                <Tag>
                    {status===1? 
                    <h4 style={{borderBottom:"0.5vh solid rgb(95,206,102)"}} onClick={()=>setStatus(1)} className="contestSelect">내가 찜한 공모전</h4>:
                    <h4 onClick={()=>setStatus(1)} className="contestSelect">내가 찜한 공모전</h4>}
                    {status===1? 
                    <h4 onClick={()=>setStatus(0)} className="projectSelect">내가 찜한 프로젝트</h4>:
                    <h4 style={{borderBottom:"0.5vh solid rgb(95,206,102)"}} onClick={()=>setStatus(0)} className="projectSelect">내가 찜한 프로젝트</h4>}
                 
                </Tag>
                {status===1?
                <ContestList>
                {selectContest.map((item)=>{
                        return(
                            <ContestLists>
                            <div style={{position:"absolute",backgroundColor:"white",marginLeft:"0.5vw",marginTop:"1vw",width:"1.8vw",height:"1.8vw",borderRadius:"50%",display:"flex",justifyContent:"center"}}>
                               <img src="https://cdn-icons-png.flaticon.com/128/833/833472.png" alt="heart"/>
                            </div>
                            <ContestListImage>
                                <img src={item.img} alt="contestimage"/>
                            </ContestListImage>
                            <ContestGather>
                                <h5>{item.gather}</h5>
                            </ContestGather>
                            <ContestName>
                                <h4>{item.name}</h4>
                            </ContestName>
                            <ContestDate>
                                <h5>{item.date}</h5>
                            </ContestDate>
                        </ContestLists>
                        )
                    })}
                   
                </ContestList>:
                <ContestList>
                {selectProject.map((item)=>{
                        return(
                            <ContestLists>
                            <div style={{position:"absolute",backgroundColor:"white",marginLeft:"0.5vw",marginTop:"1vw",width:"1.8vw",height:"1.8vw",borderRadius:"50%",display:"flex",justifyContent:"center"}}>
                                <img src="https://cdn-icons-png.flaticon.com/128/833/833472.png" alt="heart"/>
                            </div>
                            <ContestListImage>
                                <img src={item.img} alt="contestimage"/>
                            </ContestListImage>
                            <ContestGather>
                                <h5>{item.gather}</h5>
                            </ContestGather>
                            <ContestName>
                                <h4>{item.name}</h4>
                            </ContestName>
                            <ContestDate>
                                <h5>{item.date}</h5>
                            </ContestDate>
                        </ContestLists>
                        )
                    })}
                    
                </ContestList>}
                </Container2>
       </Container>
    )
}
export default MyPageSelect;