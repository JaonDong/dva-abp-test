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



function IndexPage({loaction,dispatch,users}) {
  const loginProps={
      onOk(data) {
      dispatch({type: 'users/login', userLoginInfo: data})
    }
  };
  return (
    <div>
        <Login {...loginProps}/>
    </div>
  );
}

IndexPage.propTypes = {
  loaction:PropTypes.object,
  dispatch:PropTypes.func,
  users:PropTypes.object
};

export default connect(({users})=>({users}))(IndexPage);
