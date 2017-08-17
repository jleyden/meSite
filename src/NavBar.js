import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Link } from 'react-router-dom'

import portraitURL from './portrait.jpeg';

const toolBarStyle = {
    'background-color': '#00796B',
    height: '80px'
}
// hi
const groupStyle = {
    height: '100%',
    margin: 'auto'
}

const buttonStyle = {
    height: '100%',
    margin: '0 0 0 0',
    color: 'white'
}

const imgStyle = {
    width: '100%',
    height: '100%',
}

export default class NavBar extends React.Component {

    render() {
        return (
            <Toolbar style={ toolBarStyle }>
                <ToolbarGroup style={ groupStyle }>
                    <Link to="/projects" height="100%">
                        <FlatButton style={ buttonStyle }>Projects</FlatButton>
                    </Link>
                    <Link to="/blog" height="100%">
                        <FlatButton style={ buttonStyle }>Blog</FlatButton>
                    </Link>
                    <Link to="/">
                        <FloatingActionButton>
                            <img src={ portraitURL } style={ imgStyle }/>
                        </FloatingActionButton>
                    </Link>
                    <Link to="/about" height="100%">
                        <FlatButton style={ buttonStyle }>About</FlatButton>
                    </Link>
                    <Link to="/contact" height="100%">
                        <FlatButton style={ buttonStyle }>Contact</FlatButton>
                    </Link>
                </ToolbarGroup>
            </Toolbar>);
    }
}