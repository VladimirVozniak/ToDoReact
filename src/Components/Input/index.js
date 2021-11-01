import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import {newText} from "../../Redux/todoSlice";

const InputData = () => {
    const text = useSelector((state) => state.text)
    const dispatch = useDispatch()

    return (
        <div>
            <input className='input-text'
                   value={text}
                   onChange={e => dispatch(newText(e.target.value))}
                   placeholder="Add a task"/>
        </div>
    )
}

export default InputData;