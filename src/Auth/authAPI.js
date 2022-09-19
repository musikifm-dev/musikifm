import { URL_LOGIN } from "../utils/config";
import axios from "axios";

function authenticate(credentials){
    return axios.post(URL_LOGIN , credentials)
    .then(res => console.log(res))
}

export default {
    authenticate
}