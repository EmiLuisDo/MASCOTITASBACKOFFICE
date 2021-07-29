import Login from "./Components/login"
import { useSelector } from "react-redux";
import { getUsuario, getContrasenia, getLoginSuccess } from "./Redux/Store"


function App() {

  const user = useSelector(getUsuario)
  const contrasenia = useSelector(getContrasenia)
  const login_success = useSelector(getLoginSuccess)


  return (
    <div className="App">
      { !login_success ? <Login/> : null}
    </div>
  );
}

export default App;
