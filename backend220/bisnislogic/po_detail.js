const responseHelper = require('../helper/responsehelper') 
const dtl = require('../datalayer/dtl')

const po_detail = {
        readpo_detailAllHandler: (req,res,next) => {
        dtl.readpo_detailAllHandlerData(function(items){
        responseHelper.sendResponse(res,200,items)

        })
        },
        insertpo_detailAllHandler:(req,res,next) => {
        var docs = req.body
        dtl.insertpo_detailAllHandlerData(function(items){
                //console.log(items)
        responseHelper.sendResponse(res,200,items)
        // dtl.insertnilai(items)
        // dtl.insertnilai(items.kd_mhs, items.nilai)
        },docs)
        },
        // updatepo_detailAllHandler:(req,res,next) => {
        //     var docs = req.body
        //     dtl.updatepo_detailAllHandlerData(function(items){
        //          //console.log(items,"items")
        //     responseHelper.sendResponse(res,200,items)
        //     },docs)
        //     },
        //     deletedpo_detailAllHandler:(req,res,next) => {
        //         var docs = req.body
        //         dtl.deletedpo_detailAllHandlerData(function(items){
        //         responseHelper.sendResponse(res,200,items)
        //         },docs)
        //         },
        readpoAllHandler: (req,res,next) => {
                dtl.readpoAllHandlerData(function(items){
                responseHelper.sendResponse(res,200,items)
        
                })
                },    
                readbarangAllHandler: (req,res,next) => {
                        dtl.readbarangAllHandlerData(function(items){
                        responseHelper.sendResponse(res,200,items)
                
                        })
                        },    
        }
        

module.exports = po_detail