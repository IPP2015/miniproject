import React from "react";
import apiconfig from '../../../config/api.config.json'
import axios from "axios";
import { Link } from "react-router-dom";
import Editsertifikasi from "./edit_sertifikasi"
import Createsertifikasi from "./create_sertifikasi"
//import detailpelamar from "../../detailpelamar"
import Deletesertifikasi from "./delete_sertifikasi"
import { MDBDataTable,MDBTable, MDBTableBody,MDBTableHead } from "mdbreact";
import { Modal, ModalBody } from "reactstrap"; 
import { withRouter } from "react-router-dom";

class Datatablesertifikasi extends React.Component {
  constructor(props){
              super(props);
              this.state={
                x_sertifikasi: [],
              list_sertifikasi: [],
              current_sertifikasi: {}

            };
            this.editsertifikasi = this.editsertifikasi.bind(this)
            this.deletesertifikasi = this.deletesertifikasi.bind(this)
            this.sertifikasistatus = this.sertifikasistatus.bind(this)
            this.createsertifikasi = this.createsertifikasi.bind(this)
            this.Viewsertifikasi = this.Viewsertifikasi.bind(this)
            // this.detailpelamar = this.detailpelamar.bind(this)
          }
      
          createsertifikasi(){
            this.setState({
              createsertifikasi:true
            })
          }
  
          // detailpelamar(){
          //   this.setstate({
          //     detailpelamar: false
          //   })
          // }
          sertifikasistatus(){
            this.setState({
              Viewsertifikasi: false,
              editsertifikasi: false,
              deletesertifikasi: false,
              createsertifikasi: false
            })
            this.getx_sertifikasi()
          }

          editsertifikasi(id){
            let tmp = {}
            this.state.x_sertifikasi.map((ele) =>{
              if(id == ele.id){
               tmp = ele
              }
            })
              this.setState({
                current_sertifikasi : tmp,
                editsertifikasi : true
            })
          }
          Viewsertifikasi(id) {
            let tmp = {};
        
            this.state.x_sertifikasi.map(ele => {
              if (id == ele.id) {
                tmp = ele;
              }
            });
        
            this.setState({
              current_sertifikasi: tmp,
              viewsertifikasi: true
            });
          }
            getx_sertifikasi(){
              let token = localStorage.getItem(apiconfig.ls.token);
              let option = {
                 url:apiconfig.BASE_URL+apiconfig.ENDPOINTS.x_sertifikasi,
                method: "get",
                headers : {
                  Authorization : token
                }
              };
              axios(option)
              .then(response => {
            // let tmp =[]
            //          response.data.message.map((row,x) => {
            //           let customButton = <div class="dropdown">
            //           <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style = {{backgroundColor:'#00008B'}}>
            //             More
            //           </button>
            //           <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            //           <Link to ="#">
            //             <button class="dropdown-item" type="button"><span onClick = {() => {this.editsertifikasi(row.id)}} class=""
            //           style={{fontSize : '10px', paddingRight: '8px'}}>Edit</span></button>
            //             <button class="dropdown-item" type="button"><span onClick = {() => {this.deletesertifikasi(row.id)}} class=""
            //           style={{fontSize : '10px'}}>Delete</span></button>
            //             </Link>
            //           </div>
            //         </div>
            //      tmp.push({"No":x+1, "certificate_name": row.certificate_name,"publihser":row.publisher,
            //      "until_year": row.until_year,"until_month": row.until_month,customButton})
            //     })
                //alert(JSON.stringify(tmp))
                this.setState({
                  // list_sertifikasi:tmp,
                  x_sertifikasi: response.data.message
              });
            })
              .catch(error =>{
               alert(error)
              })
            }
      
          deletesertifikasi(id) {
            this.state.x_sertifikasi.map((ele)=>{
                if(id == ele.id){
                   this.setState({
                     current_sertifikasi : ele,
                     deletesertifikasi : true
                   })
                }
            })
          }
        
