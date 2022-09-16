import  Router  from "./Router";
import {RecoilRoot} from "recoil"
import "./global.css";

function App() {
  return (
    <RecoilRoot>
      <Router/>
    </RecoilRoot>
  );
}

export default App;
