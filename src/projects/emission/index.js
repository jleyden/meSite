import React from 'react'
import MapGL from 'react-map-gl'

import Overlay from './overlay.js'
import Locations from './data/locations.json'

const mapBoxToken = 'pk.eyJ1Ijoiam9obmpsNzEyIiwiYSI6ImNqNjluemJxMTBvbHYycHFyb29hd3pvNzIifQ.dJoKxk-xckePsT5nioOFJg' // eslint-disable-line

export default class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewport: {
				...Overlay.defaultViewport,
				width: window.innerWidth,
				height: window.innerHeight
			},
			data: Locations.map(d => [Number(d.longitude), Number(d.latitude)])
		};
	}

	componentDidMount() {
		window.addEventListener('resize', this._resize.bind(this));
		this._resize();
	}

	_resize() {
		this._onViewportChange({
			width: window.innerWidth,
			height: window.innerHeight
		});
	}

	_onViewportChange(viewport) {
		this.setState({
			viewport: {...this.state.viewport, ...viewport}
		});
	}

	render() {
		const {viewport, data} = this.state
		return (
			<MapGL
			{...viewport}
			mapStyle="mapbox://styles/mapbox/dark-v9"
			onViewportChange={this._onViewportChange.bind(this)}
			mapboxApiAccessToken={mapBoxToken}
		>
				<Overlay viewport={viewport} data={data || []}/>
			</MapGL>
		)
	}
}


