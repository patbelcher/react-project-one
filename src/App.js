import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Courses from './components/scenes/Courses'
import Home from './components/scenes/Home'
import Edit from './components/scenes/Edit'
import Header from './components/common/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/courses" component={Courses} />
          <Route path="/courses/:id" component={Courses} />
          <Route exact path="/edit" component={Edit} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App