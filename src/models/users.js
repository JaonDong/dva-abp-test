import { login,getUserInfo } from '../services/users';
import { parse } from 'qs';

export default {
    namespace: 'users',
    state: {
        message: null,
        loginButtonLoading: false,
        login: false,
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
                login: true,
                loginButtonLoading: false,
                message: "登录成功"
            };
        },
        loginFail(state, {result: data}) {

            return {
                ...state,
                login: false,
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
                yield put({ type: 'loginFail', result: data.data })
            }
        },
        *getUserInfo({},{call,put}){
            const data=yield call(getUserInfo);
            console.debug(data);
            if(data.data.unAuthorizedRequest){
                throw new Error("unAuthorizedRequest");
            }
        }
    }
}