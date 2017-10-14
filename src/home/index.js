import React from 'react';
import ElementPan from 'react-element-pan'

import lakePano from './lakePano.jpg';


export default class Home extends React.Component {

	render() {
		const height = this.props.data.contentHeight
		const width = this.props.data.contentWidth
		const centerBoxStyle = {
			position: 'absolute',
			top: '50%',
			left: '50%',
			'margin-right': '-50%',
			transform: 'translate(-50%, -50%)',
			width: '45%',
			textAlign: 'center',
			backgroundColor: 'rgba(0, 0, 0, 0.25)',
			boxShadow: '0 0 20px 10px rgba(0, 0, 0, 0.25)'
		}
		console.log(height)
		return (
			<ElementPan startX={400} startY={40} height={height} width={width}>
				<div>
					<img src={ lakePano } height={height + 120}/>
					<div style={centerBoxStyle}>
						<h1 style={{color: 'white', fontFamily: 'Helvetica', fontSize: '350%'}}>
							Hi, I'm John
						</h1>
						<h3 style={{color: 'white', fontFamily: 'Helvetica', fontSize: '150%'}}>
							I study Computer Science and Conservation & Resource Studies at U.C. Berkeley.
							I am interested in applying data science and
							human-computer interaction towards challenges in environmental sustainability.
							Welcome to my site!
						</h3>
					</div>
				</div>
			</ElementPan>
		)
	}
}