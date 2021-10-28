import "./style.css"

const InputData = (props) => {
    return (
        <div>
            <input className='input-text' value={props.value} onChange={e => props.inputValue(e.target.value)} placeholder="Add a task"/>
        </div>
    )
}

export default InputData;