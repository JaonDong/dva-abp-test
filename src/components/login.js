import React, { PropTypes } from 'react'
import {
    Icon,
    message,
    Button,
    Row,
    Col,
    Form,
    Input,
    Select
} from 'antd'
const FormItem = Form.Item;

const login = ({
    users,
    onOk,
    form: {
        getFieldDecorator,
        validateFieldsAndScroll
    }
}) => {
    console.log(users);
    function handleOk() {
        validateFieldsAndScroll((errors, values) => {
            if (errors) {
                console.log(errors);
                return
            }
            onOk(values)
        })
    }

    document.onkeyup = e => e.keyCode === 13 && handleOk()

    return (
        <form>
            <FormItem hasFeedback>
                {getFieldDecorator('UsernameOrEmailAddress', {
                    rules: [
                        {
                            required: true,
                            message: '请填写用户名'
                        }
                    ]
                })(<Input size="large" placeholder="用户名" />)}
            </FormItem>
            <FormItem hasFeedback>
                {getFieldDecorator('Password', {
                    rules: [
                        {
                            required: true,
                            message: '请填写密码'
                        }
                    ]
                })(<Input size="large" type="password" placeholder="密码" />)}
            </FormItem>
            {
                users.message!=null?<Row>{users.message}</Row>:""
            }
        
            <Row>
                <Button type="primary" size="large" onClick={handleOk} loading={users.loginButtonLoading} >
                    登录
          </Button>
            </Row>
        </form>
    )
}
login.propTypes = {
    users:PropTypes.object,
    onOk: PropTypes.func,
    form: PropTypes.object
}

export default Form.create()(login)