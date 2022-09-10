import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./Layout";
import Main from "./routes/Main";
import ContestProjectDetail from "./routes/ContestProjectDetail";
import Login from "./routes/Login";
import ContestList from "./routes/ContestList";
import ContestDetail from "./routes/ContestDetail";
import ToyProject from "./routes/ToyProjectList";
import ToyProjectDetail from "./routes/ToyProjectDetail";
import CreateToyProject from "./routes/CreateToyProject";
import SignUp from "./routes/SignUp";
import MyPage from "./MyPage";
import MyPageInfoFix from "./routes/MyPage/MyPageInfoFix";
import MyPageSelect from "./routes/MyPage/MyPageSelect";
import MyPageSetting from "./routes/MyPage/MyPageSetting";
import MyPageJoinProject from "./routes/MyPage/MyPageJoinProject";
import MyPageComment from "./routes/MyPage/MyPageComment";


function Router(){
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/toyprojectList" element={<ToyProject/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signUp" element={<SignUp/>}></Route>
                <Route path="/contestList" element={<ContestList/>}></Route>
                {/* 각 공모전마다 연결되도록 수정해야함 */}
                <Route path="/contestList/contestDetail" element={<ContestDetail/>}></Route>
                <Route path="/contestList/ContestProjectDetail/:contestProjectNum" element={<ContestProjectDetail/>}></Route>
                <Route path="/toyprojectList/createToyProject" element={<CreateToyProject/>}></Route>
                <Route path="/toyprojectList/toyProjectDetail/:toyProjectNum" element={<ToyProjectDetail/>}></Route>
                <Route path="/myPage" element={<MyPage/>}>
                    <Route path="/myPage/myPageInfoFix" element={<MyPageInfoFix/>}></Route>
                    <Route path="/myPage/myPageSelect" element={<MyPageSelect/>}></Route>
                    <Route path="/myPage/myPageSetting" element={<MyPageSetting/>}></Route>
                    <Route path="/myPage/myPageJoinProject" element={<MyPageJoinProject/>}></Route>
                    <Route path="/myPage/myPageComment" element={<MyPageComment/>}></Route>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}
export default Router;