import React, { Component } from 'react'
import { Layout, Menu, Icon, Breadcrumb } from 'antd'
import '../asset/css/main.pcss'

const { Header, Sider, Content } = Layout
const SubMenu = Menu.SubMenu

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			collapsed: false,
			pic: ''
		}
	}
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		})
		if (!this.state.collapsed) this.state.pic = '-min'
		else this.state.pic = ''
	}
	render() {
		return (
			<Layout>
				<Sider
					width={257}
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
					style={{ overflow: 'auto', height: '100vh' }}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<div style={{ padding: '10px' }}>
							<img src={require('../asset/images/logo' + this.state.pic + '.png')} className="home-pic"></img>
						</div>
						<Menu.Item key="1">
							<Icon type="user" />
							<span>nav 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera" />
							<span>nav 2</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="upload" />
							<span>nav 3</span>
						</Menu.Item>
						<SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
							<Menu.Item key="5">Option 5</Menu.Item>
							<Menu.Item key="6">Option 6</Menu.Item>
							<Menu.Item key="7">Option 7</Menu.Item>
							<Menu.Item key="8">Option 8</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: '0 20px' }}>
						<Icon
							className="trigger"
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle} />
						<Breadcrumb style={{ margin: '0 16px', display: 'inline-block' }}>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
					</Header>
					<Content style={{ margin: '3vh 0 0 0', padding: 18, background: '#fff', minHeight: 280, height: '100%', overflow: 'auto' }}>
						content
					</Content>
				</Layout>
			</Layout>
		)
	}
}

export default Home;
