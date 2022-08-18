import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./Layout";
import Main from "./routes/Main";
import ContestDetail from "./routes/ContestDetail";
import Login from "./routes/Login";
import ContestList from "./routes/ContestList";
import ToyProject from "./routes/ToyProject";
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
                <Route path="/contestList" element={<ContestList/>}></Route>
                <Route path="/toyprojectList" element={<ToyProject/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signUp" element={<SignUp/>}></Route>
                <Route path="/toyprojectList/toyProjectDetail" element={<ToyProjectDetail/>}></Route>
                <Route path="/contestList/contestDetail" element={<ContestDetail/>}></Route>
                <Route path="/toyprojectList/createToyProject" element={<CreateToyProject/>}></Route>
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