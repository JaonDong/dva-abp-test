import React, { PropTypes } from 'react'
import { Menu, Icon, Switch } from 'antd'
import { Link } from 'dva/router'
import  config  from '../../utils/config'
import styles from './main.less'




function Sider({ siderFold,darkTheme,location,changeTheme }) {
  console.log(config,"config")
  return (
    <div>
      <div className={styles.logo}>
        <img src={config.logoSrc} />
        {siderFold?'':<span>{config.logoText}</span>}
      </div>
      <Menu
        mode={siderFold?"vertical":"inline"}
        theme={darkTheme?"dark":"light"}
        defaultSelectedKeys={[location.pathname.split('/')[location.pathname.split('/').length - 1]||'dashboard']}>
       
      </Menu>
      {!siderFold?<div className={styles.switchtheme}>
        <span><Icon type="bulb" />切换主题</span>
        <Switch onChange={changeTheme} defaultChecked={darkTheme} checkedChildren="黑" unCheckedChildren="白" />
      </div>:''}
    </div>
  )
}

export default Sider
