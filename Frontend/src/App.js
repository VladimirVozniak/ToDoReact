import {Route, Routes} from "react-router"
import Login from './Components/Login'
import Registration from './Components/Registration'
import Todo from "./Components/ToDo";
// import axios from "axios";

const App =  () => {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/reg' element={<Registration/>}/>
            <Route path='/' element={<Todo/>}/>
        </Routes>
    )
}
export default App