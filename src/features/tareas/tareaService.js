import axios from "axios"

const API_URL = "https://good-gray-lemming-shoe.cyclic.app/api/tareas/"

//crear una nueva tarea

const createTarea = async (tareaData, token) => {
    const config = {
        headers:{
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, tareaData, config)
    return response.data
}

//obtener las tareas del usuario
const getTareas = async (token)=> {
    const config = {
        headers:{
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

//borramos una tarea
const borrarTareas = async (id,token) => {
    const config = {
        headers:{
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + id,config)
    return response.data
}

const tareaService = {
    createTarea,
    getTareas,
    borrarTareas
}

export default tareaService