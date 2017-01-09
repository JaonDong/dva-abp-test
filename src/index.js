import dva from 'dva';
import './index.html';
import './index.css';
import { routerRedux } from 'dva/router';

// 1. Initialize
const app = dva({
    /*未授权，重定向到登录页 */
    onError(e){
        if(e.message=="unAuthorizedRequest"){
           console.log(routerRedux);
           routerRedux.push("/");
        }
    }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/users'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
