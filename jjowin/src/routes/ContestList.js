import {Link} from "react-router-dom";
import styled from "styled-components";
import { useState,useEffect } from "react";

const Container  = styled.div`
    height: 20vh;
    background-color: powderblue;
    text-align: center;
    justify-content: center;
    h1{
        padding-top: 8vh;
        margin-top: 0;
    }
`;
const Image = styled.img`
    width:10vw;
    height:24vh;
`;
const Collection = styled.div`
    margin-left:200px;
    margin-top: 8vh;
    h2{
        text-align: center;
    }
    a{
        text-decoration: none;
        color:black;
    }
`;
const Input = styled.input`
    margin-left: 1vw;
    margin-top: 1vh;
    width: 7vw;
    height: 2vh;
`;
function ContestList(){
    const contest =[
       {
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㅈㅇ 엑셀러레이션"
       },
       {
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㅋㄹㅋ 엑셀러레이션"
       },
       {
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㄹㅇ 엑셀러레이션"
       },
       {
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "창업 엑셀러레이션"
       },
       {
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "창업 엑셀러레이션"
       },
       {
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "창업 엑셀러레이션"
       },
       {
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㅎㅎ 엑셀러레이션"
       },
       {
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㅋㅋ 엑셀러레이션"
       },
       {
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㅎㅎ 엑셀러레이션"
       },
       {
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㅈㅈ 엑셀러레이션"
       },
       {
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㄷㄷ 엑셀러레이션"
       },
       {
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㄷㄷ 엑셀러레이션"
       },
       {
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㄷㄷ 엑셀러레이션"
       },
    ]
    const [key,SetKey] = useState("");
   
    let search=contest.filter((item)=>{
        return(item.title.includes(key));
    })
    
    const Change = (e) =>{
        SetKey(e.target.value);
    };
    

    return(
        <>
       <Container>
         <h1>공모전프로젝트</h1>
       </Container>
        <div style={{display:"flex",marginLeft:"7vw",marginTop:"3vh"}}>
        <h5>검색창:</h5>
        <Input onChange={Change}></Input>
        </div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",textAlign:"center",paddingRight:"4vw"}}>
        {search.map((item)=>{
            return(
                <Collection>
                    <a href="contestList/contestDetail">
                    <Image src={item.src}></Image>
                    <h2>{item.title}</h2>
                    </a>
               </Collection>
               
            )
        })}
        </div>
       </>
    )
}
export default ContestList;