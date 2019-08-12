import React,{ Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends  Component{
  render() {
    return (
      <Router>
        <Route path="/" component={Home}>
          <Route path="about" component={About} />
          <Route path="inbox" component={Inbox}>
            <Route path="messages/:id" component={Message} />
          </Route>
        </Route>
      </Router>
    )
  }
};

class Home extends Component{
  render() { 
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class About extends Component{
  render() {
    return <h3>About</h3>
  }
}

class Inbox extends Component{
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
}

class Message extends Component{
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
}

export default App;
