import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import OurWork from './components/OurWork';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      path: 'home'
    }
  }

  renderPath = () => {
    let path;
    let component;
    switch(this.state.path) {
      case 'home':
        path = '/';
        component = 'Home';
        break;
      case 'ourWork':
        path = 'our-work';
        component = 'OurWork';
        break;
      case 'team':
        path = 'team';
        component = 'Team';
        break;
      case 'contact':
        path = 'contact';
        component = 'Contact';
        break;
      default:
        path = '/'
    }
    return {
      path: path,
      component: component
    }
  }

  renderNav = (value) => {
    this.setState({ path: value })
  }

  render() {
    const route = this.renderPath()
    const path = route.path
    const component = route.component
    console.log('the path is ' + path + ' and the component is ' + component);
    return (
      <div className='app'>
        <Header
          navigationChange={ (value) => this.renderNav(value)}/>
        <Router>
          <div className='body'>
            <Route exact path={path} component={component} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
