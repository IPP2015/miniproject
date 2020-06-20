import React from "react";
import { Modal,ModalFooter } from "reactstrap";
import { MDBTable, MDBTableBody,MDBTableHead} from "mdbreact";
// import Editsertifikasi from "../components/content/m_sertifikasi/edit_sertifikasi"
// import Createsertifikasi from "../components/content/m_sertifikasi/create_sertifikasi"
// import Deletesertifikasi from "../components/content/m_sertifikasi/delete_sertifikasi"
import apiconfig from '../../../config/api.config.json'
import axios from "axios";

class Bri extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // barang: [],
      // po:[],
      // list_po:[],
      // current_po:{},
              po_detail: [],
              list_po_detail: [],
              current_po_detail: {},
              // formdata : {
              //   kt_trans:"",
              //   tgl_trans:"",
              //   kd_sub:"",
              //   userid:"",
              //   total_item:"",
              //   total_harga:"",
              //   discount:""
                
              // }
    };
  
    //this.listModalbri = this.listModalbri.bind(this);
    this.mStatus = this.mStatus.bind(this);
    // this.editsertifikasi = this.editsertifikasi.bind(this)
    // this.deletesertifikasi = this.deletesertifikasi.bind(this)
    this.po_detailstatus = this.po_detailstatus.bind(this)
    this.postatus=this.postatus.bind(this)
    this.createsertifikasi = this.createsertifikasi.bind(this)
    this.Viewsertifikasi = this.Viewsertifikasi.bind(this)
    this.Viewpo = this.Viewpo.bind(this)
  }

  // listModalbri() {
  //   this.setState({
  //     list_sertifikasi: true
  //   });
  // }
  postatus(){
    this.setState({
      viewpo:false
    })
    this.getpo()
  }
  po_detailstatus(){
    this.setState({
      Viewsertifikasi: false,
      // editsertifikasi: false,
      // deletesertifikasi: false,
      // createsertifikasi: false
    })
    this.getpo_detail()
  }
  createsertifikasi(){
    this.setState({
      createsertifikasi:true
    })
  }
  mStatus() {
    this.setState({
      list_po_detail: false,
      list_po: false
    });
  }
  // editsertifikasi(id){
  //   let tmp = {}
  //   this.state.po_detail.map((ele) =>{
  //     if(id == ele.id){
  //      tmp = ele
  //     }
  //   })
  //     this.setState({
  //       current_sertifikasi : tmp,
  //       editsertifikasi : true
  //   })
  // }
  Viewsertifikasi(id) {
    let tmp = {};

    this.state.po_detail.map(ele => {
      if (id == ele.id) {
        tmp = ele;
      }
    });

    this.setState({
      current_sertifikasi: tmp,
      viewsertifikasi: true
    });
  }
  Viewpo(kt_trans) {
    let tmp = {};

    this.state.po.map(ele => {
      if (kt_trans == ele.kt_trans) {
        tmp = ele;
      }
    });

    this.setState({
      current_po: tmp,
      viewpo: true
    });
  }

  getbarang(){
    let token = localStorage.getItem(apiconfig.ls.token);
    let option = {
       url:apiconfig.BASE_URL+apiconfig.ENDPOINTS.barang,
      method: "get",
      headers : {
        Authorization : token
      }
    };
    axios(option)
    .then(response => {
      this.setState({
      //  list_po_detail:tmp,
        barang: response.data.message
    });
  })
    .catch(error =>{
     alert(error)
    })
  }

  getpo_detail(){
    let token = localStorage.getItem(apiconfig.ls.token);
    let option = {
       url:apiconfig.BASE_URL+apiconfig.ENDPOINTS.po_detail,
      method: "get",
      headers : {
        Authorization : token
      }
    };
    axios(option)
    .then(response => {
      console.log(response)
      this.setState({
      //  list_po_detail:tmp,
        po_detail: response.data.message
    });
  })
    .catch(error =>{
     alert(error)
    })
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
      this.setState({
       //list_po:tmp,
        po: response.data.message
    });
  })
    .catch(error =>{
     alert(error)
    })
  }

  // deletesertifikasi(id) {
  //   this.state.po_detail.map((ele)=>{
  //       if(id == ele.id){
  //          this.setState({
  //            current_sertifikasi : ele,
  //            deletesertifikasi : true
  //          })
  //       }
  //   })
  // }
  
  componentDidMount() {
    this.getpo_detail();
  }
  
  render() {
    
    return (
      <Modal isOpen={this.props.list} className="modal-dialog modal-xl" 
      style={{display:
        this.state.createsertifikasi == true ||
        this.state.editsertifikasi == true || this.state.detailpelamar == true
          ? "none"
          : "block"}}>
      <div class="modal-header" style = {{backgroundColor:'#00008B'}}>
          <h4 class="modal-tittle w-100 text-center" style={{ color: "#fff" }}>
            Pemasukan Data Pembuatan PO
          </h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={this.props.mStatus}
          >
            <span aria-hidden="true" style={{ color: "#fff" }}>
              X
            </span>
          </button>
        </div>
    
          <div class="container" >
  <div class="row justify-content-md-center">
    <div class="col-md-auto">
    <label> KODE TRANSAKSI</label>
      <input type="text" 
      class="form-control"
      nama="kd_trans"
      // value={this.props.list_po_detail.kt_brg}
      value={this.state.po_detail[0]?this.state.po_detail[0].kd_trans:'"'}
       required

      />
    </div>
    <div class="col-md-auto">
     <label>TNGL TRANS</label>
      <input 
      type="text"
      class="form-control"
      nama="tgl_trans"
      //value={this.props.list_po_detail.tgl_trans}
      value={this.state.po_detail[0]?this.state.po_detail[0].tgl_trans:'"'}
      required
      />
    </div>
    </div>
    <div class="row justify-content-md-center">
    <div class="col-md-auto">
      <label>TOTAL ITEM BARANG</label>
      <input 
      type="text" 
      class="form-control"
      nama="total_item"
      value={this.state.po_detail[0]?this.state.po_detail[0].total_item:'"'}
     
      required
      />
    </div>
    <div class="col-md-auto">
    <label>TOTAL HARGA</label>
      <input 
      type="text"
      class="form-control"
      nama="total_harga"
      value={this.state.po_detail[0]?this.state.po_detail[0].total_harga:'"'}
      //value={this.props.list_po_detail.total_harga}
      required
      />
    </div>
    </div>
    <div class="row justify-content-md-center">
    <div class="col-md-auto">
      <label>DISCOUNT</label>
      <input 
      type="text" 
      class="form-control"
      nama="discount"
      value={this.state.po_detail[0]?this.state.po_detail[0].discount:'"'}
      //value={this.props.list_po_detail.discount}
      required
      />
    </div>
    <div class="col-md-auto">
     <label>KODE SUPLIER</label>
      <input 
      type="text"
      class="form-control"
      nama="userid"
      //value={this.state.po.map((value) => value === this.state.po.userid)}
      value={this.state.po_detail[0]?this.state.po_detail[0].userid:'"'}
      required
      />
    </div>
    </div>
	</div>
  
  <MDBTable bordered>
          <MDBTableHead cstyle={{ borderTop: "3px solid #000066" }}>
              <tr style={{ borderBottom: "3px solid #000066" }}>
                  <th>No</th>
                      <th>Kode</th>
                       <th>Nama Barang</th>
                       <th>QTY</th>
                       <th>Harga</th>
                       <th>Disc</th>
                       <th>Update Data</th>
                     </tr>
                     </MDBTableHead>
            <MDBTableBody>
              {this.state.po_detail.map((data, i)  => {
                return (
                  <tr key={i} style={{ borderTop: "2px solid #000066" }}>
                    <td>{data.no}</td>
                    <td>{data.kd_brg}</td>
                    <td>{data.nama_brg}</td>
                    <td>{data.qty}</td>
                    <td>{data.harga}</td>
                    <td>{data.disc}</td>
                    <td>
                      <div class="btn btn-group col-lg-8 ">
                      <button class= 'btn-group btn-dark col-md-6'
                            onClick={() => {this.createsertifikasi(data.id);}}
                            >Add
                          </button>
                          <button class= 'btn-group btn-dark col-md-6'
                            onClick={() => {this.editsertifikasi(data.id);}}
                            >Edit
                          </button>
                          <button class='btn-group btn-dark col-md-6'
                            onClick={() => {this.deletesertifikasi(data.id);}}>
                            Delete
                          </button>
                        </div>
                    </td>
                  </tr>
                );
              })}
              
              
            </MDBTableBody>
          </MDBTable>
          {/* <nav class='navbar navbar-expand-lg'>
            <nav class='button button-group'>
            <div class="float-left">
              <button  class="button button-col-md-8 btn-dark ">Submit</button>
              <button class="button button-col-md-8 btn-dark">Cancel</button>
            </div>
            <div class="float-right">
              <button class="button button-col-md-8 btn-dark">Cetak PO</button>
              </div>
              </nav>
          </nav> */}
          <nav class='navbar navbar-expand-lg'>
          <div class='navbar button-group'>
            <div class="float-left">
              <button  class="button button-col-md-8 btn-dark">Submit</button>
              <button class="button button-col-md-8 btn-dark">Cancel</button>
            </div>
            </div>
            <div class="float-right">
              <button class="button button-col-md-8 btn-dark">Cetak PO</button>
            </div>
          </nav>
          {/* <Editsertifikasi
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
