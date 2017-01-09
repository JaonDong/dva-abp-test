import { login,getUserInfo } from '../services/users';
import { parse } from 'qs';
import { routerRedux } from 'dva/router';

export default {
    namespace: 'users',
    state: {
        message: null,
        loginButtonLoading: false,
        login: localStorage.getItem("token")!="",
        userInfo: {
            name: null
        }
    },
  subscriptions : {
    setup({dispatch}) {
      dispatch({type: 'getUserInfo'})
    }
  },
    reducers: {
        loginSuccess(state, {result: data}) {
            localStorage.setItem("token", data.result);
            return {
                ...state,
                login: localStorage.getItem("token")!="",
                loginButtonLoading: false,
                message: "登录成功"
            };
        },
        loginFail(state) {
            localStorage.setItem("token","");
            return {
                ...state,
                   login: localStorage.getItem("token")!="",
                loginButtonLoading: false,
                message: null
            };
        },
        showLoginButtonLoading(state) {
            return {
                ...state,
                loginButtonLoading: true
            };

        },
        showLoginErrorMsg(state, {result: data}) {
            console.log("showLoginErrorMsg");
            return {
                ...state,
                message: data.error.message
            }
        }
    },
    effects: {
        *login({userLoginInfo}, {call, put}) {
            yield put({ type: 'showLoginButtonLoading' });
            const data = yield call(login, parse(userLoginInfo));

            console.log(data.data);
            if (data.data.success) {
                yield put({ type: 'loginSuccess', result: data.data });
            }
            else {
                yield put({ type: 'showLoginErrorMsg', result: data.data })
                yield put({ type: 'loginFail'})
            }
        },
        *getUserInfo({},{call,put}){
            const data=yield call(getUserInfo);
         
            if(data.data.unAuthorizedRequest){
                //验证失败，登录超时或未登录
                yield put({type:'loginFail'})
            }
        }
    }
}