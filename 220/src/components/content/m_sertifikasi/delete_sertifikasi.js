import React from "react"
import axios from "axios"
import {Modal,ModalHeader,ModalBody,ModalFooter, Button} from "reactstrap"
import apiconfig from "../../../config/api.config.json"

class deletemahasiswa extends React.Component{
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
        formdata: newProps.list_sertifikasi
    })
}
    deleteHandler(){
        let token = localStorage.getItem(apiconfig.ls.token)
        let option = {
            url: apiconfig.BASE_URL + apiconfig.ENDPOINTS.x_sertifikasi,
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
        this.props.sertifikasistatus()
})
.catch((error) => {
    alert(error)
     } )
}
render(){
    return (
        <Modal isOpen = {this.props.delete} className = {this.props.className} className = "modal-dialog">
        <ModalHeader className = "modal-title text-white" style = {{backgroundColor:'#FF4500'}}>Hapus Sertifikasi?</ModalHeader>
            <ModalBody>
            <div class="row">
                <div class="col-sm-4">
                <i class="fas fa-trash-alt fa-10x"></i>
                </div>
                <div class="col-sm-8">
                    <h6 class ="text pt-4">Apakah Anda Ingin Menghapus Sertifikasi</h6>
                    {this.props.list_sertifikasi.certificate_name} ?
                    

                </div>
            </div>
            
            </ModalBody>
            <ModalFooter>
                <Button color = "primary" onClick = {this.deleteHandler}>Yes</Button>
                <Button color = "danger" onClick = {this.props.sertifikasistatus}>No</Button>
            </ModalFooter>
        </Modal>
    )
}

}
    
    export default deletemahasiswa