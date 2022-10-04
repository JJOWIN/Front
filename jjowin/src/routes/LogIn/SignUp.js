import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { postSignup } from '../../api.js'
import "../../index.css"

const Container = styled.div`
    width:42%;
    height:100%;
    margin-top: 5vh;
    font-family: 'SUIT';
    z-index: 2;
`;
const Wraps = styled.div`
    width:30%;
    height:210vh;
`;
const HTMLS = styled.div`
    display:flex;
    margin-right: -25px;
`;
const Container1 = styled.div`
    display: flex;
    font-size:1.1vw;
    font-family: 'SUIT';
    font-weight: 700;
`;
const Container2 = styled.div`
    margin-top: 4vh;
    .title{
        font-family: 'SUIT';
        font-size:0.8vw;
        font-weight: 700;
    }
    h5{
        font-size: 1vw;
    } 
    
    .id,.pw,.pwcheck{
        width:70%;
    }
    .name,.nick{
        width:86%;
    }
    .role{
        width:100%;
    }
    input:focus{
        outline-color:#14B91C;
        background-color: white;
    }
    .skill{
        background-color: #F6F6F6;
        width:92%;
        height:5.3vh;
        border-radius:0.5vw;
        justify-content: center;
        align-items: center;        
        h1{
            font-family: 'SUIT';
        }
    }
    .introduce{
        border: none;
        background-color: #F6F6F6;
        border-radius: 0.5vw;
        margin-top:1vh;
        width:40vw;
        z-index: 3;
    }
`;
const Button = styled.button`
    width:9vw;
    height: 4.5vh;
    border-radius:  0.5vw;
    border: 0;
    font-size: 20px;
    margin-top:1vh;
    background-color: #14B91C;
    color:white;
    font-size:0.7vw;
    margin-left: 0.5vw;
    cursor: pointer;
`;
const ID = styled.input`
    height: 4.5vh;
    border-radius: 0.5vw;
    background-color: #F6F6F6;
    border: none;
    margin-top:1vh;
    padding-left: 1vw;
    ::placeholder{
        font-family: 'SUIT';
    }
`;
const Select = styled.select`
    margin: 0;
	min-width: 0;
	display: block;
	width: 92%;
	padding: 15px 15px;
	font-size: 0.7vw;
    border-radius:  0.5vw;
    border: none;
	color: inherit;
    font-family: 'SUIT';
	background-color: #F6F6F6;
	&:focus {
        border:0.15vw solid;
		border-color: #14B91C;
        background-color: white;
	}


`;
const CheckBox = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 0.3vh;
  width: 2vh;
  height: 2vh;
  background-color: white;
  margin-right:0.5vw;
  &:checked {
    border-color: #14b91c;
    background-image: url("https://user-images.githubusercontent.com/58421346/193802482-51e45b16-679b-4ca4-8411-de7a3e24feec.png");
    background-size: 70% 70%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: white;
  }
`

const Input = styled.input`
    width:80%;
    height:10vh;
`;
const Agree = styled.div`
    overflow: auto;
    height:100px;
    width:90%;
    border: none;
    background-color: #F6F6F6;
    padding:1.5vw;
     ::-webkit-scrollbar{
        background-color: #B0B0B0;
        width: 5px;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background-color:#14B91C;
        border-radius: 10px;
        height:1px;
    }
`;
const Span = styled.span`
    white-space: pre-wrap;
   
`;
const SelectBox = styled.div`
    width:87%;
    height:5.2vh;
    display: flex;
    align-items: center;
    border-radius:0.5vw;
    background-color:#F6F6F6;
    cursor:pointer;
    padding-left:1vw;
    font-size:0.7vw;
    img{
        max-width:5%;
        position: relative;
        margin-left:14.5vw;
    }
`;
const SelectOption = styled.div`
    height:20vh;
    overflow-y: scroll;
    margin-top:1vh;
    z-index: 2;
    div{
        font-size:0.7vw;
        display: flex;
        width:82%;
        height:5.2vh;
        align-items: center;
        border-radius:0.5vw;
        padding-left:1vw;
        background-color:white;
        &:hover{
            background-color:#F6F6F6;
        }
        font-family: 'SUIT';
        
    }
   
`;
const RolesContainer = styled.div`
display:flex;
align-items: center;
flex-wrap:wrap;
margin-top:1vh;
width:100%;
`
const Hr = styled.hr`
border:0;
height:2px;
background-color:#f4f4f4;
`

const Inputs = styled.input`
box-sizing: border-box;
background-color:#f6f6f6;
border:none;
border-radius: 10px;
height: 5vh;
`
const InputRole = styled(Inputs)`
width:25%;
display: flex;
font-family: 'SUIT';
align-items: center;

