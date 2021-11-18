import './style.css'
import InputBox from "../InputBoxs";
import {useState} from "react";
import registration from "../../API/Registration/registration";

const Registration = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='registration-box'>
            <h1 className='registration-text'>Registration</h1>
            <InputBox input='username' title='Enter username' handleLogin={e => setLogin(e)}/>
            <InputBox input='password' title='Enter password' handlePassword={e => setPassword(e)}/>
            <button className='registration'
                    onClick={async () => {
                        await registration(login,password)
                    }}>Create account
            </button>
            <a className='link-to-login' href='/login'>I have an account</a>
        </div>
    )
}

export default Registration