import './style.css'
import {useState} from "react";

const InputBox = (props) => {
    const [showPass, setShowPass] = useState(false)
    return (
        <>
            {props.input === 'username' ?
                <input className='data-input_login'
                       placeholder={props.title}
                       onChange={e => props.handleLogin(e.target.value)}
                />
                :
                <div className='input-box password-box'>
                    <input className='data-input_login password-input'
                           placeholder={props.title}
                           type={showPass ? 'text' : 'password'}
                           onChange={e => props.handlePassword(e.target.value)}
                    />
                    <img className={showPass ? 'eye-password show-password' : 'eye-password'}
                         onClick={() => setShowPass(!showPass)}
                         src='https://cdn-icons-png.flaticon.com/512/159/159604.png'
                         alt='qwe'
                    />
                </div>
            }
        </>
    )
}

export default InputBox