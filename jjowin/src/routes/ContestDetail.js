import { useParams,Link } from 'react-router-dom';
import styled from "styled-components";

function ContestDetail(){
    const params = useParams();
    const contest_num=params.contest_num;

    return(
        <h1>Contest_detail</h1>
    )
}
export default ContestDetail;