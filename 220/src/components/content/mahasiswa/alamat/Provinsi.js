import React from "react";
import apiConfig from "../../../../config/api.config.json";
import axios from "axios";
import Select from "react-select";

import Kota from "./Kota";

class Provinsi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //showCreateMahasiswa: false,
      provinsi: [],
      kota: [],
      listKota: [],
      listProvinsi: [],
      selectedOption: {},
      selectedOption2: {}
    };
  }

  handleChange1 = selectedOption => {
    this.setState({ selectedOption });
  };

  handleChange2 = selectedOption => {
    this.setState({ selectedOption2: selectedOption });
  };

  getProvinsi() {
    let token = localStorage.getItem(apiConfig.ls.token);
    let option = {
      url: apiConfig.BASE_URL + apiConfig.ENDPOINTS.provinsi,
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
    let token = localStorage.getItem(apiConfig.ls.token);
    let option = {
      url: apiConfig.BASE_URL + apiConfig.ENDPOINTS.kota,
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

  render() {
    const options1 = this.state.listProvinsi;

    const options2 = this.state.listKota;
    
    const filteredOptions = options2.filter(
      o => o.link === this.state.selectedOption.value
    );

    return (
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
    );
  }
}

export default Provinsi;