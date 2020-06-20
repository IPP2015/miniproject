import React from "react";
import {Modal,ModalHeader,ModalBody,ModalFooter, Button} from "reactstrap"

class viewmuser extends React.Component{
    render(){
        return (
        <Modal isOpen={this.props.view} className={this.props.className}>
            <ModalHeader> View Unit </ModalHeader> 
            <ModalBody>

            <form class="form-inline">
                    <div class ="input-group mb-3 input-group-sm">
                        <label for="text"> id : </label>
                        <input type="text" class="form-control" readOnly
                        name="id" 
                        value={this.props.listm_user.id} 
                         />
                        <label for="text"> username : </label>
                        <input type="text" class="form-control" placeholder="Type Unit Name" readOnly
                        name="username" 
                        value={this.props.listm_user.username} 
                         />
                    </div>
                
                    <div class ="input-group mb-3 input-group-sm"> 
                    <label for="text"> m_password : </label>
                        <input type="text" class="form-control" placeholder="email" readOnly
                        name="m_password" 
                        value={this.props.listm_user.m_password} 
                        />
                    </div>
                </form>

            </ModalBody>

            <ModalFooter>
                <Button color="danger" onClick= {this.props.idstatus}> Close </Button>
            </ModalFooter>
        </Modal>
        )
    }
} 
export default viewmuser