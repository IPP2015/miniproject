import React from "react"
import axios from "axios"
import {Modal,ModalHeader,ModalBody,ModalFooter, Button} from "reactstrap"
import apiconfig from "../../../config/api.config.json"

class deletemuser extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            formdata: {
                id: ""
            }
    }
    this.deleteHandler = this.deleteHandler.bind(this)
}
componentWillReceiveProps(newProps){
    this.setState({
        formdata: newProps.listm_user
    })
}
    deleteHandler(){
        let token = localStorage.getItem(apiconfig.ls.token)
        let option = {
            url: apiconfig.BASE_URL + apiconfig.ENDPOINTS.m_user,
            method: "delete",
            headers:{
                "Authorization": token,
                "Content-Type": "application/json"
    }, 
    data: this.state.formdata
}
axios(option)
.then((response) => {
        alert("sukses")
        this.props.idstatus()
})
.catch((error) => {
    alert(error)
     } )
}
render(){
    return (
    <Modal isOpen={this.props.delete} className={this.props.className}>
        <ModalHeader> delete form </ModalHeader> 
        <ModalBody>
        <p>delete</p>
        </ModalBody>
        <ModalFooter>
                    <Button color = "primary" onClick = {this.deleteHandler} >yes </Button>
                    <Button color = "warning" onClick = {this.props.idstatus}> no</Button>
                </ModalFooter>
        </Modal>
    )
}
}
    
    export default deletemuser