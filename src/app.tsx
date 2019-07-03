import React from "react"
import { Switch, Route, HashRouter, Link } from "react-router-dom"
import {
	Layout,
	Menu,
	Icon
} from 'antd'
const { Header, Content } = Layout

import routes from "./routes"
import menu from "./menu"

import "antd/dist/antd.css"
import "./app.css"

const App = ({ }) => {
	return <HashRouter>
		<Layout>
			<Header className="header">
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
					style={{ lineHeight: '64px' }}
				>
					{
						menu.items.map(mi => {
							return <Menu.Item key={mi.url}>
								<Link to={mi.url}>
									<Icon type={mi.icon} />
									{mi.title}
								</Link>
							</Menu.Item>
						})
					}
				</Menu>
			</Header>
			<Layout style={{ padding: '0 24px 24px' }}>
				<Content
					style={{
						background: '#fff',
						padding: 24,
						margin: 0,
						minHeight: 560,
					}}
				>
					<Switch>
						{
							routes.map(({ key, path, component }) => {
								return <Route
									key={key}
									exact
									path={path}
									component={component} />
							})
						}
					</Switch>
				</Content>
			</Layout>
		</Layout>
	</HashRouter>
}

export {
	App
}
