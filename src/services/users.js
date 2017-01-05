import request from '../utils/request';
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