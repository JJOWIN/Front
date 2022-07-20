import {Link} from "react-router-dom";

function ToyProject(){
    return(
        <div>
        <Link to="toyProjectDetail"> <h1>ToyProject</h1></Link>
        <Link to="createToyProject"> <h1>CreateToyProject</h1></Link>
        </div>
    )
}
export default ToyProject;