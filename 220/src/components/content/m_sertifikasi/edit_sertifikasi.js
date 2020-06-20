import React from "react"
import axios from "axios"
import {Modal,ModalHeader,ModalBody,ModalFooter, Button} from "reactstrap"
import apiconfig from "../../../config/api.config.json"
import Select from 'react-select'

class Editsertifikasi extends React.Component{
    constructor (props){
        super(props)
        const year = new Date().getFullYear()
        this.years = Array.from(new Array(50), (val, index) => year - index)
       // let userdata = JSON.parse(localStorage.getItem(apiConfig.LS.USERDATA))
        this.state = {
            formdata : {
                id:'',
                create_by:'',
                create_on:'',
                modified_by:'',
                modified_on:'',
                deleted_by:'',
                deleted_on:'',
                is_delete:'',
                biodata_id: '',
                certificate_name:'',
                publisher: "",
                valid_start_year: "",
                valid_start_month: "",
                until_year: "",
                until_month: "",
                notes:''
                //update_by:userdata.username
            },
            selectedOption: {},
             selectedOption2: {},
             selectedOption3: {},
             selectedOption4: {},
             selecteValue: {},
             selecteValue2: {},
             selecteValue3: {},
             selecteValue4: {}

        }
        this.submitHandler = this.submitHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnChange2 = this.handleOnChange2.bind(this)
        this.handleOnChange3 = this.handleOnChange3.bind(this)
        this.handleOnChange4 = this.handleOnChange4.bind(this)
    }
  
    handleOnChange=(selectedOption) => {
      this.setState({ selecteValue: selectedOption.value });
      let tmp = this.state.formdata
      tmp["valid_start_year"] = selectedOption.value
  }
  handleOnChange2=(selectedOption2) => {
    this.setState({ selecteValue2: selectedOption2.value });
    let tmp = this.state.formdata
    tmp["valid_start_month"] = selectedOption2.value
}
handleOnChange3=(selectedOption3) => {
  this.setState({ selecteValue3: selectedOption3.value });
  let tmp = this.state.formdata
  tmp["until_year"] = selectedOption3.value
}
handleOnChange4=(selectedOption4) => {
  this.setState({ selecteValue4: selectedOption4.value });
  let tmp = this.state.formdata
  tmp["until_month"] = selectedOption4.value
}

getlist_sertifikasi() {
  let token = localStorage.getItem(apiconfig.ls.token);
  let option = {
    url: apiconfig.BASE_URL + apiconfig.ENDPOINTS.x_sertifikasi, 
    method: "get",
    headers: {
      "authorization": token
    }
  };
axios(option)
    .then(response => {
      let tmp = [];

      response.data.message.map(row => {
        tmp.push({
          value: row.valid_start_year,
          label: row.valid_start_year,
          value: row.valid_start_month,
          label: row.valid_start_month,
          value: row.until_year,
          label: row.until_year,
          value: row.until_month,
          label: row.valid_month
        });
      });
      this.setState({
        list_sertifikasi: tmp,
        x_sertifikasi: response.data.message
      });
    })
    .catch(error => {
      alert(error);
    });
}

      componentDidMount() {
        this.getlist_sertifikasi()
      }

      validate() {
        let nameError = "";
        if (
          !this.state.formdata.certificate_name ||
          !this.state.formdata.publisher
           ||
          !this.state.formdata.valid_start_year ||
           !this.state.formdata.valid_start_month
        ) {
          nameError = "Anda Harus Mengisi Semua Field";
        }
    
        if (nameError) {
          this.state.formdata.nameError = nameError;
          // alert(nameError)
          return false;
        }
        return true;
      }

      componentWillReceiveProps(newprops) {
        this.setState({
            formdata : newprops.list_sertifikasi,
            selectValue: this.props.list_sertifikasi.valid_start_year,
            selectValue2: this.props.list_sertifikasi.valid_start_month,
            selectValue3: this.props.list_sertifikasi.until_year,
            selectValue4: this.props.list_sertifikasi.until_month
        })
    }

    changeHandler(e) {
      let tmp = this.state.formdata
      tmp[e.target.name] = e.target.value
      this.setState({
          formdata: tmp
          
      })

  }


submitHandler = event => {
  event.preventDefault();
  event.target.className += " was-validated";
  const isValid = this.validate();

  if (isValid == false) {
    alert(this.state.formdata.nameError);
  } else {
    let token = localStorage.getItem(apiconfig.ls.token);

    let option = {
      url: apiconfig.BASE_URL + apiconfig.ENDPOINTS.x_sertifikasi, 
      method: "put",
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
          this.props.sertifikasistatus();
         
        } 
        // else {
        //   alert(response.data.message);
        // }
      })
      .catch(error => {
        console.log(error);
      });
  }
};

