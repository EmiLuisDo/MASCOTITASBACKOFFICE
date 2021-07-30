import Login from "./Components/login"
import { useSelector } from "react-redux";
import { getLoginSuccess } from "./Redux/Store"
import PrincipalPage from "./Components/PrincipalPage"


function App() {
  const login_success = useSelector(getLoginSuccess)


  return (
    <div className="App">
      { !login_success ? <Login/> : <PrincipalPage/>}
    </div>
  );
}

export default App;
