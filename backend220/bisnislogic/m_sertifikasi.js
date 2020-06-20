 const responseHelper = require('../helper/responsehelper') 
const dtl = require('../datalayer/dtl')

const m_sertifikasi = {
        readx_sertifikasiAllHandler: (req,res,next) => {
        dtl.readx_sertifikasiAllHandlerData(function(items){
        responseHelper.sendResponse(res,200,items)

        })
        },
        insertx_sertifikasiAllHandler:(req,res,next) => {
        var docs = req.body
        dtl.insertx_sertifikasiAllHandlerData(function(items){
                //console.log(items)
        responseHelper.sendResponse(res,200,items)
        // dtl.insertnilai(items)
        // dtl.insertnilai(items.kd_mhs, items.nilai)
        },docs)
        },
        updatex_sertifikasiAllHandler:(req,res,next) => {
            var docs = req.body
            dtl.updatex_sertifikasiAllHandlerData(function(items){
                 //console.log(items,"items")
            responseHelper.sendResponse(res,200,items)
            },docs)
            },
            deletedx_sertifikasiAllHandler:(req,res,next) => {
                var docs = req.body
                dtl.deletedx_sertifikasiAllHandlerData(function(items){
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
        

module.exports = m_sertifikasi