import React, { useState } from 'react'

function CreateToyProject() {
    const [toyProjectName, setToyProjectName] = useState("")
    // const [projectFields, setField] = useState([])
    const [toyProjectImage, setToyProjectImage] = useState(null)
    const [toyProjectImageUrl, setToyProjectImageUrl] = useState('')

    const [toyProjectRoles, setToyProjectRoles] = useState([1])
    const [school, setSchool] = useState(false)
    const [toyProjectContent, setToyProjectContent] = useState("")
    const [toyProjectskills, setToyProjectSkills] = useState([])
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

    const onToyProjectNameHandler = (event) => {
        setToyProjectName(event.currentTarget.value)
    }

    const onToyProjectImageHandler = (event) => {
        // console.log(URL.createObjectURL(event.currentTarget.files[0]))
        setToyProjectImage(event.currentTarget.files[0])
        setToyProjectImageUrl(URL.createObjectURL(event.currentTarget.files[0]))
    }

    const onClickAddToyProjectRolesHandler = () => {
        console.log(toyProjectRoles)
        let a = 4
        // setToyProjectRoles((prev)=>[...prev, a])
        console.log(toyProjectRoles.length)
    }

    const onToyProjectRolesHandler = (event) => {
        console.log(event.currentTarget.value)
        setToyProjectRoles((prev)=>[...prev, 4])
    }

    const onToyProjectContentHandler = (event) => {
        setToyProjectContent(event.currentTarget.value)
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
                <img src={toyProjectImageUrl}/>
                <input type="file" accept='image/*' onChange={onToyProjectImageHandler}/>
                <p>모집 직무/인원</p>
                {toyProjectRoles.map((role, index) => (
                    <div>
                        <label htmlFor={role}>직무</label>
                        <input id={role} value = {role} />
                        <label htmlFor={role}>인원</label>
                        <input id={role} value = {role} />
                    </div>
                ))}
                <button onClick={onClickAddToyProjectRolesHandler}>+</button>
                <p>학교(선택)</p>
                <label htmlFor="school">학교 사람만 프로젝트에 참여 하도록 하시겠습니까?</label>
                <input type="checkbox" id="school" />
                <p>토이 프로젝트 설명</p>
                <textarea placeholder='토이프로젝트에 대한 설명을 입력하세요' value={toyProjectContent} onChange={onToyProjectContentHandler} />
                <p>모집 스킬</p>
            </form>
        </div>
    )
}
export default CreateToyProject;