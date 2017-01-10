import React, {PropTypes} from 'react';
import { connect } from 'dva';
import {
  Icon,
  message,
  Button,
  Row,
  Col,
  Form,
  Input,
  Select,
  Spin
} from 'antd';
import Login from '../components/login';
import Header from '../components/layout/Header'
import Bread from '../components/layout/bread'
import Footer from '../components/layout/footer'
import Sider from '../components/layout/sider'
import styles from '../components/layout/main.less'
import '../components/layout/common.less'
import classnames from 'classnames'


function IndexPage({children,location,dispatch,users}) {
  var siderFold=false;
  var darkTheme =false;
  var user=users.userInfo;
  const loginProps={
      users,
      onOk(data) {
      dispatch({type: 'users/login', userLoginInfo: data})
    }
  };
  const layoutProps={
    children
  };
  
  const siderProps = {
    siderFold,
    darkTheme,
    location,
    changeTheme(){
      dispatch({type: 'app/changeTheme'})
    }
  }
  const headerProps = {
    user,
    siderFold,
    logout() {
      dispatch({type: 'app/logout'})
    },
    switchSider() {
      dispatch({type: 'app/switchSider'})
    }
  }
  console.log(location,"1")
  return (
    <div>
    {
      users.login?
           <div className={classnames(styles.layout,{[styles.fold]:siderFold})}>
            <aside  className={classnames(styles.sider,{[styles.light]:!darkTheme})}>
              <Sider {...siderProps}/>
            </aside>
            <div className={styles.main}>
              <Header {...headerProps}/>
              <Bread location={location}/>
              <div className={styles.container}>
                <div className={styles.content}>
                  {children}
                </div>
              </div>
              <Footer/>
            </div>
          </div>
      :    <Login {...loginProps}/>
    }
    
    </div>
  );
}

IndexPage.propTypes = {
  children:PropTypes.object.isRequired,
  location:PropTypes.object,
  dispatch:PropTypes.func,
  users:PropTypes.object
};

export default connect(({users})=>({users}))(IndexPage);
