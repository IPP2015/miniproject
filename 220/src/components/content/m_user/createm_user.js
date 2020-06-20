import React from "react"
import axios from "axios"
import {Modal,ModalHeader,ModalBody,ModalFooter, Button} from "reactstrap"
import apiconfig from "../../../config/api.config.json"

class createmuser extends React.Component{
    constructor(props){
        super(props)
        //let userdata = JSON.parse(localStorage.getItem(apiconfig.ls.userdata)) untuk update data
        this.state = {
            formdata: {
                id: "",
                username: "",
                m_password: ""
             }
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }
    changeHandler(e){
        let tmp = this.state.formdata
        tmp[e.target.name] = e.target.value
        this.setState({
            formdata: tmp
        })
    }
    submitHandler(){
        let token = localStorage.getItem(apiconfig.ls.token)
        let option = {
            url: apiconfig.BASE_URL + apiconfig.ENDPOINTS.m_user,
            method: "post",
            headers:{
                "Authorization": token,
                "Content-Type": "application/json"
            },
            data: this.state.formdata
        }
        axios(option)
        .then((response) => {
            if(response.data.code === 200){
                alert("sukses")
                this.props.idstatus()
            }
            else {
                alert(response.data.message)
                
            }
        })
        .catch((error) => {
        alert(error)
         } )
    }
    render(){
        return(
            <Modal isOpen = {this.props.create} className = {this.props.className}>
                <ModalHeader> create form</ModalHeader>
                <ModalBody>
                <form class="form-inline">
                    <div class ="input-group mb-3 input-group-sm">
                        <label for="text"> id : </label>
                        <input type="text" class="form-control" 
                        name="id" 
                        value={this.state.formdata.id} 
                        onChange = {this.changeHandler}
                         />
                        <label for="text"> username : </label>
                        <input type="text" class="form-control" placeholder="Type Unit Name" 
                        name="username" 
                        value={this.state.formdata.username} 
                        onChange = {this.changeHandler}
                         />
                    </div>
                
                    <div class ="input-group mb-3 input-group-sm"> 
                    <label for="text"> m_password : </label>
                        <input type="text" class="form-control" placeholder="email" 
                        name="m_password" 
                        value={this.state.formdata.m_password} 
                        onChange = {this.changeHandler}
                        />
                    </div>
                </form>
                </ModalBody>
                <ModalFooter>
                    <Button color = "primary" onClick = {this.submitHandler} >save </Button>
                    <Button color = "warning" onClick = {this.props.idstatus}> Cancel</Button>
                 {/* <Button color = "primary" onClick = {this.submitHandler} >test </Button> */}
                </ModalFooter>
            </Modal>
        )
    }
}
export default createmuser