import Login from "./Components/login"
import { useSelector } from "react-redux";
import { getUsuario, getContrasenia } from "./Redux/Store"


function App() {

  const user = useSelector(getUsuario)
  const contrasenia = useSelector(getContrasenia)
  console.log("user")
  console.log(user)
  console.log("contrasenia")
  console.log(contrasenia)


  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
