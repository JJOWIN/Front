import {Link,useNavigate} from "react-router-dom";
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
const AddToy = styled.button`
        border-radius:50%;
        border: 1px solid black;
        width:3vw;
        height:6vh;
        font-size: 2vw;
        text-align: center;
        justify-content: center;
        align-items: center;
        position: fixed;
        right:2vw;
        bottom:2vh;
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
function ToyProject(){
    const navigate = useNavigate();
    const contest =[
        {
            toyProjectNum: 1,
            src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
            title: "ㅈㅇ 엑셀러레이션"
           },
           {
            toyProjectNum: 2,
            src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
            title: "ㅋㄹㅋ 엑셀러레이션"
           },
           {
            toyProjectNum: 3,
            src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
            title: "ㄹㅇ 엑셀러레이션"
           },
           {
            toyProjectNum: 4,
            src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
            title: "창업 엑셀러레이션"
           },
           {
            toyProjectNum: 5,
            src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
            title: "창업 엑셀러레이션"
           },
           {
            toyProjectNum: 6,
            src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
            title: "창업 엑셀러레이션"
           },
           {
            toyProjectNum: 7,
            src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
            title: "ㅎㅎ 엑셀러레이션"
           },
           {
            toyProjectNum: 8,
            src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
            title: "ㅋㅋ 엑셀러레이션"
           },
           {
            toyProjectNum: 9,
            src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
            title: "ㅎㅎ 엑셀러레이션"
           },
           {
            toyProjectNum: 10,
            src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
            title: "ㅈㅈ 엑셀러레이션"
           },
           {
            toyProjectNum: 11,
            src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
            title: "ㄷㄷ 엑셀러레이션"
           },
           {
            toyProjectNum: 12,
            src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
            title: "ㄷㄷ 엑셀러레이션"
           },
           {
            toyProjectNum: 13,
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
        <AddToy onClick={()=>navigate("../toyprojectList/createToyProject")}>+</AddToy>
       <Container>
         <h1>토이프로젝트</h1>
       </Container>
        <div style={{display:"flex",marginLeft:"7vw",marginTop:"3vh"}}>
        <h5>검색창:</h5>
        <Input onChange={Change}></Input>
        </div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",textAlign:"center",paddingRight:"4vw"}}>
        {search.map((item)=>{
            const url =`/toyprojectList/toyProjectDetail/${item.toyProjectNum}`;
            return(
                <Collection>
                {}
                    <a href={url}>
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
export default ToyProject;