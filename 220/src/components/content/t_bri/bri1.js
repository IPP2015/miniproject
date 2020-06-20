import React from "react";
import { Modal,ModalFooter } from "reactstrap";
import { MDBTable, MDBTableBody,MDBTableHead,ModalBody, ModalHeader} from "mdbreact";
import apiconfig from '../../../config/api.config.json'
import axios from "axios";
import Editsertifikasi from "../m_sertifikasi/edit_sertifikasi"
import Createsertifikasi from "../m_sertifikasi/create_sertifikasi"
//import detailpelamar from "../../detailpelamar"
import Deletesertifikasi from "../m_sertifikasi/delete_sertifikasi"

class Bri extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      po:[],
      list_po:[],
      current_po:{},
              formdata : {
                kt_trans:"",
                tgl_trans:"",
                kd_sub:"",
                userid:"",
                total_item:"",
                total_harga:"",
                discount:""
                
              }
    };

    this.mStatus = this.mStatus.bind(this);
    this.postatus=this.postatus.bind(this)
  }

  postatus(){
    this.setState({
      viewpo:false
    })
    this.getpo()
  }
  
  mStatus() {
    this.setState({
      list_po: false
    });
  }

  getpo(){
    let token = localStorage.getItem(apiconfig.ls.token);
    let option = {
       url:apiconfig.BASE_URL+apiconfig.ENDPOINTS.po,
      method: "get",
      headers : {
        Authorization : token
      }
    };
    axios(option)
    .then(response => {
      console.log(response)
      this.setState({
       //list_po:tmp,
        po: response.data.message
    });
  })
    .catch(error =>{
     alert(error)
    })
  }

  componentDidMount() {
    this.getpo();
  }
  
  render() {
    
    return (
      <Modal isOpen={this.props.list} className="modal-dialog modal-xl" className={this.props.className}
      style={{display:
        this.state.createsertifikasi == true ||
        this.state.editsertifikasi == true || this.state.detailpelamar == true
          ? "none"
          : "block"}}>
        <div class="modal-header" style = {{backgroundColor:'#00008B'}}>
        <h4 class="modal-title text-white">Detail Pelamar</h4>
                 
        <button
          type="button"
          class="close text-white"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true" onClick={this.props.mStatus}> 
            ×
          </span>
        </button>
        </div>

      <ModalBody>
      
    <div class="col-md-auto">
    <label> KODE TRANSAKSI</label>
      <input type="text" 
      class="form-control"
      nama="kt_trans"
      // value={this.props.list_po_detail.kt_brg}
      value={this.state.kd_trans}
      />
    </div>

    <div class="col-md-auto">
     <label>TNGL TRANS</label>
      <input 
      type="text"
      class="form-control"
      nama="tgl_trans"
      //value={this.props.list_po_detail.tgl_trans}
      value={this.state.tgl_trans}
      />
    </div>
  
    <div class="col-md-auto">
      <label>TOTAL ITEM BARANG</label>
      <input 
      type="text" 
      class="form-control"
      nama="total_item"
      value={this.state.total_item}
      />
    </div>

    <div class="col-md-auto">
    <label>TOTAL HARGA</label>
      <input 
      type="text"
      class="form-control"
      nama="total_harga"
      value={this.state.total_harga}
      //value={this.props.list_po_detail.total_harga}
      />
    </div>
    
    <div class="col-md-auto">
      <label>DISCOUNT</label>
      <input 
      type="text" 
      class="form-control"
      nama="discount"
      value={this.state.discount}
      />
    </div>
    
    <div class="col-md-auto">
     <label>KODE SUPLIER</label>
      <input 
      type="text"
      class="form-control"
      nama="userid"
      //value={this.state.po.map((value) => value === this.state.po.userid)}
      value={this.state.userid}
      />
    </div>


      </ModalBody>
{/*           
          <Editsertifikasi
            edit={this.state.editsertifikasi}
            sertifikasistatus={this.sertifikasistatus}
            list_sertifikasi={this.state.current_sertifikasi}
          />
          <Deletesertifikasi
            delete={this.state.deletesertifikasi}
            sertifikasistatus={this.sertifikasistatus}
            list_sertifikasi = {this.state.current_sertifikasi}/>
          
          <Createsertifikasi
            create={this.state.createsertifikasi}
            sertifikasistatus={this.sertifikasistatus}
          /> */}
            {/* <MDBDataTable striped bordered hover data = {data}/> */} 
        
      </Modal>
    
    );
  }
}

export default Bri;
