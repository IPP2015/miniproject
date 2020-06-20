import React from 'react'
import { Switch, Route } from "react-router-dom";
import apiconfig from '../config/api.config.json'
import Header from '../components/Header'
import Sidebar from '../components/sidebar'
import Footer from '../components/Footer'
import Home from '../components/home'
import Datatablesertifikasi from "../components/content/m_sertifikasi/list_sertifikasi"
import Datatablebri from "../components/content/t_bri/bri"
import {Redirect}  from 'react-router' 

class Dashboard  extends React.Component{
    render(){
        return(
          <div class="wrapper">
            <Header />
             <Home/>
            <Sidebar />
            
           {/* <Footer/>  */}
                  <Switch>
                  {/* <PrivateRoute exact path="/listmahasiswa" component={listmahasiswa} />
                  <PrivateRoute exact path="/page" component={page} />
                  <PrivateRoute exact path="/listm_user" component={listmuser} /> */}
                  <PrivateRoute exact path="/list_sertifikasi/" component={Datatablesertifikasi} />
                  <PrivateRoute exact path="/list_sertifikasi/" component={Datatablebri} />
           
                  </Switch>
                  </div>
        )
    }

}
const PrivateRoute = ({ component : Component, ...rest }) => (
  <Route
  {...rest} 
  render = {props=>
  localStorage.getItem(apiconfig.ls.token)!= null ? (
    <Component {...props} />
  ) : (
    <Redirect
    to={{
      Pathname: "/",
      State: { from : props.location }
    }}
    />
  )}   
    />
)

export default Dashboard