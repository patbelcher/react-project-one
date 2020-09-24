import React from 'react'
import Courses from './components/scenes/Courses'
import Edit from './components/scenes/Edit'



import {
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom"




//import Courses from './components/courses'
//import Welcome from './components/common/Welcome'
import Home from './components/scenes/Home'


import './App.css'



function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
         
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/courses/:id" component={Courses} />
        <Route exact path="/edit" component={Edit}
/>      <Route exact path="/home" component={Home}/>
       
      </Switch>

    </Router> 
     
    </div>
  )
}

export default App