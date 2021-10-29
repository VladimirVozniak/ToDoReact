import "./style.css"
import {useContext} from "react";
import {Context} from "../../context";

const InputData = () => {
    const {value, setValue} = useContext(Context)
    return (
        <div>
            <input className='input-text' value={value} onChange={e => setValue(e.target.value)} placeholder="Add a task"/>
        </div>
    )
}

export default InputData;