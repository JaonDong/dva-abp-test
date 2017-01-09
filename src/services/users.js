import request from '../utils/request';
import config from '../utils/config';
import qs from 'qs';

export async function login(params) {
    return request('/api/account/Authenticate', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
}

export async function getUserInfo(){
    console.log("getUserInfo")
    return request('/api/services/app/userlogin/GetRecentUserLoginAttempts',{
        method:'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':config.authorizationName+' '+config.token
        },
    });
}