import React from 'react';
import {
	BarChart, Bar, XAxis, YAxis, CartesianGrid,
	Tooltip, Legend, ResponsiveContainer } from 'recharts';
import json2csv from 'json2csv'
import { CSVLink } from 'react-csv'
import { keys, nth } from 'lodash'
import RaisedButton from 'material-ui/RaisedButton';

import getData from './data/fresno'

const textStyle1 = {
	color: '#4DD0E1',
	fontFamily: 'Helvetica',
	textAlign: 'Center'
}

export default class caAirPollution extends React.Component {

	render() {
		const data = getData()
		const fields = keys(nth(data))
		const dataCSV = json2csv({data: data, fields: fields})
		return (
			<div>
				<h1 style={textStyle1}>Fresno County Air Pollution, 2012</h1>
				<ResponsiveContainer width={'100%'} height={500}>
					<BarChart data={data}
					          margin={{top: 10, right: 30, left: 0, bottom: 0}}>
						<XAxis dataKey="SUBCATEGORY"/>
						<YAxis/>
						<CartesianGrid strokeDasharray="3 3"/>
						<Tooltip/>
						<Legend style={textStyle1}/>
						<Bar dataKey="TOG" stackId="a" fill="#f44336" />
						<Bar dataKey="ROG" stackId="a" fill="#9C27B0" />
						<Bar dataKey="COT" stackId="a" fill="#3F51B5" />
						<Bar dataKey="NOX" stackId="a" fill="#03A9F4" />
						<Bar dataKey="SOX" stackId="a" fill="#009688" />
						<Bar dataKey="PM" stackId="a" fill="#8BC34A" />
						<Bar dataKey="PM10" stackId="a" fill="#FFEB3B" />
						<Bar dataKey="PM2.5" stackId="a" fill="#FF9800" />
						<Bar dataKey="NH3" stackId="a" fill="#FF5722" />
					</BarChart>
				</ResponsiveContainer>
				<CSVLink data={dataCSV}
				         filename='fresno-emissions.csv'
				         style={textStyle1}>
					<RaisedButton label='Download CSV'
					              style={textStyle1}
					              primary={true}/>
				</CSVLink>
			</div>
		)
	}
}
