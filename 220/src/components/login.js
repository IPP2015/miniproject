import React from 'react'
import api from '../helper/api'
import config from '../config/api.config.json'

class login extends React.Component{
constructor(props){
    super(props)
    this.state = {
        formdata : {
            username: '',
            password: '',
        },
        isRequest: false
    }
    this.onSignIn = this.onSignIn.bind(this)
    this.textchanged = this.textchanged.bind(this)
}
textchanged(e){
    let tmp = this.state.formdata
    tmp[e.target.name] = e.target.value
    this.setState({
        formdata: tmp
    })
}
async onSignIn(){
    this.setState({
        isRequest : true
        })
       
        let result = await api.login(this.state.formdata.username, this.state.formdata.password)
        if (result.code === 200){
        localStorage.setItem(config.ls.username, JSON.stringify(result.message.usename ))
        localStorage.setItem(config.ls.token, result.message.token)
        this.props.history.push('/Dashboard')
        alert('Login Success')
    }
    else {alert(result.message)
    }
    this.setState({
        isRequest:false
    })
}

    render(){
        return(
            // <br></br>
          <center>
              <br /><br /><br /><br /><br />
          <div class = "login-box mt-5" style = {{ border : "outset" }}>
             <div class="card" >
            <div class="card-body login-card-body">
            <form className = "form-signin">
               <center> <h1 className = "h3 mb-9 front-widget-normal-center"> LOGIN</h1></center>
                <label for = "inputemail" className = "sr-only"> username</label>
                <div class="input-group mb-3">
                <input type = "text" className = "form-control" placeholder = "username" name = "username" required = "" autofosus = "" value = { this.state.username} onChange={this.textchanged} />
                <div class="input-group-append"> <div class="input-group-text"> <span class="fas fa-user"></span> </div></div></div>
                <label for = "inputnama" className = "sr-only">mpassword</label>
                <div class="input-group mb-3">
                <input type = "password" className = "form-control" placeholder = "password" name = "password" required = "" value = { this.state.password} onChange={this.textchanged} />
                <div class="input-group-append"> <div class="input-group-text"> <span class="fas fa-lock"></span></div></div></div>
                <div class="row">
                <div class="col-8"> <div class="icheck-primary"><input type="checkbox" id="remember" />
                <label for="remember">Remember Me</label>
                  </div>
                </div>
                </div>
                <button className = "btn btn-lg btn-primary btn-block" disabled ={this.state.isRequest} type = "button" onClick = {this.onSignIn}>sign in</button>
                <center> <p className = "mt-s nb3 text-muted-center"> @2019 - 2020</p> </center>      
                </form>
                </div>
                </div>
                </div>
                </center>
                )
            }
}
export default login
