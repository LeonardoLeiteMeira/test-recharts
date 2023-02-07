import Register from "../../constants/register";
import axios_instance from "./axios_config";

const getRegisterEndPoint = "/industrial/getIndustrialComponentFile/?file_name=REGISTER_FILE_NAME"

export async function getRegisterByFileName(file_name:string):Promise<Register[]>{
    let endPoint = getRegisterEndPoint.replace("REGISTER_FILE_NAME",file_name)
    let response = await axios_instance.get(endPoint)
    if(response.status===200){
        return response.data
    }

    throw("Error to access api")
}