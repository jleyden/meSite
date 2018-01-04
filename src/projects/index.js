import React from 'react';
import { List, ListItem } from 'material-ui/List';

import caAirPollution from './caAirPollution'

const listItemStyle = {
	color: 'white',
	textAlign: 'center'
}

const HOVER_COLOR = '#80CBC4'

export default class Projects extends React.Component {

	pushProject(projectName) {
		this.props.history.push({
			pathname: `${projectName}`
		})
	}

	render() {
		console.log(this.props.history)
		return (
			<List>
				<ListItem style={listItemStyle} hoverColor={HOVER_COLOR}
				          primaryText='JOUL'
				          onClick={() => this.pushProject('joul')}/>
				<ListItem style={listItemStyle} hoverColor={HOVER_COLOR}
				          primaryText='California Air Pollution'
					        onClick={() => this.pushProject('ca-air-pollution')}/>
				<ListItem style={listItemStyle} hoverColor={HOVER_COLOR}
				          primaryText='E-Mission'
				          onClick={() => this.pushProject('e-mission')}/>
				<ListItem style={listItemStyle} hoverColor={HOVER_COLOR}
				          primaryText='Photos'/>
				<ListItem style={listItemStyle} hoverColor={HOVER_COLOR}
				          primaryText='Videos'/>
			</List>
		)
	}
}

