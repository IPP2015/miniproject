const mahasiswabisnislogic = require('../bisnislogic/m_mahasiswa_bl')
const sertifikasibisnislogic = require('../bisnislogic/m_sertifikasi')
const po_detailbisnislogic = require('../bisnislogic/po_detail')
const m_userbisnislogic = require('../bisnislogic/m_user')

module.exports = exports = function(Server){

    Server.post('/api/login', m_userbisnislogic.loginAllHandler)

    Server.get('/api/m_mahasiswa', mahasiswabisnislogic.readmahasiswaAllHandler),
    Server.post('/api/m_mahasiswa', mahasiswabisnislogic.insertmahasiswaAllHandler)
    Server.put('/api/m_mahasiswa', mahasiswabisnislogic.updatemahasiswaAllHandler)
    Server.del('/api/m_mahasiswa', mahasiswabisnislogic.deletedmahasiswaAllHandler)
    Server.get('/api/provinsi', mahasiswabisnislogic.readprovinsiAllHandler)
    Server.get('/api/kota', mahasiswabisnislogic.readkotaAllHandler)

    Server.get('/api/x_sertifikasi', sertifikasibisnislogic.readx_sertifikasiAllHandler),
    Server.post('/api/x_sertifikasi', sertifikasibisnislogic.insertx_sertifikasiAllHandler)
    Server.put('/api/x_sertifikasi', sertifikasibisnislogic.updatex_sertifikasiAllHandler)
    Server.del('/api/x_sertifikasi', sertifikasibisnislogic.deletedx_sertifikasiAllHandler)

    Server.get('/api/po_detail', po_detailbisnislogic.readpo_detailAllHandler),
    Server.post('/api/po_detail', po_detailbisnislogic.insertpo_detailAllHandler)
    // Server.put('/api/po_detail', po_detailbisnislogic.updatepo_detailAllHandler)
    // Server.del('/api/po_detail', po_detailbisnislogic.deletedpo_detailAllHandler)

    Server.get('/api/po', po_detailbisnislogic.readpoAllHandler),
    // Server.post('/api/po', po_detailbisnislogic.insertpoAllHandler)
    // Server.put('/api/po_detail', po_detailbisnislogic.updatepo_detailAllHandler)
    // Server.del('/api/po_detail', po_detailbisnislogic.deletedpo_detailAllHandler)

    Server.get('/api/barang', po_detailbisnislogic.readbarangAllHandler),
    // Server.post('/api/po', po_detailbisnislogic.insertpoAllHandler)
    // Server.put('/api/po_detail', po_detailbisnislogic.updatepo_detailAllHandler)
    // Server.del('/api/po_detail', po_detailbisnislogic.deletedpo_detailAllHandler)
    
    Server.get('/api/m_user', m_userbisnislogic.readm_userAllHandler),
    Server.post('/api/m_user', m_userbisnislogic.insertm_userAllHandler)
    Server.put('/api/m_user', m_userbisnislogic.updatem_userAllHandler)
    Server.del('/api/m_user', m_userbisnislogic.deletedm_userAllHandler)
}