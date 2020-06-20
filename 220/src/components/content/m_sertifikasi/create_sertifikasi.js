import React from "react"
import axios from "axios"
import {Modal,ModalHeader,ModalBody,ModalFooter, Button} from "reactstrap"
import apiconfig from "../../../config/api.config.json"
import Select from 'react-select'

class createsertifikasi extends React.Component{
    constructor(props){
        super(props)
        const year = new Date().getFullYear()
        this.years = Array.from(new Array(50), (val, index) => year - index)
        // const month = new Date().getFullMonth()
        // this.month = Array.from(new Array(50), (val, index) => month - index)
        this.state = {
            formdata: {
                certificate_name: "",
                publisher: "",
                
                // name: 'React',
               
                valid_start_year: "",
                valid_start_month: "",
                until_year: "",
                until_month: "",
                notes: "",
                namerror: ""
      
             },
             selectedOption: {},
             selectedOption2: {},
             selectedOption3: {},
             selectedOption4: {},
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(selectedOption) {
        this.setState({ selectedOption: selectedOption.value });
    }
    handleOnChange(selectedOption2) {
      this.setState({ selectedOption2: selectedOption2.value });
    }
    handleOnChange(selectedOption3) {
      this.setState({ selectedOption3: selectedOption3.value });
    }
    handleOnChange(selectedOption4) {
      this.setState({ selectedOption4: selectedOption4.value });
    }
    changeHandler(e){
        let tmp = this.state.formdata
        tmp[e.target.name]=e.target.value
        tmp["selectedOption"]=this.state.selectedOption
        tmp["selectedOption2"]=this.state.selectedOption2
        tmp["selectedOption3"]=this.state.selectedOption3
        tmp["selectedOption4"]=this.state.selectedOption4
        this.setState({
            formdata : tmp
        })
}
    handleChange1 = selectedOption => {
     this.setState({ selectedOption: selectedOption });
    };
    
    handleChange2 = selectedOption2 => {
    this.setState({ selectedOption2: selectedOption2 });
     };
     handleChange3 = selectedOption3 => {
      this.setState({ selectedOption3: selectedOption3 });
     };
     
     handleChange4 = selectedOption4 => {
     this.setState({ selectedOption4: selectedOption4 });
      };
    
      changeHandler= event => {
        
        let tmp = this.state.formdata
        tmp[event.target.name] = event.target.value
        tmp["valid_start_year"] = this.state.selectedOption.value
        tmp["valid_start_month"] = this.state.selectedOption2.value
        tmp["until_year"] = this.state.selectedOption3.value
        tmp["until_month"] = this.state.selectedOption4.value
        this.setState({
            formdata: tmp
            
        })

    }

    validate() {

        let namerror = ""

        if (!this.state.formdata.certificate_name || !this.state.formdata.publisher || 
           !this.state.formdata.notes   ) {
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
         alert(this.state.formdata.nameError)
        }else {
          let kota = this.state.selectedOption2.value
          let tmp = this.state.formdata
          tmp.kode_kota = kota
          this.setState({
              formdata : tmp
        })
        let token = localStorage.getItem(apiconfig.ls.token)
        
        let option = {
            url: apiconfig.BASE_URL + apiconfig.ENDPOINTS.x_sertifikasi,
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
                this.props.sertifikasistatus()          
                // window.location.reload()
            }
          
        })
        .catch((error)=> {
            console.log(error)
        })
    }
  }
 
    render(){
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
            <Modal isOpen = {this.props.create}  className={"modal-dialog modal-xl"}
            style={{display:
              this.state.selectedOption == true ||  this.state.selectedOption2 == true
               ||this.state.selectedOption3 == true || this.state.selectedOption4 == true
                ? "none"
                : "block"}}>
                <ModalHeader style={{backgroundColor: "#000066", color: "#fff" }}> Tambah Sertifikasi</ModalHeader>
                        <form
                  className="needs-validation"
                  onSubmit={this.submitHandler}
                  noValidate
                >
                <ModalBody>
                {/* <form role="form"> */}
               
                <div class="row">
                <div class="col-lg-6">
           
              <label>Certificate Name</label>
              <input
                type="text"
                class="form-control"
                name="certificate_name"
                placeholder = "Certificate name"
                // value={this.state.formdata.certificate_name}
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
                placeholder = "Publisher"
                onChange={this.changeHandler}
                // value={this.state.formdata.publisher}
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
          placeholder = "Tahun"
          value={this.state.selectedOption.valid_start_year}
          onChange={this.handleChange1}
          options = {options1}
          required
        />
        </div>
        <div class ="col">
        
        <Select
          name="valid_start_month"
          placeholder = "Bulan"
          value={this.state.selectedOption2.valid_start_month}
          onChange={this.handleChange2}
          options = {month_options1}
          required
        />
        </div>
        {/* <div class="col">
                        <input type="text" class="form-control" placeholder="Pilih Bulan" readOnly
                        name="Pilih Bulan" 
                       
                        />
                   </div>
                   <div class ="col">
                        <input type="text" class="form-control" placeholder="Pilih Tahun" readOnly
                        name="Pilih Tahun" 
                     
                        />
                   </div> */}
      <div class="col">
        
        <Select
          name="until_year"
          placeholder = "Tahun"
          value={this.state.selectedOption3.until_year}
          onChange={this.handleChange3}
          options = {options3}
          required
          readOnly
          
        />
        </div>
        
        <div class="col">
        
        <Select
          name="until_month"
          placeholder = "Bulan"
          value={this.state.selectedOption4.until_month}
          onChange={this.handleChange4}
          options = {month_options2}
          required
          readOnly
        />
      </div>
      </div>
    
           <div class="form-group">
              <label>Notes</label>
              <input
                type="text"
                class="form-control"
                name="notes"
               placeholder = "Note"
                // value={this.state.formdata.notes}
                onChange={this.changeHandler}
                required
              />
            </div>
                </ModalBody>
                <ModalFooter>
                    <Button color = "primary" type = {this.submitHandler} >save </Button>
                    <Button color = "warning" onClick = {this.props.sertifikasistatus}> Cancel</Button>
                   
                </ModalFooter>
                </form>
            </Modal>
        )
    }
}
export default createsertifikasi