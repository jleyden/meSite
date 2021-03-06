import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import NavBar from './NavBar.js';
import Home from './home'
import Blog from './blog'
import About from './about'
import Contact from './contact'
import Projects from './projects'
import caAirPollution from './projects/caAirPollution'
import Joul from './projects/joul'
import emission from './projects/emission'

const NAV_BAR_HEIGHT = 50

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
            <Route path="/" component={withDimensions(NavBar)}/>
            <div>
              <Route exact path="/" component={withDimensions(Home)}/>
              <Route exact path="/projects" component={withDimensions(Projects)}/>
              <Route exact path="/ca-air-pollution" component={withDimensions(caAirPollution)}/>
              <Route exact path="/joul" component={withDimensions(Joul)}/>
	            <Route exact path="/e-mission" component={withDimensions(emission)}/>
              <Route path="/blog" component={withDimensions(Blog)}/>
              <Route path="/about" component={withDimensions(About)}/>
              <Route path="/contact" component={withDimensions(Contact)}/>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>);
  }
}

function withDimensions(WrappedComponent) {
  return class $MeasuredPanel extends React.Component {

    constructor(props) {
      super(props)
	    this.state = {
		    windowHeight: window.innerHeight,
		    windowWidth: window.innerWidth,
		    navBarHeight: NAV_BAR_HEIGHT,
        contentHeight: window.innerHeight - NAV_BAR_HEIGHT,
        contentWidth: window.innerWidth
	    }
    }

    render() {
      return <WrappedComponent data={this.state} {...this.props} />
    }
  }
}