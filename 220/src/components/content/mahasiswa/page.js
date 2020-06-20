import React from "react";
import apiconfig from '../../../config/api.config.json'
import axios from "axios";
import { Link } from "react-router-dom";
import ViewMahasiswa from "./viewmahasiswa"
import CreateMahasiswa from "./createmahasiswa"
import EditMahasiswa from "./editmahasiswa"
import DeleteMahasiswa from "./deletemahasiswa"
import { MDBDataTable } from "mdbreact";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
// import Test from "./Test";

class View {}

class DatatablePage extends React.Component {
  constructor(props){
              super(props);
              this.state={
                mahasiswa: [],
                kota:[],
              listmahasiswa: [],
              currentmahasiswa: {},
              productsListNew : []

            };
            this.viewkodemahasiswaHandler = this.viewkodemahasiswaHandler.bind(this)
            this.editkodemahasiswaHandler = this.editkodemahasiswaHandler.bind(this)
            this.deletekodemahasiswaHandler = this.deletekodemahasiswaHandler.bind(this)
            this.kodemahasiswastatus = this.kodemahasiswastatus.bind(this)
            this.createmahasiswa = this.createmahasiswa.bind(this)
            this.getListHobi = this.getListHobi.bind(this)
            // this.test = this.test.bind(this);
            
          }

       
          getListHobi () {
            let productsList  = [
                {name: 'Bermain', isChecked: false},
                    {name: 'Makan', isChecked: false},
                    {name: 'Tidur', isChecked: false},
                    {name: 'Mager', isChecked: false},
              ]
    
              return productsList
        }
          createmahasiswa(){
            this.setState({
              createmahasiswa:true
            })
          }
          kodemahasiswastatus(){
            this.setState({
              Viewmahasiswa: false,
              editmahasiswa: false,
              deletemahasiswa: false,
              createmahasiswa: false,
              test: false
            })
            this.getlistmahasiswa()
          }

          editkodemahasiswaHandler(kode_mahasiswa){
            let tmp = {}
            let tmpHobi = this.getListHobi()
            this.state.mahasiswa.map((ele) =>{
              if(kode_mahasiswa == ele.kode_mahasiswa){
               tmp = ele
              }
            })
              let array = tmp.hobi.split(',')
         
              tmpHobi.map((rows) => {
                  
                  array.forEach(ele =>{
                      if (ele.trim() == rows.name){
                          rows.isChecked = !rows.isChecked 
                      }
                  
              })
            
              
              })
              this.setState({
                currentmahasiswa : tmp,
                editmahasiswa : true,
                productsListNew : tmpHobi
            })
          
          }

            getlistmahasiswa(){
              let token = localStorage.getItem(apiconfig.ls.token);
              let option = {
                 url:apiconfig.BASE_URL+apiconfig.ENDPOINTS.mahasiswa,
                method: "get",
                headers : {
                  Authorization : token
                }
              };
              axios(option)
              .then(response => {
            let tmp =[]
               response.data.message.map((row,x) => {
                 let c = 
                <div class="dropdown">
                        <span class="btn btn-secondary dropdown-toggle" className="fas fa-th-large" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />

                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <Link to='#'>
                                    <button class="dropdown-item" type="button"><span onClick={() => { this.viewkodemahasiswaHandler(row.kode_mahasiswa) }} className="fa fa-eye" style={{ fontSize: 'px', paddingRight: '30px' }}>&nbsp;&nbsp;&nbsp;View </span></button>
                                    <button class="dropdown-item" type="button"><span onClick={() => { this.editkodemahasiswaHandler(row.kode_mahasiswa) }} className="fa fa-edit" style={{ fontSize: 'px', paddingRight: '30px' }}>&nbsp;&nbsp;&nbsp;Edit</span></button>
                                    <button class="dropdown-item" type="button"><span onClick={() => { this.deletekodemahasiswaHandler(row.kode_mahasiswa) }} className="fa fa-trash" style={{ fontSize: 'px' }}>&nbsp;&nbsp;&nbsp;&nbsp;Delete</span></button>
                                </Link>
                            </div>
                    </div >
                
                 {/* <span onClick= {() => {this.viewkodemahasiswaHandler(row.kode_mahasiswa)}} className = "fa fa-search"
                 style= {{frontSize: "18px", paddingRight: "30px"}}/>
                 <span onClick= {() => {this.editkodemahasiswaHandler(row.kode_mahasiswa)}} className = "fa fa-edit"
                 style= {{frontSize: "18px", paddingRight: "30px"}}/>
                 <span onClick= {() => {this.deletekodemahasiswaHandler(row.kode_mahasiswa)}} className = "fa fa-trash"
                 style= {{frontSize: "18px"}}/> */}
                //  </Link>
                 tmp.push({"No":x+1, "kode_mahasiswa": row.kode_mahasiswa,"nama_mahasiswa":row.nama_mahasiswa, "kode_kota": row.kode_kota, "kode_agama": row.kode_agama, 
                 "kode_jurusan": row.kode_jurusan,"kode_provinsi": row.kode_provinsi,"jenis_kelamin":row.jenis_kelamin,"hobi":row.hobi,c})
                })
                //alert(JSON.stringify(tmp))
                this.setState({
                  listmahasiswa:tmp,
                  mahasiswa: response.data.message
              });
            })
              .catch(error =>{
                alert(error)
              })
            }
            viewkodemahasiswaHandler(kode_mahasiswa) {
              let tmp = {}
              let tmpHobi = this.getListHobi()
              this.state.mahasiswa.map((ele)=>{
                  if(kode_mahasiswa == ele.kode_mahasiswa){
                      tmp=ele
                  }
              })
              let array = tmp.hobi.split(',')
         
              tmpHobi.map((rows) => {
                  
                  array.forEach(ele =>{
                      if (ele.trim() == rows.name){
                          rows.isChecked = !rows.isChecked
                          
                      }
                  })
              })
              this.setState({
                  currentmahasiswa : tmp,
                  Viewmahasiswa: true,
                  productsListNew : tmpHobi
              })
          }
          // test() {
          //   this.setState({
              
