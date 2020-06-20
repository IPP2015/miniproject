import React from "react";
import Datatablesertifikasi from "../components/content/m_sertifikasi/list_sertifikasi";
import { Route } from "react-router-dom";
import { NavLink, BrowserRouter } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
//import Test from "./test"

class Detailpelamar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list_sertifikasi: false
    };
  
    this.listModalHandler = this.listModalHandler.bind(this);
    this.mStatus = this.mStatus.bind(this);
  }

  listModalHandler() {
    this.setState({
      list_sertifikasi: true
    });
  }
  mStatus() {
    this.setState({
      list_sertifikasi: false
    });
  }
  componentDidMount() {
    this.mStatus();
  }
  
  render() {
    return (
<Modal
      isOpen={this.props.list}
        className="modal-dialog modal-xl"
        style={{
          border: "3px solid #000066",
          boxShadow: "none"
        }}
      >
        <div class="modal-header" style={{ backgroundColor: "#000066" }}>
          <h4 class="modal-title" style={{ color: "#fff" }}>
            Detil Pelamar
          </h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={this.props.mStatus}
          >
            <span aria-hidden="true" style={{ color: "#fff" }}>
              X
            </span>
          </button>
        </div>
        <BrowserRouter>
          <ModalBody style={{ border: "none", boxShadow: "none" }}>
            <div className="row">
              <div className="col-lg-3">
                <ul class="list-group" style={{ color: "#000066" }}>
                  <li className="list-group-item">Profil</li>
                  <li className="list-group-item">Biodata</li>
                  <li className="list-group-item">Pengalaman Kerja</li>
                  <li className="list-group-item">Pendidikan</li>
                  <li className="list-group-item">Pelatihan</li>
                  {/* <NavLink
                    className="list-group-item"
                    activeClassName="is-active"
                    to={`/list_sertifikasi/${this.state.list_sertifikasi}`}
                    //to="/Sertifikasi"
                  >
                    Sertifikasi
                    </NavLink> */}
                  <li className="list-group-item" onClick={this.listModalHandler}>sertifikasi</li>
                  <li className="list-group-item">Sumber lowongan kerja</li>
                  <li className="list-group-item">organisasi</li>
                  <li className="list-group-item">Keluarga</li>
                  <li className="list-group-item">Keahlian</li>
                  <li className="list-group-item">Lain - lain</li>
                  <li className="list-group-item">Dokumen</li>
                  <li className="list-group-item">Catatan</li>
                  <li className="list-group-item">Aktivasi Akun</li>
                  <li className="list-group-item">Lihat Tes</li>
                  <li className="list-group-item">Hasil Tes</li>
                </ul>
              </div>
              <div className="col-lg-9">
              {/* <Route
                  exact
                  path="/list_sertifikasi"
                  component={() => (
                    <Datatablesertifikasi 
                    list={this.state.list_sertifikasi} 
                    mStatus={this.mStatus} /> */}
                 <Datatablesertifikasi 
       list={this.state.list_sertifikasi} 
       mStatus={this.mStatus} />
              </div>
            </div>
          </ModalBody>
        </BrowserRouter>
      </Modal>
    );
  }
}

export default Detailpelamar;
