import React from 'react';
import DeckGL, {HexagonLayer} from 'deck.gl';

const LIGHT_SETTINGS = {
	lightsPosition: [-0.144528, 49.739968, 8000, -3.807751, 54.104682, 8000],
	ambientRatio: 0.4,
	diffuseRatio: 0.6,
	specularRatio: 0.2,
	lightsStrength: [0.8, 0.0, 0.8, 0.0],
	numberOfLights: 2
};

const colorRange = [
	[1, 152, 189],
	[73, 227, 206],
	[216, 254, 181],
	[254, 237, 177],
	[254, 173, 84],
	[209, 55, 78]
];

const elevationScale = {min: 3, max: 30};

const defaultProps = {
	radius: 50,
	upperPercentile: 100,
	coverage: 1
};

export default class Overlay extends React.Component {
	static get defaultColorRange() {
		return colorRange;
	}

	static get defaultViewport() {
		return {
			altitude: 1.5,
			longitude: -46.70618384138379,
			latitude: -23.52732355026779,
			zoom: 11.826314796915543,
			minZoom: 5,
			maxZoom: 15,
			pitch: 54.04503115104478,
			bearing: -28.099799584323023
		};
	}

	constructor(props) {
		super(props);
		this.startAnimationTimer = null;
		this.intervalTimer = null;
		this.state = {
			elevationScale: elevationScale.min
		};

		this._startAnimate = this._startAnimate.bind(this);
		this._animateHeight = this._animateHeight.bind(this);
	}

	componentDidMount() {
		this._animate();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.data.length !== this.props.data.length) {
			this._animate();
		}
	}

	componentWillUnmount() {
		this._stopAnimate();
	}

	_animate() {
		this._stopAnimate();

		// wait 1.5 secs to start animation so that all data are loaded
		this.startAnimationTimer = window.setTimeout(this._startAnimate, 1500);
	}

	_startAnimate() {
		this.intervalTimer = window.setInterval(this._animateHeight, 20);
	}

	_stopAnimate() {
		window.clearTimeout(this.startAnimationTimer);
		window.clearTimeout(this.intervalTimer);
	}

	_animateHeight() {
		if (this.state.elevationScale === elevationScale.max) {
			this._stopAnimate();
		} else {
			this.setState({elevationScale: this.state.elevationScale + 1});
		}
	}

	render() {
		const {viewport, data, radius, coverage, upperPercentile} = this.props;

		if (!data) {
			return null;
		}

		const layers = [
			new HexagonLayer({
				id: 'heatmap',
				colorRange,
				coverage,
				data,
				elevationRange: [0, 500],
				elevationScale: this.state.elevationScale,
				extruded: true,
				getPosition: d => d,
				lightSettings: LIGHT_SETTINGS,
				onHover: this.props.onHover,
				opacity: 1,
				pickable: Boolean(this.props.onHover),
				radius,
				upperPercentile
			})
		];

		return <DeckGL {...viewport} layers={layers} />;
	}
}

Overlay.displayName = 'Overlay';
Overlay.defaultProps = defaultProps;