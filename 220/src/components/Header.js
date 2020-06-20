import React from 'react'
// import home from '../components/home'
// import login from '../components/login'
// import { ERANGE } from 'constants';
import {Link} from 'react-router-dom'
import apiconfig from '../config/api.config.json'

class Header extends React.Component{
  onSignOut () {
    localStorage.clear();
}

  render() {
    return (
      <nav class="navbar navbar-expand-lg"style={{backgroundColor:'#00008B', color: "#fff" }}>
  <a class="navbar-brand mr-4" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white" style={{backgroundColor:'#00008B'}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu 1
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white" style={{backgroundColor:'#00008B'}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu 2
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu 3
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
          <div class="pull ">
            <ul class="nav pull">
              <span>
                <div class = 'nav-link text-white'>
                  <i class="fas fa-bell"></i>
                    </div>
                      </span>
                    <div class="btn-group dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Hi, ilh
                      <b class="caret">
                        </b>
                        </a>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Change Password</a>
    <Link class="nav-link" to="" onClick={this.onSignOut}>Log Out</Link>
  </div>

                    </div>
                </ul> 
              </div>      
  </div>
</nav>

    );
  }
}
export default Header