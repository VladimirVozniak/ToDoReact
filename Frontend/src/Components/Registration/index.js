import './style.css'
import InputBox from "../InputBoxs";
import {useState} from "react";
import registration from "../../API/Registration/registration";
import {useDispatch} from "react-redux";
import {endLoading, startLoading} from "../../Redux/todoSlice";

const Registration = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    return (
        <div className='registration-box'>
            <h1 className='registration-text'>Registration</h1>
            <InputBox input='username' title='Enter username' handleLogin={e => setLogin(e)}/>
            <InputBox input='password' title='Enter password' handlePassword={e => setPassword(e)}/>
            <button className='registration'
                    onClick={async () => {
                        dispatch(startLoading())
                        await registration(login,password)
                        dispatch(endLoading())
                    }}>Create account
            </button>
            <a className='link-to-login' href='/login'>I have an account</a>
        </div>
    )
}

export default Registration