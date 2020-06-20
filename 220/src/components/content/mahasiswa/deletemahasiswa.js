import React from "react"
import axios from "axios"
import {Modal,ModalHeader,ModalBody,ModalFooter, Button} from "reactstrap"
import apiconfig from "../../../config/api.config.json"

class deletemahasiswa extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            formdata: {
                kode_mahasiswa: ""
            }
    }
    this.deleteHandler = this.deleteHandler.bind(this)
}
componentWillReceiveProps(newProps){
    this.setState({
        formdata: newProps.listmahasiswa
    })
}
    deleteHandler(){
        let token = localStorage.getItem(apiconfig.ls.token)
        let option = {
            url: apiconfig.BASE_URL + apiconfig.ENDPOINTS.mahasiswa,
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
        this.props.kodemahasiswastatus()
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
                    <Button color = "warning" onClick = {this.props.kodemahasiswastatus}> no</Button>
                </ModalFooter>
        </Modal>
    )
}
}
    
    export default deletemahasiswa