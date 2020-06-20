const pg =require('pg')
const DatabaseConnection = require('../config/dbp.config.json')
const DB = new pg.Pool(DatabaseConnection.config)
const bcrypt = require('bcryptjs')
const dtl = {
readmahasiswaAllHandlerData : (callback) =>{
    DB.connect(function(err,client,done){
        var data = ''
        if (err){
            data = err;
        }
        client.query("SELECT * FROM mahasiswa where is_delete = false", function(err,result){
            done()
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},

insertmahasiswaAllHandlerData : (callback,docs) =>{
    DB.connect(function(err,client,done){
        //console.log(JSON.stringify(docs))
        //console.log(docs.kode_mahasiswa)
        var data = ''
        if (err){
            data = err;
        }
        
        const query = {
            text: "insert into mahasiswa (kode_mahasiswa,nama_mahasiswa,kode_kota,kode_agama,kode_jurusan,kode_provinsi,jenis_kelamin,hobi,is_delete)values($1,$2,$3,$4,$5,$6,$7,$8,false)",
            values : [docs.kode_mahasiswa,docs.nama_mahasiswa,docs.kode_kota,docs.kode_agama,docs.kode_jurusan,docs.kode_provinsi,docs.jenis_kelamin,docs.hobi],
        }
        client.query(query, function(err,result){
            //console.log(JSON.stringify(err))
           //console.log(JSON.stringify(query))
            done()
            if (err){
                data = err
            }else {
                data =docs.kode_mahasiswa
            }
            callback(data)
        })
    })
},
updatemahasiswaAllHandlerData : (callback,docs) =>{
    DB.connect(function(err,client,done){
       // console.log(JSON.stringify(docs))
        //console.log(docs.kode_mahasiswa)
        var data = ''
        if (err){
            data = err;
        }
        const query = {
            text: "update mahasiswa set nama_mahasiswa=($1),kode_kota=($2),kode_agama=($3),kode_jurusan=($4),kode_provinsi=($5),jenis_kelamin=($6),hobi=($7) where kode_mahasiswa=($8)",
            values : [docs.nama_mahasiswa,docs.kode_kota,docs.kode_agama,docs.kode_jurusan,docs.kode_provinsi,docs.jenis_kelamin,docs.hobi,docs.kode_mahasiswa],
        }
        //console.log(err)
        client.query(query, function(err,result){
            done()
           //console.log(JSON.stringify(data))
          // console.log(JSON.stringify(data))
           //console.log(JSON.stringify(query))
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},
deletedmahasiswaAllHandlerData : (callback,docs) =>{
    DB.connect(function(err,client,done){
        var data = ''
        if (err){
            data = err;
        }
        const query = {
            text: "update mahasiswa set is_delete = true where kode_mahasiswa=($1)",
            values : [docs.kode_mahasiswa],
        }
        client.query(query, function(err,result){
            done()
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},
readx_sertifikasiAllHandlerData : (callback) =>{
    DB.connect(function(err,client,done){
        // console.log(JSON.stringify(query))
        //console.log(data)
        var data = ''
        if (err){
            data = err;
        }
        client.query("SELECT * FROM x_sertifikasi where is_delete = false", function(err,result){
            done()
           
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},

insertx_sertifikasiAllHandlerData : (callback,docs) =>{
    DB.connect(function(err,client,done){
        //console.log(JSON.stringify(id))
       console.log(docs)
        var data = ''
        if (err){
            data = err;
        }

        const query = {
            text: "insert into x_sertifikasi (certificate_name ,publisher ,valid_start_year ,valid_start_month ,until_year ,until_month ,notes)values($1,$2,$3,$4,$5,$6,$7)",
            values : [docs.certificate_name, docs.publisher, docs.valid_start_year, docs.valid_start_month, docs.until_year, docs.until_month, docs.notes],
        }
        client.query(query, function(err,result){
           console.log(JSON.stringify(err))
           console.log(JSON.stringify(query))
            done()
            if (err){
                data = err
            }else {
                data =docs.id
            }
            callback(data)
        })
    })
},
updatex_sertifikasiAllHandlerData : (callback,docs) =>{
    DB.connect(function(err,client,done){
      //console.log(JSON.stringify(docs))
        console.log(docs)
        var data = ''
        if (err){
            data = err;
        }
        const query = {
            text: "update x_sertifikasi set certificate_name=($1) ,publisher=($2) ,valid_start_year=($3) ,valid_start_month=($4) ,until_year=($5) ,until_month=($6) ,notes=($7) where id=($8)",
            values : [docs.certificate_name, docs.publisher, docs.valid_start_year, docs.valid_start_month, docs.until_year, docs.until_month, docs.notes,docs.id],
        }
        //console.log(err)
        client.query(query, function(err,result){
           
            done()
           //console.log(JSON.stringify(query))
          //console.log(JSON.stringify(data))
        //   console.log(JSON.stringify(query))
            if (err){
                data = err
            }else {
                data = result.rows
            }
            //console.log(JSON.stringify(result.rows,'data'))
            callback(data)
        })
    })
},
deletedx_sertifikasiAllHandlerData : (callback,docs) =>{
    DB.connect(function(err,client,done){
        var data = ''
        if (err){
            data = err;
        }
        const query = {
            text: "update x_sertifikasi set is_delete = true where id=($1)",
            values : [docs.id],
        }
        client.query(query, function(err,result){
            done()
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},
readpo_detailAllHandlerData : (callback) =>{
    DB.connect(function(err,client,done){
        // console.log(JSON.stringify(query))
        //console.log(data)
        var data = ''
        if (err){
            data = err;
        }
       // "SELECT po.kd_trans,po.tgl_trans, po.kd_sub, po.userid, po.total_item, po.total_harga, po.discount,barang.kd_brg, barang.nama_brg, barang.satuan, barang.qty, barang.harga, barang.stok_min, po_detail.no,po_detail.kd_trans,po_detail.kd_brg,po_detail.qty,po_detail.harga, po_detail.disc,po_detail.total_disc from po_detail inner join barang on barang.kd_brg = po_detail.kd_brg inner join po on po.kd_trans = po_detail.kd_trans"
        client.query("SELECT po.kd_trans,po.tgl_trans, po.kd_sub, po.userid, po.total_item, po.total_harga, po.discount,barang.kd_brg, barang.nama_brg, barang.satuan, barang.qty, barang.harga, barang.stok_min, po_detail.no,po_detail.kd_trans,po_detail.kd_brg,po_detail.qty,po_detail.harga, po_detail.disc,po_detail.total_disc from po_detail inner join barang on barang.kd_brg = po_detail.kd_brg inner join po on po.kd_trans = po_detail.kd_trans", 
        function(err,result){
            done()
           
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},
readpoAllHandlerData : (callback) =>{
    DB.connect(function(err,client,done){
        //console.log(JSON.stringify(query))
        //console.log(data)
        var data = ''
        if (err){
            data = err;
        }
        client.query("SELECT * FROM po", function(err,result){
            done()
           
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},
readbarangAllHandlerData : (callback) =>{
    DB.connect(function(err,client,done){
        // console.log(JSON.stringify(query))
        //console.log(data)
        var data = ''
        if (err){
            data = err;
        }
        client.query("SELECT * FROM barang", function(err,result){
            done()
           
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},

insertpo_detailAllHandlerData : (callback,docs) =>{
    DB.connect(function(err,client,done){
        //console.log(JSON.stringify(id))
       console.log(docs)
        var data = ''
        if (err){
            data = err;
        }

        const query = {
            text: "insert into po_detail (certificate_name ,publisher ,valid_start_year ,valid_start_month ,until_year ,until_month ,notes)values($1,$2,$3,$4,$5,$6,$7)",
            values : [docs.certificate_name, docs.publisher, docs.valid_start_year, docs.valid_start_month, docs.until_year, docs.until_month, docs.notes],
        }
        client.query(query, function(err,result){
           console.log(JSON.stringify(err))
           console.log(JSON.stringify(query))
            done()
            if (err){
                data = err
            }else {
                data =docs.id
            }
            callback(data)
        })
    })
},
// updatepo_detailAllHandlerData : (callback,docs) =>{
//     DB.connect(function(err,client,done){
//       //console.log(JSON.stringify(docs))
//         console.log(docs)
//         var data = ''
//         if (err){
//             data = err;
//         }
//         const query = {
//             text: "update po_detail set certificate_name=($1) ,publisher=($2) ,valid_start_year=($3) ,valid_start_month=($4) ,until_year=($5) ,until_month=($6) ,notes=($7) where id=($8)",
//             values : [docs.certificate_name, docs.publisher, docs.valid_start_year, docs.valid_start_month, docs.until_year, docs.until_month, docs.notes,docs.id],
//         }
//         //console.log(err)
//         client.query(query, function(err,result){
           
//             done()
//            //console.log(JSON.stringify(query))
//           //console.log(JSON.stringify(data))
//         //   console.log(JSON.stringify(query))
//             if (err){
//                 data = err
//             }else {
//                 data = result.rows
//             }
//             //console.log(JSON.stringify(result.rows,'data'))
//             callback(data)
//         })
//     })
// },
// deletedpo_detailAllHandlerData : (callback,docs) =>{
//     DB.connect(function(err,client,done){
//         var data = ''
//         if (err){
//             data = err;
//         }
//         const query = {
//             text: "update po_detail set is_delete = t where id=($1)",
//             values : [docs.id],
//         }
//         client.query(query, function(err,result){
//             done()
//             if (err){
//                 data = err
//             }else {
//                 data = result.rows
//             }
//             callback(data)
//         })
//     })
// },
readkotaAllHandlerData : (callback) =>{
    DB.connect(function(err,client,done){
        //console.log(JSON.stringify(docs))
        //console.log(docs.kode_kota)
        var data = ''
        if (err){
            data = err;
        }
        client.query("SELECT * FROM kota ", function(err,result){
            done()
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},
readprovinsiAllHandlerData : (callback) =>{
    DB.connect(function(err,client,done){
        var data = ''
        if (err){
            data = err;
        }
        client.query("SELECT * FROM provinsi", function(err,result){
            done()
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},
readkotaAllHandlerData : (callback) =>{
    DB.connect(function(err,client,done){
        //console.log(JSON.stringify(docs))
        //console.log(docs.kode_kota)
        var data = ''
        if (err){
            data = err;
        }
        client.query("SELECT * FROM kota ", function(err,result){
            done()
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},
readprovinsiAllHandlerData : (callback) =>{
    DB.connect(function(err,client,done){
        var data = ''
        if (err){
            data = err;
        }
        client.query("SELECT * FROM provinsi", function(err,result){
            done()
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},
readm_userAllHandlerData : (callback) =>{
    DB.connect(function(err,client,done){
          //console.log(JSON.stringify(docs))
        var data = ''
        if (err){
            data = err;
        }
        client.query("SELECT * FROM m_user where is_delete = false",  function(err,result){
            done()
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},
insertm_userAllHandlerData : (callback,docs) =>{
    DB.connect(function(err,client,done){
        console.log(JSON.stringify(docs))
        //console.log(docs.kode_mahasiswa)

        var data = ''
        if (err){
            data = err;
        }
        var salt = bcrypt.genSaltSync(10)
        var pashash = bcrypt.hashSync(docs.m_password,salt)
        const query = {
            text: "insert into m_user (id,username,m_password,is_delete)values($1,$2,$3,false)",
           values : [docs.id,docs.username,pashash],
        }
        client.query(query, function(err,result){
            done()
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},
updatem_userAllHandlerData : (callback,docs) =>{
    DB.connect(function(err,client,done){
        //console.log(JSON.stringify(docs))
        var data = ''
        if (err){
            data = err;
        }
        const query = {
            text: "update m_user set username=($2) where id=($1)",
            values : [docs.id,docs.username],
        }
        client.query(query, function(err,result){
            done()
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},
deletedm_userAllHandlerData : (callback,docs) =>{
    DB.connect(function(err,client,done){
        var data = ''
        if (err){
            data = err;
        }
        const query = {
            text: "update m_user set is_delete = true where username=($1)",
            values : [docs.username],
        }
        client.query(query, function(err,result){
            done()
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},

readloginbyidData : (callback,docs) =>{
    DB.connect(function(err,client,done){
       //console.log(JSON.stringify(docs))
       // console.log(err)
       
        var data = ''
        if (err){
            data = err;
        }
        const query = {
            text: "select * from m_user where username=($1)",
            values : [docs],
        }
        client.query(query, function(err,result){
            done()
            if (err){
                data = err
            }else {
                data = result.rows
            }
            callback(data)
        })
    })
},
updateAttemptUser: username => {
    DB.connect(function(err, client, done) {
        //console.log(JSON.stringify(username))
      var data = "";
      if (err) {
        data = err;
      }

      const query = {
        text:
          "UPDATE m_user SET attempt = (attempt + 1), lastdate = now() where username = ($1)",
        values: [username]
      };
      //console.log(JSON.stringify(query))
      client.query(query, function(err, result) {
        done();
        if (err) {
          data = err;
        } else {
          data = result.rows;
        }
        // callback(data);
      });
    });
  },
  resetAttemptUser: username => {
    DB.connect(function(err, client, done) {
      var data = "";
      if (err) {
        data = err;
      }

      const query = {
        text:
          "UPDATE m_user SET attempt = 0, status_lock = 'Unlocked' where username = ($1)",
        values: [username]
      };
    //  console.log(JSON.stringify(query));
      client.query(query, function(err, result) {
        done();
        if (err) {
          data = err;
        } else {
          data = result.rows;
        }
        //callback(data);
      });
    });
  },
  lockUser: username => {
    DB.connect(function(err, client, done) {
      var data = "";
      if (err) {
        data = err;
      }

      const query = {
        text: "UPDATE m_user SET status_lock = 'Locked' where username = ($1)",
        values: [username]
      };

     // console.log(JSON.stringify(query));
      client.query(query, function(err, result) {
        done();
        if (err) {
          data = err;
        } else {
          data = result.rows;
        }
        //callback(data);
      });
    });
  },
  unlockUser: username => {
    DB.connect(function(err, client, done) {
      var data = "";
      if (err) {
        data = err;
      }

      const query = {
        text: "UPDATE m_user SET status_lock = 'Unlocked' where username = ($1)",
        values: [username]
      };

     // console.log(JSON.stringify(query));
      client.query(query, function(err, result) {
        done();
        if (err) {
          data = err;
        } else {
          data = result.rows;
        }
        //callback(data);
      });
    });
  },
  insertnilai: kode_mahasiswa => {
    DB.connect(function (err, client, done) {
       console.log(kode_mahasiswa)
        const query = {
            text: 'insert into nilai(kode_mahasiswa) values($1)',
            values: [kode_mahasiswa],
        }
        console.log(query)
        client.query(query)
        done()

    })
},

}
module.exports=dtl