import {Link} from "react-router-dom"
import styled from "styled-components";
import { useEffect, useState } from "react";
const Container = styled.div`
    width:40%;
    height:100%;
    margin-top: 5vh;
`;
const Wraps = styled.div`
    width:30%;
    height:210vh;
    background-color: #dee2e6;
`;
const HTMLS = styled.div`
    display:flex;
    margin-right: -25px;
`;
const Container1 = styled.div`
    display: flex;
    margin-top: 4vh;
`;
const Contianer2 = styled.div`
    margin-top: 4vh;
    margin-left: 5vw;
`;
const Button = styled.button`
    width:7vw;
    height: 4vh;
    border-radius: 5px;
    border: 0;
    font-size: 20px;
    background-color: darkgray;
    margin-left: 3vw;
`;
const ID = styled.input`
    width:20vw;
    height: 4vh;
    border-radius: 5px;
    border: 1px solid darkgray;
`;

const Select = styled.select`
    margin: 0;
	min-width: 0;
	display: block;
	width: 58%;
	padding: 15px 15px;
	font-size: inherit;
	border-radius: 4px;
	color: inherit;
	background-color: transparent;
	&:focus {
		border-color: red;
	}
`;
const AgreeCheck=styled.input`
    margin-top: 1vh;
    width: 1.2vw;
    height: 1.2vh;
`;
const Input = styled.input`
    width:80%;
    height:10vh;
`;
const Agree = styled.div`
    overflow: auto;
    height:100px;
    width:80%;
    border: 1px solid black;
`;
const Span = styled.span`
    white-space: pre-wrap;
   
`;

function SignUp(){
    const [skillOrigin,setSkillOrigin] = useState([1,2,3,4,5]);
    const [skillNew,setSkillNew] = useState([]);
    const [agree,setAgree]=useState([0,0,0]);
    const [id,setId]=useState();
    const [checkId,setCheckId]=useState();
    const [pw,setPw]=useState();
    const [checkPw,setCheckPw]=useState();
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [emailCheck,setEmailCheck]=useState();
    const [role,setRole]=useState();
    const [skill,setSkill]=useState();
    
    const OPTIONS = [
        { value: "developer", name: "개발자" },
        { value: "designer", name: "UI/UX 디자이너" },
        { value: "orange", name: "개발자2" },
    ];
        const SelectBox = (props) => {
            const handleChange = (e) => {
               setRole(e.target.value);
               console.log(e.target.value)
            };
            return (
                <Select onChange={handleChange}>
                    {props.options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.name}
                        </option>
                    ))}
                </Select>
                
            );
        };

  
    const ClickOrigin=(index)=>{
        console.log(skillOrigin)
        setSkillNew([1,...skillNew]);
        skillOrigin.splice(-index.index+2);
    }
    const ClickNew=(index)=>{
        console.log(skillNew)
        setSkillOrigin([1,...skillOrigin]);
        skillNew.splice(0,index.index+1)
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
        console.log(id,pw,checkPw,name,email,role)
    }
    const handleChangeId=(e)=>{
        setId(e.target.value);
    }
    const handleChangePw=(e)=>{
        setPw(e.target.value);
    }
    const handleChangePwCheck=(e)=>{
        setCheckPw(e.target.value);
    }
    const handleChangeName=(e)=>{
        setName(e.target.value);
    }
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value);
    }
    
    return(
        <HTMLS>
        <Wraps style={{marginLeft:"-9px"}}>
        </Wraps>
        <Container> 
            <Container1 style={{justifyContent:"center"}}>
                <div style={{width:"100px",height:"100px",backgroundColor:"#AD9AEE",borderRadius:"50%",margin:0}}></div>
            </Container1>

           <Contianer2>
              <h3>ID</h3>
              <div style={{display:"flex"}}>
              <ID placeholder="ID" onChange={handleChangeId} />
              <Button>중복확인</Button>
              </div>
          </Contianer2>

             <Contianer2>
                <h3>PW</h3>
                <ID placeholder="PW"onChange={handleChangePw}/>
            </Contianer2>

            <Contianer2>
              <h3>PW확인</h3>
              <ID placeholder="PW확인" onChange={handleChangePwCheck}/>
              <h5 style={{color:"green"}}>일치</h5>
              <h5 style={{color:"red"}}>불일치</h5>
            </Contianer2>

             <Contianer2>
                <h3>이름</h3>
                <ID placeholder="이름" onChange={handleChangeName}/>
            </Contianer2>

            < Contianer2>
                <h3>본인인증(선택)</h3>
                <div style={{display:"flex"}}>
                <ID placeholder="이메일 입력" onChange={handleChangeEmail}/>
                <Button>인증받기</Button>
                </div>
                <ID style={{marginTop:"1vh"}}placeholder="인증번호 입력" />
            </Contianer2>

            <Contianer2>
                <h3>직무</h3>
                <SelectBox options={OPTIONS} defaultValue="developer"></SelectBox>
            </Contianer2>

            <Contianer2>
            <h3>숙련도</h3>
            <div style={{display:"flex"}}>
                {skillOrigin.map((item,index)=>{
                    return(
                      <h1 key={index} onClick={()=>{ClickOrigin({index})}}>O</h1>  
                    );
                })}
                {skillNew.map((item,index)=>{
                    return(
                      <h1 key={index} onClick={(index)=>{ClickNew(index)}}>X</h1>  
                    );
                })}
            </div>
            </Contianer2>
            
            <Contianer2>
                <h3>자기소개(선택)</h3>
                <Input placeholder="내용을 입력해주세요"></Input>
            </Contianer2>

            <Contianer2>
                <h3>스킬</h3>
            </Contianer2>

            <Contianer2>
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
                <AgreeCheck type="checkbox" onClick={Check1}/>
                <label>동의합니다</label>
            </Contianer2>

            <Contianer2>
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
                <AgreeCheck type="checkbox" onClick={Check2}/>
                <label>동의합니다</label>
            </Contianer2>

            <Contianer2>
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
                <AgreeCheck type="checkbox" onClick={Check3}/>
                <label>동의합니다</label>
            </Contianer2>
            <Contianer2>
             <button style={{width:"80%",height:"5vh",borderRadius:"9px"}}onClick={ButtonClick}>회원가입</button>
           </Contianer2>
        </Container>
        <Wraps style={{marginRight:"-9px"}}> 
        </Wraps>
        </HTMLS>
    )
}
export default SignUp;