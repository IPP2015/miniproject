import React from "react"
import axios from "axios"
import {Modal,ModalHeader,ModalBody,ModalFooter, Button} from "reactstrap"
import apiconfig from "../../../config/api.config.json"
import Select from 'react-select'

class createmahasiswa extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            formdata: {
                kode_mahasiswa: "",
                nama_mahasiswa: "",
                
                // name: 'React',
                // selectedOption: {},
                // selectedOption2: {},
                kode_kota: "",
                kode_agama: "",
                kode_jurusan: "",
                kode_provinsi: "",
                jenis_kelamin: "",
                namerror: "",
                hobi: ""
                
                
             },
             provinsi: [],
             kota: [],
             listKota: [],
             listProvinsi: [],
             selectedOption: {},
             selectedOption2: {},
             productsList: []
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }
    componentWillReceiveProps(newProps) {
      this.setState({
          productsList : newProps.productsList
      })

  }
  onAddingItem = (i) => (event) => {
    this.setState((state, props) => {
      state.productsList[i].isChecked = !state.productsList[i].isChecked;
      return {
        productsList: state.productsList
      }
    })
  }

    handleOnChange(values) {
        this.setState({ values });
    }

    changeHandler(e){
        let tmp = this.state.formdata
        tmp[e.target.name]=e.target.value
        this.setState({
            formdata : tmp
        })
}
    handleChange1 = selectedOption => {
        this.setState({ selectedOption });
      };
    
      handleChange2 = selectedOption => {
        this.setState({ selectedOption2: selectedOption });
      };
    
      getProvinsi() {
        let token = localStorage.getItem(apiconfig.ls.token);
        let option = {
          url: apiconfig.BASE_URL + apiconfig.ENDPOINTS.provinsi,
          method: "get",
          headers: {
            Authorization: token
          }
        };
    
        axios(option)
          .then(response => {
            let tmp = [];
    
            response.data.message.map(row => {
              tmp.push({
                value: row.kode_provinsi,
                label: row.nama_provinsi
              });
            });
            this.setState({
              listProvinsi: tmp,
              provinsi: response.data.message
            });
          })
          .catch(error => {
            alert(error);
          });
      }
    
      getKota() {
        let token = localStorage.getItem(apiconfig.ls.token);
        let option = {
          url: apiconfig.BASE_URL + apiconfig.ENDPOINTS.kota,
          method: "get",
          headers: {
            Authorization: token
          }
        };
        axios(option)
          .then(response => {
            let tmp = [];
    
            response.data.message.map(row => {
              tmp.push({
                value: row.kode_kota,
                label: row.nama_kota,
                link: row.kode_provinsi
              });
            });
            this.setState({
              listKota: tmp,
              kota: response.data.message
            });
            //alert(this.state.kota);
          })
          .catch(error => {
            alert(error);
          });
      }
    
      componentDidMount() {
        this.getProvinsi();
        this.getKota();
      }
      changeHandler= event => {
        
        let tmp = this.state.formdata
        tmp[event.target.name] = event.target.value
        tmp["kode_kota"] = this.state.selectedOption2.value
       tmp["kode_provinsi"] = this.state.selectedOption.value
        this.setState({
            formdata: tmp
            
        })

    }

    validate() {

        let namerror = ""

        if (!this.state.formdata.kode_mahasiswa || !this.state.formdata.nama_mahasiswa || 
           !this.state.formdata.kode_agama || !this.state.formdata.kode_jurusan || 
           !this.state.formdata.jenis_kelamin   ) {
            namerror = "Anda Harus Mengisi Semua Field"
        }

        if (namerror) {
            this.state.formdata.nameError = namerror
           // alert(namerror)
            return false
        }

        return true
    }


    submitHandler= event => {
        event.preventDefault();
        event.target.className += " was-validated";
        const isValid = this.validate()


        if (isValid == false) {
       //   alert(this.state.formdata.nameError)
        }else {
          let kota = this.state.selectedOption2.value
          let tmp = this.state.formdata
          tmp.kode_kota = kota
          this.setState({
              formdata : tmp
        })
        let token = localStorage.getItem(apiconfig.ls.token)
        let selectedProductsArray = this.state.productsList.filter((product, i)=>{
            return product.isChecked});
        let stringHobi = ''
        

        selectedProductsArray.map((row) => {
            if (stringHobi !== '') {
                stringHobi = stringHobi +', ' + row.name
            } else {
                stringHobi = row.name
            }
        })

        tmp['hobi'] = stringHobi
        
        this.setState({
            formdata : tmp
        })
 

        
        let option = {
            url: apiconfig.BASE_URL + apiconfig.ENDPOINTS.mahasiswa,
            method: "post",
            headers:{
                "Authorization": token,
                "Content-Type":"application/json"
            },
            data: this.state.formdata
        }
        axios (option)
        .then((response) => {
            if(response.data.code === 200){
                alert ("Sukses")
                this.props.kodemahasiswastatus()
                // window.location.reload()
            }
          
        })
        .catch((error)=> {
            console.log(error)
            
        })
    }
  }
    // changeHandler(e){
    //     let tmp = this.state.formdata
    //     tmp[e.target.name] = e.target.value
    //     tmp["kode_kota"] = this.state.selectedOption2.value
    //     tmp["kode_provinsi"] = this.state.selectedOption.value
    //     this.setState({
    //         formdata: tmp
    //     })
    // }
    // submitHandler(){
    //     let token = localStorage.getItem(apiconfig.ls.token)
    //     let option = {
    //         url: apiconfig.BASE_URL + apiconfig.ENDPOINTS.mahasiswa,
    //         method: "post",
    //         headers:{
    //             "Authorization": token,
    //             "Content-Type": "application/json"
    //         },
    //         data: this.state.formdata
    //     }
    //     axios(option)
    //     .then((response) => {
    //         if(response.data.code === 200){
    //             alert("sukses")
    //             this.props.kodemahasiswastatus()
    //             alert(JSON.stringify(this.state.formdata))
    //         }
    //     })
    //     .catch((error) => {
    //     alert(error)
    //      } )
    // }
    
    render(){
        const options1 = this.state.listProvinsi;
        let {productsList} =  this.state;
    const options2 = this.state.listKota;
    
    const filteredOptions = options2.filter(
      o => o.link === this.state.selectedOption.value
    );
          

        return(
            <Modal isOpen = {this.props.create} className = {this.props.className}>
                <ModalHeader> create form</ModalHeader>
                        <form
                  className="needs-validation"
                  onSubmit={this.submitHandler}
                  noValidate
                >
                <ModalBody>
                {/* <form role="form"> */}
            <div class="form-group">
              <label for="exampleInputEmail1">Kode Mahasiswa</label>
              <input
                type="text"
                class="form-control"
                name="kode_mahasiswa"
                value={this.state.formdata.kode_mahasiswa}
                onChange={this.changeHandler}
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Nama Mahasiswa</label>
              <input
                type="text"
                class="form-control"
                name="nama_mahasiswa"
                value={this.state.formdata.nama_mahasiswa}
                onChange={this.changeHandler}
                required
              />
            </div>
    
            <div>
        <p>Select one first</p>
        <Select
          name="kode_provinsi"
          value={this.state.selectedOption.kode_provinsi}
          onChange={this.handleChange1}
          options={options1}
          required
        />
        <p>Then the other</p>
        <Select
          name="kode_kota"
          value={this.state.selectedOption2.kode_kota}
          onChange={this.handleChange2}
          options={filteredOptions}
          required
        />
      </div>
           
            <div class="form-group">
              <label for="exampleInputEmail1">Kode Agama</label>
              <input
                type="text"
                class="form-control"
                name="kode_agama"
                value={this.state.formdata.kode_agama}
                onChange={this.changeHandler}
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Kode Jurusan</label>
              <input
                type="text"
                class="form-control"
                name="kode_jurusan"
                value={this.state.formdata.kode_jurusan}
                onChange={this.changeHandler}
                required
              />
            </div>
            <div md="4" className="mb-3">
              <div className="custom-control custom-radio">
          <input
            type="radio"
            className="custom-control-input"
            id="jeniskelamin1"
            name="jenis_kelamin"
            required
            value="Laki-laki"
            checked={this.state.formdata.jenis_kelamin === 'Laki-laki'}
            onChange={this.changeHandler}
            required
          />
          <label
            className="custom-control-label"
            htmlFor="jeniskelamin1"
          >
            Laki-laki
          </label>
        </div>
        <div className="custom-control custom-radio mb-3">
          <input
            type="radio"
            className="custom-control-input"
            id="jeniskelamin2"
            name="jenis_kelamin"
            value="perempuan"
            checked={this.state.formdata.jenis_kelamin === 'perempuan'}
            onChange={this.changeHandler}
            required
          />
          <label
            className="custom-control-label"
            htmlFor="jeniskelamin2"
          >
            Perempuan
          </label>
          <div className="invalid-feedback">
            More example invalid feedback text
          </div>
        </div>
        <div class="form-group">
                            <label for="exampleInputEmail1">Hobi</label>
                            
                            <table>
                                <tbody>
                                    { productsList.map((product, i) =>{
                                        return(
                                            <tr key={i+1}>
                                                <td>{i+1}</td>
                                                <td>{product.name}</td>
                                                <td>
                                                    <div class="checkbox checkbox-circle checkbox-color-scheme">
                                                        <label class="checkbox-checked">
                                                            <input 
                                                                type="checkbox" 
                                                                value={product.name} 
                                                                checked={product.isChecked} 
                                                                onChange={this.onAddingItem(i)}/>
                                                        </label>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    
                                </tbody>
                            </table>
                        
                        </div>
          </div>
            {/* <div class="form-group">
              <label for="exampleInputEmail1">Kode provinsi</label>
              <input
                type="text"
                class="form-control"
                name="kode_provinsi"
                value={this.state.formdata.kode_provinsi}
                onChange={this.changeHandler}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">alamat</label>
              <input
                type="text"
                class="form-control"
                name="alamat"
                value={this.state.formdata.alamat}
                onChange={this.changeHandler}
              />
            </div> */}
          
                </ModalBody>
                <ModalFooter>
                    <Button color = "primary" type = {this.submitHandler}  >save </Button>
                    <Button color = "warning" onClick = {this.props.kodemahasiswastatus}> Cancel</Button>
                    {/* <Button color = "primary" onClick = {this.submitHandler} >test </Button> */}
                </ModalFooter>
                </form>
            </Modal>
        )
    }
}
export default createmahasiswa