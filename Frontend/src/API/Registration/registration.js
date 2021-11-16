import axios from "axios";

const registration = async (login, password) => {
    await axios.post('http://localhost:3001/newUser',
        {
            login,
            password
        }).then(async (e) => {
        await axios.post(`http://localhost:3001/login`,
            {
                login,
                password
            }).then((e) => {
            localStorage.setItem('currentUser', JSON.stringify(e.data))
            window.location.href = '/'
        }).catch((e) => {
            console.log(e)
        })
    }).catch((e) => {
        console.log(e)
    })
}

export default registration