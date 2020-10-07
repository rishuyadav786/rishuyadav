// // server.js

// const path = require('path');
// const express = require('express');
// const multer = require('multer');
// const bodyParser = require('body-parser')
// const app = express();

// const DIR = './uploads';
 
// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
//     }
// });
// let upload = multer({storage: storage});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
 
// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.setHeader('Access-Control-Allow-Methods', 'POST');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });
 
// app.get('/api', function (req, res) {
//   res.end('file upload');
// });
 
// app.post('/api/upload',upload.single('file'), function (req, res) {
//   window.alert("rishu yadav")
//     if (!req.file) {
//         console.log("Your request doesn’t have any file");
//         return res.send({
//           success: false
//         });
    
//       } else {
//         console.log('Your file has been received successfully');
//         return res.send({
//           success: true
//         })
//       }
// });
 
// const PORT = process.env.PORT || 3000;
 
// app.listen(PORT, function () {
//   console.log('Node.js server is running on port ' + PORT);
// });




const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require('multer');
const nodemailer = require("nodemailer");//for email send...
// var email  = require('emailjs/email');//for email send 2....

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(4000, () => {
    console.log("The server started on port 4000 !!!!!!");
});

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, '../../Angular/FoodPlaza/src/assets/')
    },
    filename: (req, file, callBack) => {
        // callBack(null, `FoodPlaza_${file.originalname}`)//for using name before image name
        callBack(null, `${file.originalname}`)
    }
  })
  
const upload = multer({ storage: storage })
   
//let upload = multer({ dest: 'uploads/' })

app.get("/", (req, res) => {
    res.send(
      `<h1 style='text-align: center'>
            Wellcome to FunOfHeuristic 
            <br><br>
            <b style="font-size: 182px;">😃👻</b>
        </h1>`
    );
  });

  app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    console.log(file.filename);
    if (!file) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file);
  })

  app.post('/multipleFiles', upload.array('files'), (req, res, next) => {
    const files = req.files;
    console.log(files);
    if (!files) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send({sttus:  'ok'});
  })



  // --------------------------------
  app.get("/sendmail1", (req, res) => {
    res.send(
      `<h1 style='text-align: center'>
            Wellcome to FunOfHeuristic 
            <br><br>
            <b style="font-size: 182px;">😃👻</b>
        </h1>`
    );
  });
  // define a sendmail endpoint, which will send emails and response with the corresponding status


app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  console.log(user);
 
  sendMail(user, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Failed to send email" });
    } else {
      console.log("Email has been sent");
      res.send(info);
    }
  });
});



const sendMail = (user, callback) => {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
    user: 'rishuyadav204@gmail.com',
    pass: '80133493'
    }
    });
  
    var mailOptions = {
    from: 'rishuyadav204@gmail.com',
    to: `${user.email}`,
    subject: 'Verify FoodPlaza Account',
    text: `Hi, thank you for regestring in FoodPlaza. Please verify your otp . your otp is = ${user.randomNumber}`
    };
  
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
    console.log('Email sent: ' + info.response);
    }
    });
}



// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//   user: 'rishuyadav204@gmail.com',
//   pass: '80133493'
//   }
//   });

//   var mailOptions = {
//   from: 'rishuyadav204@gmail.com',
//   to: 'yadavrishu98@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: `Hi, thank you for your nice Node.js Email.`
//   };

//   transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//   console.log(error);
//   } else {
//   console.log('Email sent: ' + info.response);
//   }
//   });