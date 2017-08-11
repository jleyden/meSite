import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton';

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
// hi
export default class NavBar extends React.Component {

    render() {
        return (
            <Toolbar style={ toolBarStyle }>
                <ToolbarGroup style={ groupStyle }>
                    <FlatButton style={ buttonStyle }>Projects</FlatButton>
                    <FlatButton style={ buttonStyle }>Blog</FlatButton>
                    <FloatingActionButton>
                        <img src={ portraitURL } style={ imgStyle }/>
                    </FloatingActionButton>
                    <FlatButton style={ buttonStyle }>About</FlatButton>
                    <FlatButton style={ buttonStyle }>Contact</FlatButton>
                </ToolbarGroup>
            </Toolbar>);
    }
}