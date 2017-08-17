import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import NavBar from './NavBar.js';
import Home from './home'
import Projects from './projects'
import Blog from './blog'
import About from './about'
import Contact from './contact'


export default class Main extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = '#263238'
    document.body.style.margin = '0 0 0 0'
  }

  render() {
    return (
      <MuiThemeProvider style = {{Margin: 0}}>
        <Router>
          <div>
            <Route path="/" component={NavBar}/>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>);
  }
}