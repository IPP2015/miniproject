import React from 'react'
import apiconfig from '../../../config/api.config.json'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { MDBDataTable } from 'mdbreact';

class listmahasiswa extends React.Component{
  constructor(props){
              super(props)
              this.state={
              listmahasiswa: []
              
            }
          }

            getlistmahasiswa(){
              let token = localStorage.getItem(apiconfig.ls.token)
              let option = {
                 url:apiconfig.BASE_URL+apiconfig.ENDPOINTS.mahasiswa,
                method: "get",
                headers : {
                  "Authorization" : token
                }
              }
              axios(option)
              .then((response) => {
                this.setState({
                  listmahasiswa: response.data.message
                })
              })
              .catch((error) =>{
                alert(error)
              })
            }

            componentDidMount(){
              this.getlistmahasiswa()
            }

    render(){
        return (
          
           <div>
             <div class = "container">
               <h1> listmahasiswa </h1>
               <buttom type ="button" class ="btn btn-primary float-right"
               onClick = "" >Add</buttom>
                <br></br>
                <table class= "table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>no</th>
                      <th>kode_mahasiwa</th>
                      <th>nama_mahasiswa</th>
                      <th>alamat</th>
                      <th>kode_agama</th>
                      <th>kode_jurusan</th>
                      <th>action</th>

                    </tr>
                  </thead>

                  <tbody>
                    {
                      
                      this.state.listmahasiswa.map((row, x) => 
                      <tr>
                        
                        <td>{x+1}</td>
                        <td>{row.kode_mahasiswa}</td>
                        <td>{row.nama_mahasiswa}</td>
                        <td>{row.alamat}</td>
                        <td>{row.kode_agama}</td>
                        <td>{row.kode_jurusan}</td>
                        <td>
                        <Link to='#'>
                        <span onClick=  "" className = "fa fa-search"
                        style= {{frontSize: "18px", paddingRight: "30px"}}/>
                        <span onClick= "" className = "fa fa-edit"
                        style= {{frontSize: "18px", paddingRight: "30px"}}/>
                        <span onClick= "" className = "fa fa-trash"
                        style= {{frontSize: "18px"}}/>
                        </Link>
                      </td>
                      </tr>)
                    }
                    </tbody>
                </table>
             </div>
           </div>
            
            
        )
       
    }
}
export default listmahasiswa