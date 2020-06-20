const restify=require('restify')
const pg=require('pg')
const DatabaseConnection = require('./config/dbp.config.json')
const middleware=require('restify-cors-middleware')
const cron = require("node-cron")
const fs = require("fs")
//const mahasiswabisnislogic = require('../bisnislogic/m_mahasiswa_bl')

var pool = new pg.Pool(DatabaseConnection.config);
pool.connect(function (err) {
    
    if (err){
        console.log("not able to get connection " +err)
        process.exit
    } else {
        console.log('[DATABASE] connected')
        const Server = restify.createServer()
        const port = process.env.port || 3001
        const cors = middleware({
            origins: ['*'],
            allowHeaders: ['Authorization']
        });
        Server.pre(cors.preflight);
        Server.use(cors.actual);
        Server.use(restify.plugins.queryParser())
        Server.use(restify.plugins.bodyParser({mapParams : false}))
require('./Router/routes')(Server)
//console.log('coba')
Server.listen(port, () =>{
    console.log('[SERVER] running at port'+port)
})
    }
})
// cron.schedule("* * * * *", function() {
//     console.log("running a task every minute");
//    // server.post('/api/login', mahasiswabisnislogic.loginAllHandler)
//   });
// cron.schedule("* * * * *", function() {
//     console.log("---------------------");
//     console.log("Running Cron Job");
//     fs.unlink("./error.log", err => {
//       if (err) throw err;
//       console.log("Error file succesfully deleted");
//     });
//   });