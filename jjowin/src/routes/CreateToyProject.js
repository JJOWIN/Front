import React, { useState } from 'react'
import styled from "styled-components";


function CreateToyProject() {
    // 토이프로젝트 명
    const [toyProjectName, setToyProjectName] = useState("")
    // const [projectFields, setField] = useState([])
    // 토이프로젝트 대표이미지
    const [toyProjectImage, setToyProjectImage] = useState(null)
    // 토이프로젝트 이미지 Url
    const [toyProjectImageUrl, setToyProjectImageUrl] = useState('')
    // 토이프로젝트 직무
    const [toyProjectRoles, setToyProjectRoles] = useState([{ role: '', num: '' }])
    // 학교사람만
    const [school, setSchool] = useState(false)
    // 토이프로젝트 내용
    const [toyProjectContent, setToyProjectContent] = useState("")
    // 토이프로젝트 스킬
    const [toyProjectSkills, setToyProjectSkills] = useState([''])
    // 토이프로젝트 필드 리스트
    const fieldList = [
        { id: 0, name: '기획/아이디어' },
        { id: 1, name: '기획/아이디어' },
        { id: 2, name: '기획/아이디어' },
        { id: 3, name: '기획/아이디어' },
        { id: 4, name: '기획/아이디어' },
        { id: 5, name: '기획/아이디어' },
        { id: 6, name: '기획/아이디어' },
        { id: 7, name: '기획/아이디어' },
        { id: 8, name: '기획/아이디어' },
        { id: 9, name: '기획/아이디어' },
    ]

    // 토이프로젝트 명 입력 시
    const onToyProjectNameHandler = (event) => {
        setToyProjectName(event.currentTarget.value)
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
        console.log(toyProjectRoles)
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

    // 토이프로젝트 직무 입력 시
    const onToyProjectSkillsHandler = (event) => {
        let tmp = [...toyProjectSkills]
        tmp[Number(event.target.id)] = event.target.value
        setToyProjectSkills([...tmp])
        console.log(toyProjectSkills)

    }

    // 토이프로젝트 학교만 체크박스 선택 시
    const onToyProjectSchoolHandler = (event) => {
        setSchool(!school)
        console.log(school)

    }
    // 토이프로젝트 스킬 추가 버튼 클릭 시
    const onClickAddToyProjectSkillsHandler = () => {
        setToyProjectSkills([...toyProjectSkills, ''])
    }

    return (
        <div>
            <form>
                <p>토이프로젝트 명</p>
                <input placeholder='토이프로젝트명을 입력하세요' value={toyProjectName} onChange={onToyProjectNameHandler} />
                <p>토이프로젝트 분야</p>
                {fieldList.map((field, index) => (
                    <div>
                        <input type="checkbox" id={field.name} key={index} />
                        <label htmlFor={field.name}>{field.name}</label>
                    </div>
                ))}
                <p>대표 이미지</p>
                <img src={toyProjectImageUrl} />
                <input type="file" accept='image/*' onChange={onToyProjectImageHandler} />
                <p>모집 직무/인원</p>
                {toyProjectRoles.map((item, index) => (
                    <div>
                        <label htmlFor={index}>직무</label>
                        <input id={index} value={item.role} onChange={onToyProjectRolesHandler} />
                        <label htmlFor={index}>인원</label>
                        <input id={index} value={item.num} onChange={onToyProjectPeoplesHandler} />
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
                        <label htmlFor={index}>#</label>
                        <input id={index} value={item} onChange={onToyProjectSkillsHandler} />
                    </div>
                ))}
                <button type="button" onClick={onClickAddToyProjectSkillsHandler}>+</button>
            </form>
        </div>
    )
}
export default CreateToyProject;