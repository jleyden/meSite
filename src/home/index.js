import React from 'react';
import ElementPan from 'react-element-pan'

import lakePano from './lakePano.jpg';


export default class Home extends React.Component {

	render() {
		const height = this.props.data.contentHeight
		console.log(height)
		return (
			<ElementPan startX={600} startY={100} height={height}>
				<img src={ lakePano } height={height + 120}/>
			</ElementPan>
		)
	}
}