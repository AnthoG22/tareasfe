import axios from 'axios'

const API_URL = "https://good-gray-lemming-shoe.cyclic.app/api/users/"
// const API_URL = "https://good-tick-jodhpurs.cyclic.app/api/users/"
//const API_URL = "https://stormy-teal-turtle.cyclic.app/api/users/"

//REGISTRAR UN USUARIO

const register = async(userData) => {
    const response = await axios.post(API_URL , userData )

    return response.data
}

const login = async(userData) => {
    const response = await axios.post(API_URL + 'login',userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService