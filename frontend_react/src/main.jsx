import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

import { HashRouter, Routes, Route, Link } from 'react-router-dom' //components 
import Students from './students'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Home !!</h1>
        <h2>Welcome to React Application !! </h2>
      </div>)
  }
}

function getTime() {
  var d = new Date();
  return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
}


const routes = <HashRouter>
  <h4>Time from reactapp:{getTime()}</h4>
  <header>
    <h1>
      <Link to="/">Home</Link>&ensp;
      <Link to="/students">Students</Link>&ensp;
    </h1>
  </header>
  <Routes>
    <Route exact path="/students" element={<Students />}></Route>
    <Route exact path="/" element={<App />}></Route>
  </Routes>
</HashRouter>




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {routes}
  </React.StrictMode>
)
