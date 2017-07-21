import React from 'react';
import NavBar from './NavBar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Main extends React.Component {
    componentWillMount() {
        document.body.style.backgroundColor = '#263238'
        document.body.style.margin = '0 0 0 0'
    }

    render() {
        return (
            <MuiThemeProvider style = {{Margin: 0}}>
                <NavBar/>
            </MuiThemeProvider>);
    }
}