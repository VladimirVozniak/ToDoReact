import './style.css'
import InputBox from "../InputBoxs";
import {useState} from "react";
import loginInSystem from "../../API/Login/login";
import Loading from "../Loading";
import {useDispatch} from "react-redux";
import {endLoading, startLoading} from "../../Redux/todoSlice";

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    return (
        <div className='login-box'>
            <h1 className='login-text'>Login</h1>
            <InputBox input='username' title='Username' handleLogin={e => setLogin(e)}/>
            <InputBox input='password' title='Password' handlePassword={e => setPassword(e)}/>
            <button className='login'
                    onClick={async () => {
                        dispatch(startLoading())
                        await loginInSystem(login, password)
                        dispatch(endLoading())
                    }}>Login
            </button>
            <div className='link-to-reg'>
                <p className='not-account'>Don't have an account?</p>
                <a className='link' href="/reg">Register now!</a>
            </div>
            <Loading/>
        </div>
    )
}

export default Login