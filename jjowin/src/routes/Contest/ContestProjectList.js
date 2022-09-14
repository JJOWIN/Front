import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
const AddContestProject = styled.button`
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
function ContestProjectList(){
    const contest =[
       {
        contesttNum: 1,
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㅈㅇ 엑셀러레이션",
        field:'과학'
       },
       {
        contesttNum: 2,
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㅋㄹㅋ 엑셀러레이션",
        field:'과학'
       },
       {
        contesttNum: 3,
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㄹㅇ 엑셀러레이션",
        field:'과학'
       },
       {
        contesttNum: 4,
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "창업 엑셀러레이션",
        field:'개발'
       },
       {
        contesttNum: 5,
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "창업 엑셀러레이션",
        field:'개발'
       },
       {
        contesttNum: 6,
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "창업 엑셀러레이션",
        field:'개발'
       },
       {
        contesttNum: 7,
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㅎㅎ 엑셀러레이션",
        field:'개발'
       },
       {
        contesttNum: 8,
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㅋㅋ 엑셀러레이션",
        field:'개발'
       },
       {
        contesttNum: 9,
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㅎㅎ 엑셀러레이션",
        field:'디자인'
       },
       {
        contesttNum: 10,
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㅈㅈ 엑셀러레이션",
        field:'디자인'
       },
       {
        contesttNum: 11,
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㄷㄷ 엑셀러레이션",
        field:'디자인'
       },
       {
        contesttNum: 12,
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㄷㄷ 엑셀러레이션",
        field:'디자인'
       },
       {
        contesttNum: 13,
        src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        title: "ㄷㄷ 엑셀러레이션",
        field:'디자인'
       },
    ]
    const [key,SetKey] = useState("");
    const [contestList,setContestList] = useState(contest);
    const [fieldValue, setFieldValue] =useState(false);
    const navigate = useNavigate();
    let search=contest.filter((item)=>{
        return(item.title.includes(key));
    })
    
    const Change = (e) =>{
        SetKey(e.target.value);
    };
    const onClickSearch=()=>{
        console.log(fieldValue)
        if(fieldValue){
            let tmp = contest.filter((e)=>e.field === fieldValue)
            console.log(tmp)
            setContestList(tmp)
        }
        console.log(contestList)

    }
    const OPTIONS = [
        { value: false, name:'선택'},
        { value: "개발", name: "개발" },
        { value: "디자인", name: "디자인" },
        { value: "과학", name: "과학" },
    ];
    const SelectBox = (props) => {
        const handleChange = (e) => {
            setFieldValue(e.target.value);
        };
        return (
            <select onChange={handleChange} value={fieldValue}>
                {props.options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        // defaultValue={props.defaultValue === option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </select>  
        );
    };

    return(
        <>
        <AddContestProject onClick={()=>navigate("/")}>+</AddContestProject>
       <Container>
         <h3>공모전프로젝트</h3>
       </Container>
        <div style={{display:"flex",marginLeft:"7vw",marginTop:"3vh"}}>
        <h5>검색창:</h5>
        <Input onChange={Change}></Input>
        <h5>분야</h5>
        <SelectBox options={OPTIONS} defaultValue={false}></SelectBox>
        <button onClick={onClickSearch}>검색</button>

        </div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",textAlign:"center",paddingRight:"4vw"}}>
        {
        contestList.map((item)=>{
            const url =`/contestList/contestProjectDetail/${item.contesttNum}`;
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
export default ContestProjectList;