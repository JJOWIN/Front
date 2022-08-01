import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
    width:50px;
    height:50px;
`;

function Main(){
    const [state,setState]=useState([1]);
    const [rolevalue,setroleValue]=useState([]);
    const [peoplevalue,setpeoplevalue]=useState([]);
    const array=[];

    const click =()=>{
        return (
            setState([...state,1]))
    }
    const frolevalue=(e)=>{
        let a = [...rolevalue]
        a[Number(e.target.id)] = e.target.value
        setroleValue([...a])
        console.log(a)
    }
    const fpeoplevalue=(e)=>{
        let a = [...peoplevalue]
        a[Number(e.target.id)] = e.target.value
        setpeoplevalue([...a])
        console.log(a)
    }
    const submit =()=>{
        for(let i=0; i<rolevalue.length; i++){
            array.push([rolevalue[i],peoplevalue[i]]);
        }
       alert(array);
    }
    return(
        
        <div>
            {state.map((item,index)=>{
            return(
            <div>
                <input onChange={frolevalue} value={rolevalue[Number(index)]} id= {index}/>
                <input onChange={fpeoplevalue} value={peoplevalue[Number(index)]} id= {index}/>
            </div>
            )})}
           
            <Button onClick={click}>+</Button>
            <Button  onClick={submit}>제출완료</Button>
        </div>
    )
}
export default Main;