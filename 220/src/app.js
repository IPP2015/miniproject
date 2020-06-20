import React from 'react'
import{Switch,Route} from 'react-router-dom'
import login from './components/login'
import Dashboard from './components/Dashboard'
import apiconfig from './config/api.config.json'

class App extends React.Component{
    render(){
        return(
           <Switch>
          < Route exact path= "/" render = {() => 
              localStorage.getItem(apiconfig.ls.token) == null ?(
          < Route exact path= "/" component = {login} /> 
          ) : (
            <Dashboard/>
          )
          }/>
          <Dashboard/>
        </Switch>
        )
    }
}
export default App

// npm install react
// npm install react-dom
//npm install react-scripts
// "start" : "react-scripts start",