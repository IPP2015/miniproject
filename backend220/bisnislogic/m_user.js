const responseHelper = require('../helper/responsehelper')
const dtl = require('../datalayer/dtl')
const authConfig = require('../config/auth.config.json')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const cron = require("node-cron");

const m_user = {

        readm_userAllHandler: (req,res,next) => {
        dtl.readm_userAllHandlerData(function(items){
        responseHelper.sendResponse(res,200,items)
        })
        },
        insertm_userAllHandler:(req,res,next) => {
        var docs = req.body
        dtl.insertm_userAllHandlerData(function(items){
        responseHelper.sendResponse(res,200,items)
        },docs)
        },
        updatem_userAllHandler:(req,res,next) => {
            var docs = req.body
            dtl.updatem_userAllHandlerData(function(items){
            responseHelper.sendResponse(res,200,items)
            },docs)
            },
            deletedm_userAllHandler:(req,res,next) => {
                var docs = req.body
                dtl.deletedm_userAllHandlerData(function(items){
                responseHelper.sendResponse(res,200,items)
                },docs)
                },
                loginAllHandler:(req,res,next) =>{
                   console.log(JSON.stringify(req.body))
                    var docs = req.body
                    //console.log('coba')
                    dtl.readloginbyidData(function(items){   
                      console.log(JSON.stringify(items))
                        
                            if (items[0]){
                                console.log(JSON.stringify(docs))
                                //console.log('coba')
                                
                                if(bcrypt.compareSync(docs.m_password,items[0].m_password)){
                     
                                    let token = jwt.sign(items[0],authConfig.secretkey)
                                    delete items[0].m_password
                                    let result = {
                                        username : items[0],
                                        token:token,
                                    
                                    }
                                    responseHelper.sendResponse(res,200,result)
                                }else{ result = 'wrong password'
                                
                                responseHelper.sendResponse(res,404,result)}
                            }else { result = 'username not found'
                            //console.log('coba')
                            responseHelper.sendResponse(res,400,result)}
                       },docs.username)
                        }
                    //     if (items[0]) {
                    //         if (bcrypt.compareSync(docs.m_password, items[0].m_password)) {
                    //           if (items[0].status_lock == "Locked") {
                    //             let result = "Akun Anda Sedang di Blokir selama 24 jam";
                    //             responseHelper.sendResponse(res, 404, result);
                    //           } else {
                    //             let token = jwt.sign(items[0], authConfig.secretkey);
                    
                    //             delete items[0].m_password;
                    //             let result = {
                    //               userdata: items,
                    //               token: token
                    //             };
                    //             responseHelper.sendResponse(res, 200, result);
                    //             dtl.resetAttemptUser(items[0].username);
                    //           }
                    //         } else {
                    //           if (items[0].attempt < 3) {
                    //             let result = "Wrong Password";
                    //             responseHelper.sendResponse(res, 404, result);
                    //             dtl.updateAttemptUser(items[0].username);
                    //             //console.log(JSON.stringify(items))
                    //           }
                    //           if (items[0].attempt == 3) {
                    //             let result = "Akun Anda di Blokir Selama 24 Jam";
                    //             responseHelper.sendResponse(res, 404, result);
                    //             dtl.lockUser(items[0].username);
                    //             cron.schedule("10 * * * * *", function() {
                    //               dtl.resetAttemptUser(items[0].username);
                    //             });
                    //           }
                    //         }
                    //       } else {
                    //         let result = "User Not Found!";
                    //         responseHelper.sendResponse(res, 404, result);
                    //       }
                    //     }, docs.username);
                    //   }
                     };
                    
        

module.exports = m_user