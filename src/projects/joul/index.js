import React from 'react';
import {
	Step,
	Stepper,
	StepButton,
	StepContent,
} from 'material-ui/Stepper';
import { GridList, GridTile } from 'material-ui/GridList';

import logo from './joul.png'
import about1 from './about1.jpg'
import about2 from './about2.jpg'
import how1 from './how1.jpg'
import how2 from './how2.jpg'
import how3 from './how3.jpg'
import join1 from './join1.jpg'
import join2 from './join2.jpg'

const CONTENT_HEIGHT = 300
const FONT = 'Helvetica'

const styles = {
	buttonText: {
		color: '#FFF176',
		fontFamily: FONT
	},
	text: {
		color: 'white',
		fontFamily: FONT,
		position: 'absolute',
		top: '40%',
		fontSize: 14,
		margin: 15,
		backgroundColor: 'rgba(0,0,0,0.5)',
		boxShadow: '0 0 15px 10px rgba(0, 0, 0, 0.5)'
	},
	stepButton: {
		height: '45',
		margin: 'auto'
	},
	logo: {
		width: '20%',
		margin: 'auto'
	},
	grid: {
		paddingTop: 35,
		paddingBottom: -50,
		height: CONTENT_HEIGHT,
		overflowX: 'auto',
		flexWrap: 'nowrap'
	},
	about1: {
		backgroundImage: `url(${about1})`,
		backgroundSize: 'cover',
		height: CONTENT_HEIGHT
	},
	about2: {
		backgroundImage: `url(${about2})`,
		backgroundSize: 'cover',
		height: CONTENT_HEIGHT
	},
	how1: {
		backgroundImage: `url(${how1})`,
		backgroundSize: 'cover',
		height: CONTENT_HEIGHT
	},
	how2: {
		backgroundImage: `url(${how2})`,
		backgroundSize: 'cover',
		height: CONTENT_HEIGHT
	},
	how3: {
		backgroundImage: `url(${how3})`,
		backgroundSize: 'cover',
		height: CONTENT_HEIGHT
	},
	join1: {
		backgroundImage: `url(${join1})`,
		backgroundSize: 'cover',
		height: CONTENT_HEIGHT
	},
	join2: {
		backgroundImage: `url(${join2})`,
		backgroundSize: 'cover',
		height: CONTENT_HEIGHT
	},
	titleStyle: {
		color: 'white',
		fontFamily: FONT,
		fontSize: 15,
		fontWeight: 'bold'
	}
}

const tilesData = {
	intro: [
		{
			title: 'Joul (p. jool) is a carbon-backed currency',
			style: styles.about1,
			content: (<div style={styles.text}>
				Everything we do uses energy,
				and much of that energy is sourced by burning carbon into the atmosphere.
				With the Joul mobile app, users can track actions that reduce their carbon footprint.
				Then, after action verification, users can exchange their jouls for goods on the Joul Market.
			</div>)
		},
		{
			title: "Joul is for anyone invested in our planet's future",
			style: styles.about2,
			content: (<div style={styles.text}>
				Many of us care about the future of the Earth,
				but it's difficult to to carry this burden in our daily decisions.
				Joul incentivizes individuals to make green choices by giving them value in a marketplace.
				If you want to help the planet, or you just want more value in your pocket, get involved with Joul!
			</div>)
		}
	],
	how: [
		{
			title: 'Step 1: Perform a green action',
			style: styles.how1,
			content: (<div style={styles.text}>
				Use the mobile app to track your green action. For example, you can use public transportation.
				Joul will collect data, such as geo-path, to record your action for verification.
			</div>)
		},
		{
			title: 'Step 2: Verify and receive Jouls',
			style: styles.how2,
			content: (<div style={styles.text}>
				After you complete your green action, Joul uses an intelligent, distributed verification system
				to confirm that your action is valid. After the action is verified, you will recieve jouls proportional
				to offset carbon emissions.
			</div>)
		},
		{
			title: 'Step 3: Exchange goods in the Joul Market',
			style: styles.how3,
			content: (<div style={styles.text}>
				Jouls have value in the Joul Market. In this market, you can buy goods from other people in the Joul
				community. You can also sell an item in the market and collect more Jouls in your wallet!
			</div>)
		}
	],
	join: [
		{
			title: 'Demo & Contribute',
			style: styles.join1,
			content: (<div style={styles.text}>
				Joul protects the Earth and pays you at the same time. There's never been a better time to get involved!
				We are currently working on a trial for Joul in Alameda County, California. The plan is to focus primarily on
				public transportation in the coming months. Look out for a release on the iOS app store shortly! Also, check
				out our GitHub repo or contact us via email!
			</div>)
		},
		{
			title: 'Contact & Links',
			style: styles.join2,
			content: (<div style={styles.text}>
				<div><a href="https://github.com/jleyden/project194" style={{color: 'white'}}>
					GitHub Repository</a>
				</div>
				<div>Contact: jLeyden@berkeley.edu and vmiguel@berkeley.edu</div>
			</div>)
		}
	]
}

export default class Joul extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			stepIndex: 0
		}
	}

	render() {
		const {stepIndex} = this.state;
		return (
		<div>
			<div style={styles.logo}>
				<img src={logo} width='100%'/>
			</div>
			<div style={{width: '100%', height: '100%', margin: 'auto'}}>
				<Stepper
					activeStep={stepIndex}
					linear={false}
					orientation="vertical"
				>
					<Step>
						<StepButton
							style={styles.stepButton}
							icon=""
							onClick={() => this.setState({stepIndex: 0})}>
							<h3 style={styles.buttonText}>What is Joul?</h3>
						</StepButton>
						<StepContent>
							<GridList style={styles.grid}>
								{tilesData.intro.map((tile) => (
									<GridTile
										key={tile.title}
										style={tile.style}
										title={tile.title}
										titleStyle={styles.titleStyle}
									  titlePosition='top'
										titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 80%,rgba(0,0,0,0) 100%)"
									>
										{tile.content}
									</GridTile>
								))}
							</GridList>
						</StepContent>
					</Step>
					<Step>
						<StepButton
							style={styles.stepButton}
							icon=""
							onClick={() => this.setState({stepIndex: 1})}>
							<h3 style={styles.buttonText}>How does Joul work?</h3>
						</StepButton>
						<StepContent>
							<GridList style={styles.grid} cols={2.2}>
								{tilesData.how.map((tile) => (
									<GridTile
										key={tile.title}
										style={tile.style}
										title={tile.title}
										titleStyle={styles.titleStyle}
										titlePosition='top'
										titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 80%,rgba(0,0,0,0) 100%)"
									>
										{tile.content}
									</GridTile>
								))}
							</GridList>
						</StepContent>
					</Step>
					<Step>
						<StepButton
							style={styles.stepButton}
							icon=""
							onClick={() => this.setState({stepIndex: 2})}>
							<h3 style={styles.buttonText}>How can I get involved?</h3>
						</StepButton>
						<StepContent>
							<GridList style={styles.grid}>
								{tilesData.join.map((tile) => (
									<GridTile
										key={tile.title}
										style={tile.style}
										title={tile.title}
										titleStyle={styles.titleStyle}
										titlePosition='top'
										titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 80%,rgba(0,0,0,0) 100%)"
									>
										{tile.content}
									</GridTile>
								))}
							</GridList>
						</StepContent>
					</Step>
				</Stepper>
			</div>
		</div>
		);
	}
}
