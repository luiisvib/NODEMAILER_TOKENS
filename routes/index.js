var  express = require("express")
var  router = express.Router()
var  nodemailer = require("nodemailer");

router.get("/", (req,res) =>{
    res.render("../views/index.ejs", {titulo: "NODE MAILER"})
})

router.post("/", (req,res) =>{
    const {nombre, apellidos, email} = req.body
    console.log(nombre)
    enviar_email = async () => {

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", //Dirección email
            port: 587, //Puerto requerido para el envio de emails
            auth: {
                user: process.env.correo, //Dirección de correo que enviará el email
                pass: process.env.contrasena, //contraseña de aplicación de gmail
            },
        });
    
        let info = await transporter.sendMail({
            from: process.env.correo,  //Dirección de correo que enviará el email
            to: email,   //Dirección de correo que recibirá el email
            subject: "PRUEBA DAW",  
            text: `Hola ${nombre} ${apellidos}`, 
            html: `<h1>Hola ${nombre} ${apellidos}</h1>`, 
        });
        console.log(info)
    }
    enviar_email().catch(console.error);
})

module.exports = router