padding:0 0 0 2vh;
::placeholder{
font-family: 'SUIT';
font-weight: 500;
    color:darkgray;
    margin-left: 3vw;
}
`

const AddButton = styled.button`
    box-sizing: border-box;
    margin-left: auto;
    background-color:#14b91c;
    color:white;
    border:none;
    font-family: 'SUIT';
    border-radius: 10px;
    height: 4vh;
    padding:0 2vh 0 2vh;
`
const DeleteButton = styled.button`
    box-sizing: border-box;
    margin-left: auto;
    background-color:#ffffff;
    font-family: 'SUIT';
    color:#ff4921;
    border:solid 1px #ff4921;
    border-radius: 10px;
    height: 4vh;
    padding:0 2vh 0 2vh;
`
const Regist = styled.button`
    border:0;
    width:8vw;
    height:5vh;
    border-radius: 0.5vw;
`;
function SignUp(){
    const [proficiency, setProficiency] = useState(new Array(5).fill(false))
    const [agree,setAgree]=useState([0,0,0]);
    const [nickname,setNickname]=useState(0);
    const [pw,setPw]=useState(0);
    const [checkPw,setCheckPw]=useState(0);
    const [name,setName]=useState(0);
    const [email,setEmail]=useState(0);
    const [emailCheck,setEmailCheck]=useState(0);   
    const [role,setRole]=useState(0);
    const [skill,setSkill]=useState([{name:'', skillProficiency:0}]);
    const [pwSame,setPwSame]=useState(0);
    const [open,setOpen]=useState(0);
    // 토이프로젝트 직무
    const [toyProjectRoles, setToyProjectRoles] = useState([])
    // 토이프로젝트 직무 입력
    const [inputToyProjectRole, setInputToyProjectRole] = useState('')
    // 토이프로젝트 인원 입력
    const [inputToyProjectRoleNum, setInputToyProjectRoleNum] = useState('')
    // 학교사람만
    const [onlySchool, setOnlySchool] = useState(false)
    // 토이프로젝트 내용
    const [toyProjectContent, setToyProjectContent] = useState("")
    // 토이프로젝트 스킬
    const [toyProjectSkills, setToyProjectSkills] = useState([])
    // 토이프로젝트 스킬 입력
    const [inputToyProjectSkills, setInputToyProjectSkills] = useState('')
    let navigate = useNavigate();
   
    const OPTIONS2 = [
        { value: 3, name: "상" },
        { value: 2, name: "중" },
        { value: 1, name: "하" },
    ];
    const { mutate, isLoading } = useMutation(postSignup, {
        onSuccess: data => {
          console.log(data);
          alert(data.resultMsg)
          if(data.resultCode === 0){
            navigate('/')
          }
          
        },
        onError: () => {
          alert("there was an error")
        },
      });
      
        const SelectBox2 = (props) => {
            const handleChange = (e) => {
                let tmp = [...skill]
               tmp[props.index].skillProficiency = e.target.value
               setSkill([...tmp])
               console.log(tmp)
            };
            return (
                <Select onChange={handleChange} value={skill[props.index].skillProficiency}>
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
  
        const ClickProficiency = (index) => {
            let tmp = proficiency.map((e, i) => {
                if (i <= index.index) return true
                else return false
            })
            setProficiency([...tmp])
    
        }
    const Check1=()=>{
        if(agree[0]){
            agree.splice(0,1);
            setAgree([0,...agree])
        }
        else{
            agree.splice(0,1);
            setAgree([1,...agree])
        }   
        }

    const Check2=()=>{
        if(agree[1]){
            let first=agree[0];
            let end=agree[2];
            setAgree([first,0,end])
        }
        else{
            let first=agree[0];
            let end=agree[2];
            setAgree([first,1,end])
        }
    }
    const Check3=()=>{
        if(agree[2]){
            agree.pop();
            setAgree([...agree,0])
        }
        else{
            agree.pop();
            setAgree([...agree,1])
        }
    }
    
    const ButtonClick=()=>{
        mutate(
            {
                "name": "쪼인",
                "nickname": "쪼인",
                "email": "jjowin23@gmail.com",
                "password": "whdls23@",
                "job": "직무",
                "jobLevel": 1,
                "selfIntro": "자기 소개",
                "isReceiveMail": true,
                "userSkills": [
                    {
                            "name": "스킬 이름",
                            "level" : 1
                    },
                ]
             }
        );
    }
    const handleChangePw=(e)=>{
        setPw(e.target.value);
    }
    const handleChangePwCheck=(e)=>{
        if(pw===e.target.value)setPwSame(1);
        else setPwSame(0);
    }
    const handleChangeName=(e)=>{
        setName(e.target.value);
    }
    const handleChangeNickName=(e)=>{
        setNickname(e.target.value);
    }
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value);
    }
    // 토이프로젝트 직무 추가 버튼 클릭 시
    const onClickAddToyProjectRolesHandler = () => {
        setToyProjectRoles([...toyProjectRoles, { role: inputToyProjectRole, num: inputToyProjectRoleNum }])
    }
    // 토이프로젝트 직무 삭제 버튼 클릭 시
    const onClickDeleteToyProjectRolesHandler = (index) => {
        let tmp = [...toyProjectRoles]
        tmp.splice(index, 1)
        setToyProjectRoles([...tmp])
    }
    // 토이프로젝트 직무 입력 시
    const onToyProjectRoleHandler = (event) => {
        setInputToyProjectRole(event.target.value)
        // console.log(toyProjectRoles)
    }

    // 토이프로젝트 인원 입력 시
    const onToyProjectRoleNumHandler = (event) => {
        setInputToyProjectRoleNum(event.target.value)
    }


    // 토이프로젝트 스킬 입력 시
    const onToyProjectSkillsHandler = (event) => {
        setInputToyProjectSkills(event.target.value)
        // console.log(toyProjectSkills)

    }

    // 토이프로젝트 학교만 체크박스 선택 시
    const onToyProjectSchoolHandler = () => {
        setOnlySchool(!onlySchool)
        // console.log(school)
    }
    // 토이프로젝트 스킬 추가 버튼 클릭 시
    const onClickAddToyProjectSkillsHandler = () => {
        setToyProjectSkills([...toyProjectSkills, inputToyProjectSkills])
    }
    // 토이프로젝트 스킬 삭제 버튼 클릭 시
    const onClickDeleteToyProjectSkillsHandler = (index) => {
        let tmp = [...toyProjectSkills]
        tmp.splice(index, 1)
        setToyProjectSkills([...tmp])
    }
    return(
        <HTMLS>
        <Wraps style={{marginLeft:"-9px"}}>
        </Wraps>
        <Container> 
            <Container1>
                회원가입
            </Container1>

            < Container2>
                <div className="title">본인인증(선택)</div>
                <div style={{display:"flex"}}>
                <ID className="id" placeholder="이메일 입력" onChange={handleChangeEmail}/>
                <Button>중복확인</Button>
                </div>
            </Container2>

             <Container2>
                <div className="title">비밀번호</div>
                <ID className="pw" tyle={{display:"block"}} placeholder="PW"onChange={handleChangePw}/>
                <ID className="pwcheck" placeholder="PW확인" onChange={handleChangePwCheck}/>
              {pwSame===1?<h5 style={{marginLeft:"1vw",display:"inline",color:"green"}}>v</h5>: <h5 style={{marginLeft:"1vw",display:"inline",color:"red"}}>x</h5>}
             
             
            </Container2>

            <Container2 style={{display:"flex"}}>
                <div style={{width:"50%"}}>              
                    <div className="title">이름</div>
                    <ID className="name" placeholder="이름" onChange={handleChangeName}/>
                </div>
                <div style={{width:"50%"}}>          
                    <div className="title">닉네임</div>
                    <ID className="nick" placeholder="닉네임" onChange={handleChangeNickName}/>
                </div>

            </Container2>
            <Container2 style={{display:"flex"}}>
                <div style={{width:"50%"}}>
                    <div className="title">직무</div>
                    {open?
                    <SelectBox style={{border:"0.15vw solid #14B91C"}} onClick={()=>{setOpen(!open)}}>
                        <div>{role} <img src="https://user-images.githubusercontent.com/44117975/193820980-92d58c2f-94b5-4782-b07e-c3306373f3fe.png" alt="d"/></div>
                    </SelectBox>:
                    <SelectBox onClick={()=>{setOpen(!open)}}>
                        <div>{role} <img src="https://user-images.githubusercontent.com/44117975/193821139-05a11cc9-72fc-4445-9cef-871227c10e5d.png" alt="d"/></div>
                    </SelectBox>}
                    {open?
                    <SelectOption>
                        {role==="직무1"?
                        <div style={{color:"#14B91C"}}onClick={()=>{setRole("직무1"); setOpen(!open)}}>직무1</div>:
                        <div onClick={()=>{setRole("직무1"); setOpen(!open)}}>직무1</div>}
                         {role==="직무2"?
                        <div style={{color:"#14B91C"}}onClick={()=>{setRole("직무2"); setOpen(!open)}}>직무2</div>:
                        <div onClick={()=>{setRole("직무2"); setOpen(!open)}}>직무2</div>}
                         {role==="직무3"?
                        <div style={{color:"#14B91C"}}onClick={()=>{setRole("직무3"); setOpen(!open)}}>직무3</div>:
                        <div onClick={()=>{setRole("직무3"); setOpen(!open)}}>직무3</div>}
                         {role==="직무4"?
                        <div style={{color:"#14B91C"}}onClick={()=>{setRole("직무4"); setOpen(!open)}}>직무4</div>:
                        <div onClick={()=>{setRole("직무4"); setOpen(!open)}}>직무4</div>}
                         {role==="직무5"?
                        <div style={{color:"#14B91C"}}onClick={()=>{setRole("직무5"); setOpen(!open)}}>직무5</div>:
                        <div onClick={()=>{setRole("직무5"); setOpen(!open)}}>직무5</div>}
                       
                    </SelectOption>:""
                    }
                </div>
                <div style={{width:"50%"}}>
                <div className="title">숙련도</div>
                    <div className="skill" style={{ display: "flex" }}>
                        {proficiency.map((item, index) => {
                            if (item) {
                                return (
                                    <h1 style={{color:"#14B91C"}}key={index} onClick={() => { ClickProficiency({ index }) }}>★</h1>
                                );
                            }
                            else {
                                return (
                                    <h1 style={{color:"#D9D9D9"}}  key={index} onClick={() => { ClickProficiency({ index }) }}>★</h1>
                                );
                            }
                        })}

                    </div>
                    </div>
            </Container2>
            
            <Container2>
                <div className="title">자기소개(선택)</div>
                <Input className="introduce"placeholder="내용을 입력해주세요"></Input>
            </Container2>

            <Container2>          
            
            <div className="title">스킬</div>
            <RolesContainer>
                        <InputRole value={inputToyProjectRole.role} onChange={onToyProjectSkillsHandler} />
                        <AddButton type="button" onClick={onClickAddToyProjectSkillsHandler}>추가</AddButton>  
                    </RolesContainer>
            </Container2>  
            
                    {toyProjectSkills.length ? <Hr></Hr>:<></>}
                {toyProjectSkills.map((item, index) => (
                    <RolesContainer>
                        <InputRole as='p'>{item}</InputRole>
                        <DeleteButton type="button" onClick={()=>onClickDeleteToyProjectSkillsHandler(index)}>삭제</DeleteButton>
                    </RolesContainer>
                ))}      
            <Container2>
                <h3>개인정보 이용 동의(필수)</h3>
                <Agree>
                <Span>본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.</Span></Agree>
                <div style={{display:"inline-flex",marginTop:"1vh"}}>
                <CheckBox type="checkbox" />
                <div style={{marginTop:"0.3vh",fontWeight:"500"}}>동의합니다</div>
                </div>
            </Container2>

            <Container2>
                <h3>이용약관 동의(필수)</h3>
                <Agree>
                <Span>본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.</Span></Agree>
<div style={{display:"inline-flex",marginTop:"1vh"}}>
            <CheckBox type="checkbox" />
            <div style={{marginTop:"0.3vh",fontWeight:"500"}}>동의합니다</div>
                </div>
            </Container2>

            <Container2>
                <h3>이메일 수신 동의(선택)</h3>
                <Agree>
                <Span>본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.</Span></Agree>
            <div style={{display:"inline-flex",marginTop:"1vh"}}>
            <CheckBox type="checkbox" />
                <div style={{marginTop:"0.3vh",fontWeight:"500"}}>동의합니다</div>
                </div>
            </Container2>
            <Container2>
            <Regist style={{marginLeft:"24vw",marginRight:"0.5vw"}}onClick={ButtonClick}>취소</Regist>
            <Regist style={{backgroundColor:"#14B91C",color:"white"}} onClick={ButtonClick}>회원가입</Regist>
           </Container2>
        </Container>
        <Wraps style={{marginRight:"-9px"}}> 
        </Wraps>
        </HTMLS>
    )
}
export default SignUp;