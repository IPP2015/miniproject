const responseHelper = require('../helper/responsehelper') 
const dtl = require('../datalayer/dtl')

const m_mahasiswa_bl = {
        readmahasiswaAllHandler: (req,res,next) => {
        dtl.readmahasiswaAllHandlerData(function(items){
        responseHelper.sendResponse(res,200,items)
        })
        },
        insertmahasiswaAllHandler:(req,res,next) => {
        var docs = req.body
        dtl.insertmahasiswaAllHandlerData(function(items){
        responseHelper.sendResponse(res,200,items)
        dtl.insertnilai(items)
        // dtl.insertnilai(items.kd_mhs, items.nilai)
        },docs)
        },
        updatemahasiswaAllHandler:(req,res,next) => {
            var docs = req.body
            dtl.updatemahasiswaAllHandlerData(function(items){
                   // console.log(items)
            responseHelper.sendResponse(res,200,items)
            },docs)
            },
            deletedmahasiswaAllHandler:(req,res,next) => {
                var docs = req.body
                dtl.deletedmahasiswaAllHandlerData(function(items){
                responseHelper.sendResponse(res,200,items)
                },docs)
                },
                readkotaAllHandler: (req,res,next) => {
                        dtl.readkotaAllHandlerData(function(items){
                        responseHelper.sendResponse(res,200,items)
                        })
                        },
                        readprovinsiAllHandler: (req,res,next) => {
                                dtl.readprovinsiAllHandlerData(function(items){
                                responseHelper.sendResponse(res,200,items)
                                })
                                },
                             
        }
        

module.exports = m_mahasiswa_bl