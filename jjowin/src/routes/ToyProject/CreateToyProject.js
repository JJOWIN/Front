import React, { useState } from 'react'
import styled from "styled-components";
import ReactQuill from 'react-quill';
import '../../quill.snow.css';

const Container = styled.div`
// display:flex;
flex-wrap:wrap;
// justify-content:space-between;
width:40%;
margin:auto;
margin-top:3vh;
`
const Title = styled.p`
margin:40px 0px 15px 0px;
font-weight:800;
`
const FieldContainer = styled.div`
width:100%;
box-sizing: border-box;
// display:flex;
// flex-wrap:wrap;
background-color:#f6f6f6;
border-radius: 10px;
padding:2vh;
`
const Input = styled.input`
box-sizing: border-box;
background-color:#f6f6f6;
border:none;
border-radius: 10px;
height: 5vh;
`
const Text = styled.span`
margin:0vh 2vh 0vh 1vh;
`
const InputName = styled(Input)`
width:100%;
padding:0 0 0 2vh;
::placeholder{
    color:darkgray;
    margin-left: 3vw;
}
`
const InputRole = styled(Input)`
width:25%;
padding:0 0 0 1vh;
::placeholder{
    color:darkgray;
    margin-left: 3vw;
}
`
const InputRoleNum = styled(Input)`
width:15%;
padding:0 0 0 2vh;
::placeholder{
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
border-radius: 10px;
height: 4vh;
padding:0 2vh 0 2vh;
`
const DeleteButton = styled.button`
box-sizing: border-box;
margin-left: auto;
background-color:#ffffff;
color:#ff4921;
border:solid 1px #ff4921;
border-radius: 10px;
height: 4vh;
padding:0 2vh 0 2vh;
`
const RolesContainer = styled.div`
display:flex;
align-items: center;
flex-wrap:wrap;
// justify-content:space-between;
width:100%;
`
const Hr = styled.hr`
border:0;
height:2px;
background-color:#f4f4f4;
`
const CompleteButton = styled.button`
box-sizing: border-box;
margin-left:1vw;
background-color:#14b91c;
color:#ffffff;
border:none;
border-radius: 10px;
height: 6vh;
padding:0 7vh 0 7vh;
`
const CancelButton = styled(CompleteButton)`
background-color:#e7e7e7;
color:#464646;
`
const ButtonContainer = styled(Container)`
display:flex;
width:100%;
justify-content:flex-end;
margin:5vh 0vh 5vh 0vh;
`
function CreateToyProject() {
    // 토이프로젝트 명
    const [toyProjectName, setToyProjectName] = useState("")
    // 토이프로젝트 필드 리스트
    const fieldList = [
        { id: 0, name: '기획/아이디어' },
        { id: 1, name: '논문/리포트' },
        { id: 3, name: '디자인' },
        { id: 4, name: '광고/마케팅' },
        { id: 5, name: '사진' },
        { id: 6, name: 'UCC/영상' },
        { id: 7, name: '예체능' },
        { id: 8, name: '문학/수기' },
        { id: 9, name: '캐릭터/만화' },
    ]
    // 토이프로젝트 분야
    const [toyProjectFields, setToyProjectFields] = useState(new Array(fieldList.length).fill(false))
    // 토이프로젝트 대표이미지
    const [toyProjectImage, setToyProjectImage] = useState(null)
    // 토이프로젝트 이미지 Url
    const [toyProjectImageUrl, setToyProjectImageUrl] = useState('')
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
    //에디터 내용 
    const [read,setRead]=useState("");
    //에디터 내용 
    const modules = {
        toolbar: {
            container: [
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'align': [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
              [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
              ['image', 'video'],
              ['clean'],    
                        ]
                }
            }

    // 토이프로젝트 명 입력 시
    const onToyProjectNameHandler = (event) => {
        setToyProjectName(event.currentTarget.value)
    }

    // 토이프로젝트 분야 선택 시
    const onToyProJectFieldsHandler = (event) => {
        let tmp = [...toyProjectFields]
        tmp[Number(event.target.id)] = !tmp[Number(event.target.id)]
        setToyProjectFields(tmp)
    }
    // 토이프로젝트 이미지 파일 첨부 시
    const onToyProjectImageHandler = (event) => {
        // console.log(URL.createObjectURL(event.currentTarget.files[0]))
        setToyProjectImage(event.currentTarget.files[0])
        setToyProjectImageUrl(URL.createObjectURL(event.currentTarget.files[0]))
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
    // 만들기 버튼 클릭 시
    const onClickSubmitHandler = () =>{
        let fileds = []
        for(let i = 0; i < toyProjectFields.length; i++){
            if(toyProjectFields[i]) fileds.push(i)
        }
        let toyProject = {
            name : toyProjectName,
            fileds : fileds,
            imageUrl : toyProjectImageUrl,
            roles : toyProjectRoles,
            onlySchool : onlySchool,
            content : toyProjectContent,
            skills : toyProjectSkills
        }
        console.log(toyProject)
    }

    //에디터 입력 시 
    const onChangeMyEdit=(value)=>{
      setRead(value);
    }
    return (
        <Container>
            <form>
                <h3>프로젝트 생성</h3>
                <Title>토이프로젝트 명</Title>
                <InputName placeholder='토이프로젝트명을 입력하세요' value={toyProjectName} onChange={onToyProjectNameHandler} />
                <Title>토이프로젝트 분야</Title>
                <FieldContainer>
                {fieldList.map((field, index) => (
                    <div>
                        <input type="checkbox" id={index} key={index} onChange={onToyProJectFieldsHandler}/>
                        <label htmlFor={index}>{field.name}</label>
                    </div>
                ))}
                </FieldContainer>
                <Title>대표 이미지</Title>
                <img src={toyProjectImageUrl} />
                <input type="file" accept='image/*' onChange={onToyProjectImageHandler} />
                <Title>모집 직무와 인원</Title>
                <RolesContainer>
                        <Text>직무</Text>
                        <InputRole value={inputToyProjectRole.role} onChange={onToyProjectRoleHandler} />
                        <Text>인원</Text>
                        <InputRoleNum value={inputToyProjectRole.num} onChange={onToyProjectRoleNumHandler} />
                        <AddButton type="button" onClick={onClickAddToyProjectRolesHandler}>추가</AddButton>
                    </RolesContainer>
                    {toyProjectRoles.length ? <Hr></Hr>:<></>}
                {toyProjectRoles.map((item, index) => (
                    <RolesContainer>
                        <Text>직무</Text>
                        <InputRole as='p'>{item.role}</InputRole>
                        <Text>인원</Text>
                        <InputRoleNum as='p'>{item.num}</InputRoleNum>
                        <DeleteButton type="button" onClick={()=>onClickDeleteToyProjectRolesHandler(index)}>삭제</DeleteButton>
                    </RolesContainer>
                ))}
                
                <Title>학교(선택)</Title>
                <input type="checkbox" id="school" onChange={onToyProjectSchoolHandler} />
                <label htmlFor="school">학교 사람만 프로젝트에 참여 하도록 하시겠습니까?</label>
                
                <Title>토이 프로젝트 설명</Title>
                <div className="text-editor">
                <ReactQuill theme="snow"
                            modules={modules}
                            onChange={onChangeMyEdit}>
                </ReactQuill>
		</div>    
                <Title>모집 스킬</Title>
                <RolesContainer>
                        <Text>스킬</Text>
                        <InputRole value={inputToyProjectRole.role} onChange={onToyProjectSkillsHandler} />
                        <AddButton type="button" onClick={onClickAddToyProjectSkillsHandler}>추가</AddButton>  
                    </RolesContainer>
                    {toyProjectSkills.length ? <Hr></Hr>:<></>}
                {toyProjectSkills.map((item, index) => (
                    <RolesContainer>
                        <Text>스킬</Text>
                        <InputRole as='p'>{item}</InputRole>
                        <DeleteButton type="button" onClick={()=>onClickDeleteToyProjectSkillsHandler(index)}>삭제</DeleteButton>
                    </RolesContainer>
                ))}
                <ButtonContainer>
                <CancelButton type="button">취소</CancelButton>
                <CompleteButton type="button" onClick={onClickSubmitHandler}>완료</CompleteButton>
                </ButtonContainer>
            </form>
        </Container>
    )
}
export default CreateToyProject;