          componentDidMount() {
            this.getx_sertifikasi();
          }
  render() {
    // const data = {
    //   columns: [
    //   ],
    //   rows: this.state.X_sertifikasi //DATA
    // };
    return(
      <Modal isOpen={this.props.list} className="modal-dialog modal-xl" 
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
      <div class="row">
        <div class="col-sm-4">
        <div id="list-example" class="list-group">
        <a class="list-group-item list-group-item-action" href="#list-item-1">Profil</a>
        <a class="list-group-item list-group-item-action" href="#list-item-2">Biodata</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">Pengalaman Kerja</a>
        <a class="list-group-item list-group-item-action" href="#list-item-4">Pendidikan</a>
        <a class="list-group-item list-group-item-action" href="#list-item-1">Pelatihan</a>
        <a class="list-group-item list-group-item-action" href="#list-item-2">Sertifikasi</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">Sumber Lowongan Kerja</a>
        <a class="list-group-item list-group-item-action" href="#list-item-4">Organisasi</a>
        <a class="list-group-item list-group-item-action" href="#list-item-1">Keluarga</a>
        <a class="list-group-item list-group-item-action" href="#keahlian">Keahlian</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">Lain-lain</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">Dokumen</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">Catatan</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">Aktivasi Akun</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">Lihat Test</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">Hasil Test</a>
        </div>
        </div>
        <div class="col-sm-8">
          <div class ="container mt-4 mr-auto">
          <h3>sertifikasi
          <button
          type="button"
          class="btn"
          onClick={this.createsertifikasi}>
          <i class="fas fa-plus-circle"></i>
          </button>
          </h3>
      </div>
        {/* <MDBDataTable striped responsive hover data={data} /> */}
        <MDBTable striped>
          <MDBTableHead cstyle={{ borderTop: "3px solid #000066" }}>
              <tr style={{ borderBottom: "3px solid #000066" }}>
                  <th>Nama Certifikasi</th>
                      <th>Penerbit</th>
                       <th>Masa Berlaku Sertifikasi</th>
                       <th>#</th>
                     </tr>
                     </MDBTableHead>
            <MDBTableBody>
              {this.state.x_sertifikasi.map((data, i) => {
                return (
                  <tr key={i} style={{ borderTop: "2px solid #000066" }}>
                    <td>{data.certificate_name}</td>
                    <td>{data.publisher}</td>
                    <td>
                      {data.valid_start_month}/{data.valid_start_year} s.d {data.until_month}/{data.until_year}
                    </td>
                    <td>
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-default"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          style={{
                            backgroundColor: "#000066",
                            color: "#fff"
                          }}
                        >
                          {" "}
                          <span>More</span>{" "}
                          <li className="fas fa-caret-down"></li>
                        </button>

                        <span class="sr-only">Toggle Dropdown</span>
                        <div
                          class="dropdown-menu"
                          role="menu"
                          x-placement="bottom-start"
                        >
                          <button
                            class="dropdown-item"
                            onClick={() => {
                              this.editsertifikasi(data.id);
                            }}
                          >
                            Ubah
                          </button>
                          <div class="dropdown-divider"></div>
                          <button
                            class="dropdown-item"
                            type="button"
                            onClick={() => {
                              this.deletesertifikasi(data.id);
                            }}
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </MDBTableBody>
          </MDBTable>
          
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
          />
            {/* <MDBDataTable striped bordered hover data = {data}/> */} 
        </div>
      </div>
      </Modal>
      
    );
  }

}
{/* <div>
        <ul className="nav nav-pills ml-auto">
          <li class="nav-item">
            <button
              data-dismiss="modal"
              type="button"
              class="btn default float-left"
              style={{
                backgroundColor: "none",
                fontWeight: "bold",
                fontSize: "18px",
                color: "#000066"
              }}
              onClick={this.createsertifikasi}
            >
              sertifikasi
              <i
                class="fas fa-plus-circle"
                style={{ color: "#000", marginLeft: "5px" }}
                data-dismiss="modal"
              ></i>
            </button>
          </li>
        </ul>
        <div className="table" style={{ color: "#000066" }}>
          {/* <MDBDataTable striped responsive hover data={data} /> */}
//           <MDBTable striped>
//           <MDBTableHead cstyle={{ borderTop: "3px solid #000066" }}>
//               <tr style={{ borderBottom: "3px solid #000066" }}>
//                   <th>Nama Certifikasi</th>
//                       <th>Penerbit</th>
//                        <th>Masa Berlaku Sertifikasi</th>
//                        <th>#</th>
//                      </tr>
//                      </MDBTableHead>
//             <MDBTableBody>
//               {this.state.x_sertifikasi.map((data, i) => {
//                 return (
//                   <tr key={i} style={{ borderTop: "2px solid #000066" }}>
//                     <td>{data.name}</td>
//                     <td>{data.position}</td>
//                     <td>
//                       {data.entry_year} s.d {data.exit_year}
//                     </td>
//                     <td>
//                       <div class="btn-group">
//                         <button
//                           type="button"
//                           class="btn btn-default"
//                           data-toggle="dropdown"
//                           aria-expanded="false"
//                           style={{
//                             backgroundColor: "#000066",
//                             color: "#fff"
//                           }}
//                         >
//                           {" "}
//                           <span>More</span>{" "}
//                           <li className="fas fa-caret-down"></li>
//                         </button>

//                         <span class="sr-only">Toggle Dropdown</span>
//                         <div
//                           class="dropdown-menu"
//                           role="menu"
//                           x-placement="bottom-start"
//                         >
//                           <button
//                             class="dropdown-item"
//                             onClick={() => {
//                               this.editsertifikasi(data.id);
//                             }}
//                           >
//                             Ubah
//                           </button>
//                           <div class="dropdown-divider"></div>
//                           <button
//                             class="dropdown-item"
//                             type="button"
//                             onClick={() => {
//                               this.deletesertifikasi(data.id);
//                             }}
//                           >
//                             Hapus
//                           </button>
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </MDBTableBody>
//           </MDBTable>
//         </div>
//         <Editsertifikasi
//             edit={this.state.editsertifikasi}
//             sertifikasistatus={this.sertifikasistatus}
//             list_sertifikasi={this.state.current_sertifikasi}
//           />
//           <Deletesertifikasi
//             delete={this.state.deletesertifikasi}
//             sertifikasistatus={this.sertifikasistatus}
//             list_sertifikasi = {this.state.current_sertifikasi}/>
          
//           <Createsertifikasi
//             create={this.state.createsertifikasi}
//             sertifikasistatus={this.sertifikasistatus}
//           />
//       </div>
//     );
//   }
// }  */}
export default Datatablesertifikasi;