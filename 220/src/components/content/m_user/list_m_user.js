import React from "react";
import apiconfig from '../../../config/api.config.json'
import axios from "axios";
import { Link } from "react-router-dom";
import ViewMuser from "./viewm_user"
import CreateMuser from "./createm_user"
import EditMuser from "./editm_user"
import DeleteMuser from "./deletem_user"
import { MDBDataTable } from "mdbreact";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";

class View {}

class m_user extends React.Component {
  constructor(props){
              super(props);
              this.state={
                m_user: [],
              listm_user: [],
              currentm_user: {}
            };
            this.viewidHandler = this.viewidHandler.bind(this)
            this.editidHandler = this.editidHandler.bind(this)
            this.deleteidaHandler = this.deleteidHandler.bind(this)
            this.idstatus = this.idstatus.bind(this)
            this.createid = this.createid.bind(this)
            //this.modalStatus = this.modalStatus.bind(this);
          }
          createid(){
            this.setState({
              createid:true
            })
          }

          idstatus(){
            this.setState({
              Viewid: false,
              editid: false,
              deleteid: false,
              createid: false
            })
            this.getlistm_user()
          }

          editidHandler(id){
            this.state.m_user.map((ele) =>{
              if(id == ele.id){
                this.setState({
                  currentm_user: ele,
                  editid: true
                })
              }
            })
          }

            getlistm_user(){
              let token = localStorage.getItem(apiconfig.ls.token);
              let option = {
                 url:apiconfig.BASE_URL+apiconfig.ENDPOINTS.m_user,
                method: "get",
                headers : {
                  Authorization : token
                }
              };
              axios(option)
              .then(response => {
               let tmp =[]
               response.data.message.map((row,x) => {
                 let c = <Link to="#">
                 <span onClick= {() => {this.viewidHandler(row.id)}} className = "fa fa-search"
                 style= {{frontSize: "18px", paddingRight: "30px"}}/>
                 <span onClick= {() => {this.editidHandler(row.id)}} className = "fa fa-edit"
                 style= {{frontSize: "18px", paddingRight: "30px"}}/>
                 <span onClick= {() => {this.deleteidHandler(row.id)}} className = "fa fa-trash"
                 style= {{frontSize: "18px"}}/>
                 </Link>
                 tmp.push({"No":x+1, "id": row.id,"username":row.username, "m_password": row.m_password,c})
                })
                this.setState({
                  listm_user:tmp,
                  m_user: response.data.message
              });
            })
              .catch(error =>{
                alert(error)
              })
            }
            viewidHandler(id) {
              // alert(kode_mahasiswa)
              let tmp = {}
              this.state.m_user.map((ele)=>{
                  if(id == ele.id){
                      tmp=ele
                  }
              })
              this.setState({
                  currentm_user : tmp,
                  Viewid: true
              })
              // alert(JSON.stringify(tmp))
              // alert(JSON.stringify(this.state.currentmahasiswa))
          }

        
         deleteidHandler(id) {
            this.state.m_user.map((ele)=>{
                if(id == ele.id){
                   this.setState({
                     currentm_user : ele,
                     deleteid : true
                   })
                }
            })
          }
        
          componentDidMount() {
            this.getlistm_user();
          }
  render() {
    const data = {
      columns: [
        {
          label: "No",
          field: "No",
          sort: "asc",
          width: 150
        },
        {
          label: "id",
          field: "id",
          sort: "asc",
          width: 150
        },
        {
          label: "username",
          field: "username",
          sort: "asc",
          width: 270
        },
        {
          label: "m_password",
          field: "m_password",
          sort: "asc",
          width: 200
        },
        {
          label: "Action",
          field: "c",
          sort: "asc",
          width: 150}
        // {
        //   label: 'Salary',
        //   field: 'salary',
        //   sort: 'asc',
        //   width: 100
        // }
      ],
      rows: this.state.listm_user //DATA
    };
    return(
      <Modal isOpen={this.props.list} className="modal-dialog modal-xl">
        <div class="modal-header">
          <h4 class="modal-title">Data User</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria="true" onClick={this.props.mStatus}>
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
                      onClick={this.createid}
                    >
                      <i class="fas fa-plus"></i> Add Data
                    </button>
                    </li>
                </ul>
              </div>
              
        <CreateMuser
        create = {this.state.createid}
        idstatus = {this.idstatus}
        listm_user = {this.state.currentm_user}/>
            <ViewMuser
            listm_user = {this.state.currentm_user}
            view = {this.state.Viewid}
            idstatus = {this.idstatus}/>

            <EditMuser
            edit = {this.state.editid}
            idstatus = {this.idstatus}
            listm_user = {this.state.currentm_user}/>
       
            <DeleteMuser
            delete = {this.state.deleteid}
            idstatus = {this.idstatus}
            listm_user = {this.state.currentm_user}/>
        
        
        <MDBDataTable striped bordered hover data={data} />
        </div>
            </div>
          
         </ModalBody>
         </Modal>
         )
  }
}

export default m_user;