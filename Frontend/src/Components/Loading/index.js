import './style.css'
import {Spin} from 'antd'
import 'antd/dist/antd.css';
import {useSelector} from "react-redux";

const Loading = () => {
    const load = useSelector((state => state.load))

    return (
        <div className={load ? 'loading-screen-ON' : 'loading-screen-OFF'}>
            <Spin spinning={load}/>
        </div>
    )
}

export default Loading