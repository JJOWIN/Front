import React, { useState } from 'react'
import styled from "styled-components";


function CreateToyProject() {
    // 토이프로젝트 명
    const [toyProjectName, setToyProjectName] = useState("")
    // 토이프로젝트 필드 리스트
    const fieldList = [
        { id: 0, name: '기획/아이디어' },
        { id: 1, name: '논문/리포트' },
        { id: 2, name: '네이밍/슬로건' },
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
    const [toyProjectRoles, setToyProjectRoles] = useState([{ role: '', num: '' }])
    // 학교사람만
    const [onlySchool, setOnlySchool] = useState(false)
    // 토이프로젝트 내용
    const [toyProjectContent, setToyProjectContent] = useState("")
    // 토이프로젝트 스킬
    const [toyProjectSkills, setToyProjectSkills] = useState([''])
    
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
        setToyProjectRoles([...toyProjectRoles, { role: '', num: '' }])
    }

    // 토이프로젝트 직무 입력 시
    const onToyProjectRolesHandler = (event) => {
        let tmp = [...toyProjectRoles]
        tmp[Number(event.target.id)].role = event.target.value
        setToyProjectRoles([...tmp])
        // console.log(toyProjectRoles)
    }

    // 토이프로젝트 인원 입력 시
    const onToyProjectPeoplesHandler = (event) => {
        let tmp = [...toyProjectRoles]
        tmp[Number(event.target.id)].num = event.target.value
        setToyProjectRoles([...tmp])
    }

    // 토이프로젝트 내용 입력 시
    const onToyProjectContentHandler = (event) => {
        setToyProjectContent(event.currentTarget.value)
    }

    // 토이프로젝트 스킬 입력 시
    const onToyProjectSkillsHandler = (event) => {
        let tmp = [...toyProjectSkills]
        tmp[Number(event.target.id)] = event.target.value
        setToyProjectSkills([...tmp])
        // console.log(toyProjectSkills)

    }

    // 토이프로젝트 학교만 체크박스 선택 시
    const onToyProjectSchoolHandler = () => {
        setOnlySchool(!onlySchool)
        // console.log(school)
    }
    // 토이프로젝트 스킬 추가 버튼 클릭 시
    const onClickAddToyProjectSkillsHandler = () => {
        setToyProjectSkills([...toyProjectSkills, ''])
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

    return (
        <div>
            <form>
                <p>토이프로젝트 명</p>
                <input placeholder='토이프로젝트명을 입력하세요' value={toyProjectName} onChange={onToyProjectNameHandler} />
                <p>토이프로젝트 분야</p>
                {fieldList.map((field, index) => (
                    <div>
                        <input type="checkbox" id={index} key={index} onChange={onToyProJectFieldsHandler}/>
                        <label htmlFor={index}>{field.name}</label>
                    </div>
                ))}
                <p>대표 이미지</p>
                <img src={toyProjectImageUrl} />
                <input type="file" accept='image/*' onChange={onToyProjectImageHandler} />
                <p>모집 직무/인원</p>
                {toyProjectRoles.map((item, index) => (
                    <div>
                        <label>직무</label>
                        <input id = {index} value={item.role} onChange={onToyProjectRolesHandler} />
                        <label>인원</label>
                        <input id = {index} value={item.num} onChange={onToyProjectPeoplesHandler} />
                    </div>
                ))}
                <button type="button" onClick={onClickAddToyProjectRolesHandler}>+</button>
                <p>학교(선택)</p>
                <label htmlFor="school">학교 사람만 프로젝트에 참여 하도록 하시겠습니까?</label>
                <input type="checkbox" id="school" onChange={onToyProjectSchoolHandler} />
                <p>토이 프로젝트 설명</p>
                <textarea placeholder='토이프로젝트에 대한 설명을 입력하세요' value={toyProjectContent} onChange={onToyProjectContentHandler} />
                <p>모집 스킬</p>
                {toyProjectSkills.map((item, index) => (
                    <div>
                        <label>#</label>
                        <input id={index} value={item} onChange={onToyProjectSkillsHandler} />
                    </div>
                ))}
                <button type="button" onClick={onClickAddToyProjectSkillsHandler}>+</button>
                <button type="button" onClick={onClickSubmitHandler}>만들기</button>
            </form>
        </div>
    )
}
export default CreateToyProject;