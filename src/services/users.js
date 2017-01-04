import request from '../utils/request';
import qs from 'qs';

export async function login(params) {
    return request('http://localhost:6240/api/account/Authenticate', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
}