render (){
  let tmp_year =[]
  this.years.map(row=> {
    tmp_year.push({
      value: row,
      label: row
    })
  })
    const options1 = tmp_year;
    //let {productsList} =  this.state;

const options3 = tmp_year;
//const options1 = this.state.list_sertifikasi;
//const options2 = this.state.list_sertifikasi;
//const options3 = this.state.list_sertifikasi;
//const options4 = this.state.list_sertifikasi;
const month_options1 = [
  { value: "1", label: "January" },
  { value: "2", label: "Febuary" },
  { value: "3", label: "Maret" },
  { value: "4", label: "April" },
  { value: "5", label: "Mei" },
  { value: "6", label: "Juni" },
  { value: "7", label: "Juli" },
  { value: "8", label: "Agustus" },
  { value: "9", label: "September" },
  { value: "10", label: "Ocktober" },
  { value: "11", label: "November" },
  { value: "12", label: "Desember" }
];
const month_options2 = [
  { value: "1", label: "January" },
  { value: "2", label: "Febuary" },
  { value: "3", label: "Maret" },
  { value: "4", label: "April" },
  { value: "5", label: "Mei" },
  { value: "6", label: "Juni" },
  { value: "7", label: "Juli" },
  { value: "8", label: "Agustus" },
  { value: "9", label: "September" },
  { value: "10", label: "Ocktober" },
  { value: "11", label: "November" },
  { value: "12", label: "Desember" }
];
    return(
        <Modal isOpen = {this.props.edit} className={this.props.className} className = "modal-dialog modal-lg"> 
        <ModalHeader className = "modal-title text-white" style = {{backgroundColor:'#00008B'}}>Edit Sertifikasi</ModalHeader>
        <ModalBody>
                {/* <form role="form"> */}
               
                <div class="row">
                <div class="col-lg-6">
           
              <label>Certificate Name</label>
              <input
                type="text"
                class="form-control"
                name="certificate_name"
                value={this.state.formdata.certificate_name}
                onChange={this.changeHandler}
                required
              />
              </div>
          
              <div class="col-lg-6">
              <label>Penerbit</label>
              <input
                type="text"
                class="form-control"
                name="publisher"
                onChange={this.changeHandler}
                value={this.state.formdata.publisher}
                required
              />
            </div>
            </div>
            <div class= "row">
            <div class="col">
            <p>Mulai Dari</p>
            </div>
            <div class = "col">
              <p>Sampai Dengan</p>
              
              </div>
              </div>
           
           <div class = "row">
           <div class="col">
        
        <Select
          name="valid_start_year"
           //value={this.state.selectedOption.valid_start_year}
           value={options1.filter(({value}) => value == this.props.list_sertifikasi.valid_start_year)}
          onChange={this.handleChange1}
          options = {options1}
          required
        />
        </div>
        <div class ="col">
        
        <Select
          name="valid_start_month"
          //value={this.state.selectedOption2.valid_start_month}
          value={month_options1.filter(({value}) => value === this.props.list_sertifikasi.valid_start_month)}
          onChange={this.handleChange2}
          options = {month_options1}
          required
        />
        </div>
      
      <div class="col">
        
        <Select
          name="until_year"
          //value={this.state.selectedOption2.until_year}
          value={options3.filter(({value}) => value == this.props.list_sertifikasi.until_year)}
          onChange={this.handleChange3}
          options = {options3}
          required
        />
        </div>
        
        <div class="col">
        
        <Select
          name="until_month"
          //value={this.state.selectedOption4.until_month}
          value={month_options2.filter(({value}) => value == this.props.list_sertifikasi.until_month)}
          onChange={this.handleChange4}
          options = {month_options2}
          required
        />
      </div>
      </div>
    
           <div class="form-group">
              <label>Notes</label>
              <input
                type="text"
                class="form-control"
                name="notes"
                value={this.state.formdata.notes}
                onChange={this.changeHandler}
                required
              />
            </div>
                <ModalFooter>
                    <Button style = {{backgroundColor:'#FFA500'}} onClick = {this.props.sertifikasistatus}>Close</Button>
                    <Button style = {{backgroundColor:'#00008B'}}  onClick = {this.submitHandler} >Save</Button>
                </ModalFooter>
            </ModalBody>
        </Modal>

    )
}
}
export default Editsertifikasi
