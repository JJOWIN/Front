import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./Layout";
import Main from "./routes/Main";
import ContestDetail from "./routes/ContestDetail";
import Login from "./routes/Login";
import ContestList from "./routes/ContestList";
import ToyProject from "./routes/ToyProject";
import ToyProjectDetail from "./routes/ToyProjectDetail";
import SignUp from "./routes/SignUp";

function Router(){
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/contestList" element={<ContestList/>}></Route>
            <Route path="/toyprojectList" element={<ToyProject/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signUp" element={<SignUp/>}></Route>
            <Route path="/toyprojectList/toyProjectDetail" element={<ToyProjectDetail/>}></Route>
            <Route path="/contest/:contest_num" element={<ContestDetail/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}
export default Router;