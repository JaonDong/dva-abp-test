import request from '../utils/request';
import config from '../utils/config';
import qs from 'qs';

export async function login(params) {
    //api/services/app
    return request('http://localhost:6240/api/account/Authenticate', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
}

export async function getUserInfo(){
    console.log("getUserInfo")
    return request('/api/userlogin/GetRecentUserLoginAttempts',{
        method:'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':config.authorizationName+' '+config.token
        },
    });
}