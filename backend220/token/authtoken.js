const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.config.json')
const responsehelper = require('../helper/responsehelper.js')

module.exports = {
 checktoken : ( req,res,next) => {
     if(req.header.authorization){
         responsehelper.sendResponse(res,403,'you are not authorized')
     }else{
         let token = req.headers.authorization
         jwt.verify(token, authConfig.secretkey,(err,decoded)=>{
             if(decoded == undefined){
                 responsehelper.sendResponse(res,404,'your are not authorized')
             }else
             {req.username = decoded
                next()}
         })
     }
 }
}