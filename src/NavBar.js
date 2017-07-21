import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton'

import portraitURL from './portrait.jpeg';

export default class NavBar extends React.Component {
    componentWillMount() {
        this.toolBarStyle = {
            'background-color': '#00796B',
            height: '80px'
        }
        this.groupStyle = {
            height: '100%',
            margin: 'auto'
        }
        this.buttonStyle = {
            height: '100%',
            margin: '0 0 0 0',
            color: '#ECEFF1'
        }
        this.centerStyle = {
            height: '100%',
            margin: '0 0 0 0',
        }
    }

    render() {
        return (
            <Toolbar style={this.toolBarStyle}>
                <ToolbarGroup style={this.groupStyle}>
                    <FlatButton style={this.buttonStyle}>Projects</FlatButton>
                    <FlatButton style={this.buttonStyle}>Blog</FlatButton>
                    <image src="./portrait.jpeg" alt="myface" width='50px'/>
                    <FlatButton style={this.buttonStyle}>About</FlatButton>
                    <FlatButton style={this.buttonStyle}>Contact</FlatButton>
                </ToolbarGroup>
            </Toolbar>);
    }
}