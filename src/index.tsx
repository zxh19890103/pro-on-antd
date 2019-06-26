import React from "react"
import { render } from "react-dom"
import {
	Alert,
	Checkbox,
	Table,
	Icon
} from "antd"

import "antd/dist/antd.css"

const App = ({}) => {
	return <>
		<Table rowKey="id" bordered dataSource={[
			{ id: "12", name: "Singhi", age: 30 },
			{ id: "34", name: "Peter", age: 40 }
		]}>
			<Table.Column title="Name" dataIndex="name"/>
			<Table.Column title="Age" dataIndex="age"/>
		</Table>
		<Checkbox/>
		<Alert icon={<Icon type="download"/>} type="success" description="Hello" message="World"/>
	</>
}

render(<App/>, document.querySelector("#App"))
