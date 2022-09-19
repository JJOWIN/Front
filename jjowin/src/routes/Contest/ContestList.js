import { useState } from "react";
import styled from "styled-components";
import ContestProjectList from "./ContestProjectList";
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
    width:100%;
    height:70%;
`;
const Input = styled.input`
    margin-left: 1vw;
    margin-top: 1vh;
    width: 7vw;
    height: 2vh;
`;
const Bar = styled.div`
display:flex;
justify-content:space-between;
width:62%;
margin:auto;
margin-top:3vh;

`
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
const Select = styled.select`
    width: 4vw;
    height: 5vh;
    border: none;
    font-size:15px;
    border-radius: 20px;
    background-color:#e8f8e9;
    color:#14b91c;
    text-align-last: center;
    text-align: center;
`;
const Search = styled.div`
    width:14%;
    align-items: center;
    justify-content: left;
    display: flex;
    margin-left: 2vw;
    input{
        width:100%;
        height:5vh;
        border-radius: 20px;
        background-color: rgb(248,248,248);
        border:none;
        font-size:0.7vw;
        padding:0 0 0 2vh;
        ::placeholder{
            color:darkgray;
            margin-left: 3vw;
        }
    }
    img{
        width:1.5vw;
        position: absolute;
        right: 19.5vw;
        cursor:pointer;
    }
`;
const ContentList = styled.div`
display:flex;
flex-wrap:wrap;
// justify-content:space-between;
width:62%;
margin:auto;
margin-top:3vh;
`
const Title = styled.p`
font-size:15px;
        font-weight:1000;
        margin:13px 0px 3px 0px;
` 
const Date = styled.p`
font-size:14px;
        font-weight:500;
        margin:0px;
` 
const Content = styled.div`
width:23%;
padding:10px;
// text-align:center;
    div{
        margin-top:10px;
        display:inline-block;
        color:#4fcb55;
        border:solid 1px #4fcb55;
        border-radius:15px;
        padding:5px;
        font-size:13px;
        // float:left;
    }
    a{
        text-decoration: none;
        color:black;
    }
`;
function ContestList(){
    const contest =[
        {
         contesttNum: 1,
         src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
         title: "과학 엑셀러레이션",
         field:'과학',
         state:'모집중',
        },
        {
         contesttNum: 2,
         src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
         title: "과학 엑셀러레이션",
         state:'모집중',
         field:'과학'
        },
        {
         contesttNum: 3,
         src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
         title: "과학 엑셀러레이션",
         state:'모집중',
         field:'과학'
        },
        {
         contesttNum: 4,
         src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
         title: "개발 엑셀러레이션",
         state:'모집중',
         field:'개발'
        },
        {
         contesttNum: 5,
         src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
         title: "개발 엑셀러레이션",
         state:'모집중',
         field:'개발'
        },
        {
         contesttNum: 6,
         src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
         title: "개발 엑셀러레이션",
         state:'모집중',
         field:'개발'
        },
        {
         contesttNum: 7,
         src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
         title: "개발 엑셀러레이션",
         state:'모집중',
         field:'개발'
        },
        {
         contesttNum: 8,
         src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
         title: "개발 엑셀러레이션",
         state:'모집중',
         field:'개발'
        },
        {
         contesttNum: 9,
         src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
         title: "디자인 엑셀러레이션",
         state:'모집중',
         field:'디자인'
        },
        {
         contesttNum: 10,
         src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
         title: "디자인 엑셀러레이션",
         state:'모집중',
         field:'디자인'
        },
        {
         contesttNum: 11,
         src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
         title: "디자인 엑셀러레이션",
         state:'모집중',
         field:'디자인'
        },
        {
         contesttNum: 12,
         src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
         title: "디자인 엑셀러레이션",
         state:'모집중',
         field:'디자인'
        },
        {
         contesttNum: 13,
         src: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
         title: "디자인 엑셀러레이션",
         state:'모집중',
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
            let value = e.target.value 
            if(value!=="false"){
                let tmp = contest.filter((e)=>e.field === value)
                console.log(tmp)
                setContestList(tmp)
            }
            else setContestList(contest)
        };
        return (
            <Select onChange={handleChange} value={fieldValue}>
                {props.options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        // defaultValue={props.defaultValue === option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </Select>  
        );
    };
    return(
        <>
        <Bar>
        <SelectBox options={OPTIONS} defaultValue={false}></SelectBox>
        <Search><input placeholder="디자인공모전"/><img src="https://cdn-icons-png.flaticon.com/128/2801/2801881.png" alt="searchIcon"/></Search>
        {/* <Input onChange={Change}></Input> */}
        </Bar>
        <ContentList>
        {
        contestList.map((item)=>{
            const url =`/contestList/contestProjectDetail/${item.contesttNum}`;
            return(
                <Content>
                <a href={url}>
                    <Image src={item.src}></Image>
                    <div>{item.state}</div>
                    <Title>{item.title}</Title>
                    <Date>22.08.09-22.08.12</Date>
                    </a>
               </Content>
            )
        })}
        </ContentList>
        {/* <ContestProjectList/> */}
        </>
    )
}
export default ContestList;