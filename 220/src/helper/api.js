import axios from 'axios'
import apiconfig from '../config/api.config.json'

const api = {
    login: async(username, password) =>{
        //alert(username)
        let option ={
            url:apiconfig.BASE_URL+apiconfig.ENDPOINTS.login,
            method  : 'POST',
            header : {
                'control-type' : 'application/json'
            },
            data:{
                username: username,
                m_password: password
            }
        }
        try{
            let result = await axios (option)
            return result.data
        }
        catch(error){
            return error
        }
},
}
export default api
