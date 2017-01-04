import {login} from '../services/users';
import {parse} from 'qs';

export default{
    namespace:'users',
    state:{
        token:localStorage.getItem("token"),
        userInfo:{
            name:null
        }
    },
    reducers:{
        loginSuccess(state,data){
            localStorage.setItem("token",data.token);
            return{
                ...state
            };
        },
         loginFail(state,data){
            return{
                ...state,
                ...data
            };
        }
    },
    effects:{
        *login({userLoginInfo},{call,put}){
            console.log("1111");
            const data=yield call(login,parse(userLoginInfo));
            console.log(data);
            if(data.success){
                yield put({type:'loginSuccess',data:data});
            }
            else{
            yield put({type:'loginFail',data:data})
            }
        }
    }
}