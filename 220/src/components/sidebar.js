import React from "react";
import Detailpelamar from "./detailpelamar"
//import Test from "./test"
import { MDBDataTable } from "mdbreact";
import Bri from "./content/t_bri/bri";
import Bri1 from "./content/t_bri/bri1";
import { NavLink, BrowserRouter } from "react-router-dom";
import apiconfig from '../config/api.config.json'
import axios from "axios";
class sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     detailpelamar: false,
     po:[],
     bri:false,
     bri1:false
    };

    this.listModalHandler = this.listModalHandler.bind(this);
    this.listModalbri = this.listModalbri.bind(this);
    this.listModalbri1 = this.listModalbri1.bind(this);
  // this.listModal = this.listModal.bind(this);
    this.mStatus = this.mStatus.bind(this);
  }
  listModalbri(){
    this.setState({
      bri: true
    })
  }
  listModalbri1(){
    this.setState({
      bri1: true
    })
  }

  listModalHandler() {
    this.setState({
       detailpelamar: true
    });
  }

  mStatus() {
    this.setState({
      detailpelamar: false,
      bri: false,
      bri1: false
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
    this.mStatus();
  }
  render() {
    return (
      <nav class="container-fluid mt-5 ml-">
       <div class="row"> 
          <div class="col-md-2">
          <div class="dropdown">
          <a class="nav-icon fas fa-circle list-group-item list-group-item-action " onClick={this.listModalbri} href="#">Menu 1</a>
          <a class="nav-icon fas fa-circle list-group-item list-group-item-action " onClick={this.listModalbri1} href="#list-item-1">Menu 2</a>
      <button class="nav-icon fas fa-circle list-group-item list-group-item-action dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu 3
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item"  href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
      <a class="nav-icon fas fa-circle list-group-item list-group-item-action" onClick={this.listModalHandler} href="#">Menu 4</a>
       <button class="nav-icon fas fa-circle list-group-item list-group-item-action dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu 5
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
     </div>
          </div>
          <div class="col-md-8" style={{backgroundColor: "white" , height: '500px'}}>
          
            <div style={{fontSize: "30px",borderBottom: "3px solid #000066"}}>Jadwalkan Ulang <div class="glyphicon glyphicon-sort"></div>
            </div>
            
            <div class="container-fluid mt-2 ">
            <div class="input-group md-form form-sm form-2 pl-0">
            <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search"/>
            <div class="input-group-append">
            <span class="input-group-text red lighten-3" style={{backgroundColor:"#000066"}} id="basic-text1"><i class="fa fa-button text-white" 
               aria-hidden="true">cari</i></span>  
        <span class="input-group-text red lighten-4" id="basic-text2" style={{backgroundColor:"#000066"}}><i class="fa fa-button text-white"
        aria-hidden="true">reset</i></span>
         <div class="container-fluid ml-1 ">
           
        </div>
        
  </div>
  
</div>
</div>
          </div>
       </div> 
       <Detailpelamar
       list={this.state.detailpelamar} 
       mStatus={this.mStatus} />
       <Bri
       list={this.state.bri}
       mStatus={this.mStatus}
       edit={this.state.bri} 
       delete={this.state.bri}
       view={this.state.bri}
       create={this.state.bri}
        />
        <Bri1
       list={this.state.bri1}
       mStatus={this.mStatus}
        />
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
       
       <center>
      <footer >
    <h1 style={{color: "primary", fontSize: "20px" }}>2020 - Xsis Mitra Utama</h1>
</footer>
</center>
      </nav>
    );
  }
}
export default sidebar;
