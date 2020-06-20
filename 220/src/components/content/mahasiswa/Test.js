import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import axios from "axios";
import apiconfig from "../../../config/api.config.json";
import Select from "react-select";
//import Provinsi from "../mahasiswa/alamat/Provinsi";


class Test extends React.Component {
  constructor(props) {
    super(props);
    //let userdata = JSON.parse(localStorage.getItem(apiconfig.ls.USERDATA));

    this.state = {
      formdata: {
        kode_mahasiswa: "",
        nama_mahasiswa: "",
        kode_kota: "",
        kode_agama: "",
        kode_jurusan: "",
        is_deleted: "false",
        
        //update_by: userdata.username
      },
      provinsi: [],
      kota: [],
      listKota: [],
      listProvinsi: [],
      selectedOption: {},
      selectedOption2: {}
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
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
  changeHandler(e) {
    let tmp = this.state.formdata;
    tmp[e.target.name] = e.target.value;
    this.setState({
      formdata: tmp
    });
  }

  submitHandler() {
    let token = localStorage.getItem(apiconfig.ls.token);
    let option = {
      url: apiconfig.BASE_URL + apiconfig.ENDPOINTS.mahasiswa,
      method: "post",
      headers: {
        Authorization: token,
        "Content-Type": "application/json"
      },
      data: this.state.formdata
    };
    axios(option)
      .then(response => {
        if (response.data.code == 200) {
          alert("Sukses");
          this.props.kodemahasiswastatus()
          // this.history.push("/mahasiswa");
        } 
        
      })
      .catch(error => {
        alert(error);
      });
  }
  componentDidMount() {
    this.getProvinsi();
    this.getKota();
  }
  render() {
    const options1 = this.state.listProvinsi;

    const options2 = this.state.listKota;
    
    const filteredOptions = options2.filter(
      o => o.link === this.state.selectedOption.value
    );
    return (
      <Modal isOpen={this.props.test} className={this.props.className}>
        <ModalHeader>Edit Data</ModalHeader>
        <ModalBody>
          <form role="form">
            <div class="form-group">
              <label for="exampleInputEmail1">Kode Mahasiswa</label>
              <input
                type="text"
                class="form-control"
                name="kode_mahasiswa"
                value={this.state.formdata.kode_mahasiswa}
                onChange={this.changeHandler}
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
              />
            </div>
            <div>
        <p>Select one first</p>
        <Select
          name="form-field-name"
          value={this.state.selectedOption.kode_provinsi}
          onChange={this.handleChange1}
          options={options1}
        />
        <p>Then the other</p>
        <Select
          name="form-field-name"
          value={this.state.selectedOption2.kode_kota}
          onChange={this.handleChange2}
          options={filteredOptions}
        />
      </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Alamat</label>
              <input
                type="text"
                class="form-control"
                name="alamat"
                value={this.state.formdata.alamat}
                onChange={this.changeHandler}
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
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={this.props.kodemahasiswastatus}>
            Cancel
          </Button>
          <Button color="primary" onClick={this.submitHandler}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default Test;