          //     test: true
          //   });
          // }

        
         deletekodemahasiswaHandler(kode_mahasiswa) {
            this.state.mahasiswa.map((ele)=>{
                if(kode_mahasiswa == ele.kode_mahasiswa){
                   this.setState({
                     currentmahasiswa : ele,
                     deletemahasiswa : true
                   })
                }
            })
          }
        
          componentDidMount() {
            this.getlistmahasiswa();
          }
  render() {
    const data = {
      columns: [
        {
          label: "No",
          field: "No",
          sort: "asc",
          width: 50
        },
        {
          label: "Kode Mahasiswa",
          field: "kode_mahasiswa",
          sort: "asc",
          width: 50
        },
        {
          label: "Nama Mahasiswa",
          field: "nama_mahasiswa",
          sort: "asc",
          width: 270
        },
        {
          label: "kode_kota",
          field: "kode_kota",
          sort: "asc",
          width: 50
        },
        {
          label: "Kode Agama",
          field: "kode_agama",
          sort: "asc",
          width: 50
        },
        {
          label: "Kode Jurusan",
          field: "kode_jurusan",
          sort: "asc",
          width: 50
        },
        {
          label: "kode_provinsi",
          field: "kode_provinsi",
          sort: "asc",
          width: 50
        },
        {
          label: "jenis_kelamin",
          field: "jenis_kelamin",
          sort: "asc",
          width: 50
        },
        {
          label : "Hobi",
          field : "hobi",
          sort : "asc",
          width : 150
      },
        {label: "Action",
          field: "c",
          sort: "asc",
          width: 50}
        // {
        //   label: 'Salary',
        //   field: 'salary',
        //   sort: 'asc',
        //   width: 100
        // }
      ],
      rows: this.state.listmahasiswa //DATA
    };
    return(
      <Modal isOpen={this.props.list} className="modal-dialog modal-xl">
      <div class="modal-header">
        <h4 class="modal-title">Data Mahasiswa</h4>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true" onClick={this.props.mStatus}>
            ×
          </span>
        </button>
      </div>
      <ModalBody>
        <div className="card">
          <div className="card-header">
            <div className="card-title"></div>
            <div className="card-tools">
              <ul className="nav nav-pills ml-auto">
                <li class="nav-item">
                  <button
                    type="button"
                    class="btn btn-primary float-right"
                    onClick={this.createmahasiswa}
                  >
                    <i class="fas fa-plus"></i> Add Data
                  </button>
                  {/* <button
                  type="button"
                  class="btn btn-default float-right"
                  onClick={this.test}
                >
                  <i class=""></i> Test
                </button> */}
                </li>
              </ul>
            </div>
            <div className="table-responsive">
              <MDBDataTable striped bordered hover data={data} />
            </div>
          </div>
        </div>
        {/* <button type = "button" class="btn btn-primary float-right"
        onClick={this.createmahasiswa}> add </button> */}
        {/* <button type = "button" class="btn btn-primary float-right"
        onClick={this.test}> test </button> */}
        {/* <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
          <i class="fas fa-th-large"></i>
        </a> */}
        
        <CreateMahasiswa
        create = {this.state.createmahasiswa}
        kodemahasiswastatus = {this.kodemahasiswastatus}
       // listmahasiswa = {this.state.currentmahasiswa}
        productsList = {this.getListHobi()}/>
            <ViewMahasiswa 
            listmahasiswa = {this.state.currentmahasiswa}
            view = {this.state.Viewmahasiswa}
            kodemahasiswastatus = {this.kodemahasiswastatus}
            productsList = {this.state.productsListNew}/>

            <EditMahasiswa
            edit = {this.state.editmahasiswa}
            kodemahasiswastatus = {this.kodemahasiswastatus}
            listmahasiswa = {this.state.currentmahasiswa}
            productsList = {this.state.productsListNew}/>
       
            <DeleteMahasiswa
            delete = {this.state.deletemahasiswa}
            kodemahasiswastatus = {this.kodemahasiswastatus}
            listmahasiswa = {this.state.currentmahasiswa}/>



        {/* <Test 
        test = {this.state.test}
        kodemahasiswastatus = {this.kodemahasiswastatus}/>
         */}
        
         </ModalBody>

         </Modal>
         )
  }
}

export default DatatablePage;