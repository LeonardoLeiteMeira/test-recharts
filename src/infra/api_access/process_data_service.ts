import axios_instance from "./axios_config"

const getFilesEndPoint = "/legacy/file_names"
const getAllFilesEndPoint = "/legacy/all"

export async function getFilesName(){
    let response = await axios_instance.get(getFilesEndPoint)
    if(response.status===200){
        return response.data
    }

    throw("Error to access api")
}

export async function getAllFiles(){
    let response = await axios_instance.get(getAllFilesEndPoint)
    if(response.status===200){
        return response.data
    }

    throw("Error to access api")
}