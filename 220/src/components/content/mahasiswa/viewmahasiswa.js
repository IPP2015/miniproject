import React from "react";
import {Modal,ModalHeader,ModalBody,ModalFooter, Button} from "reactstrap"

class viewmahasiswa extends React.Component{
    render(){
        return (
        <Modal isOpen={this.props.view} className={this.props.className}>
            <ModalHeader> View Unit </ModalHeader> 
            <ModalBody>

            <form role="form">
                    <div class ="input-group">
                        <label for="text"> Kode Mahasiswa : </label>
                        <input type="text" class="form-control" readOnly
                        name="kode_mahasiswa" 
                        value={this.props.listmahasiswa.kode_mahasiswa} 
                         />
                         </div>
                         <div class ="input-group">
                        <label for="text"> Nama Mahasiswa : </label>
                        <input type="text" class="form-control" placeholder="Type Unit Name" readOnly
                        name="nama_mahasiswa" 
                        value={this.props.listmahasiswa.nama_mahasiswa} 
                         />
                    </div>
                
                    <div class ="input-group"> 
                    <label for="text"> kode_kota : </label>
                        <input type="text" class="form-control" placeholder="email" readOnly
                        name="kode_kota" 
                        value={this.props.listmahasiswa.kode_kota} 
                        />
                    </div>
                    <div class ="input-group">
                    <label for="text"> Kode Agama : </label>
                        <input type="text" class="form-control" placeholder="Type address" readOnly
                        name="kode_agama" 
                        value={this.props.listmahasiswa.kode_agama} 
                        />
                    </div>
                    
                    <div class ="input-group">
                    <label for="text"> Jurusan : </label>
                        <input type="text" class="form-control" placeholder="phone" readOnly
                        name="kode_jurusan" 
                        value={this.props.listmahasiswa.kode_jurusan} 
                        />
                   </div>
                   <div class ="input-group">
                    <label for="text"> kode_provinsi : </label>
                        <input type="text" class="form-control" placeholder="phone" readOnly
                        name="kode_provinsi" 
                        value={this.props.listmahasiswa.kode_provinsi} 
                        />
                   </div>
                   <div class ="input-group">
                    <label for="text"> jenis_kelamin : </label>
                        <input type="text" class="form-control" placeholder="phone" readOnly
                        name="jenis_kelamin" 
                        value={this.props.listmahasiswa.jenis_kelamin} 
                        />
                   </div>
                   <div class ="input-group">
                    <label for="text"> hobi : </label>
                        <input type="text" class="form-control" placeholder="phone" readOnly
                        name="hobi" 
                        value={this.props.listmahasiswa.hobi} 
                        />
                   </div>
                </form>

            </ModalBody>

            <ModalFooter>
                <Button color="danger" onClick= {this.props.kodemahasiswastatus}> Close </Button>
            </ModalFooter>
        </Modal>
        )
    }
} 
export default viewmahasiswa