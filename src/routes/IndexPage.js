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
  Select
} from 'antd';
import Login from '../components/login';



function IndexPage({children,loaction,dispatch,users}) {
  console.log(111);
  console.log(users);
  const loginProps={
      users,
      onOk(data) {
      dispatch({type: 'users/login', userLoginInfo: data})
    }
  };
  return (
    <div>
    {
      users.login?
           <div>
              {children}
           </div>
      :    <Login {...loginProps}/>
    }
    
    </div>
  );
}

IndexPage.propTypes = {
  children:PropTypes.object.isRequired,
  loaction:PropTypes.object,
  dispatch:PropTypes.func,
  users:PropTypes.object
};

export default connect(({users})=>({users}))(IndexPage);
