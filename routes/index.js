var  express = require("express")
var  router = express.Router()
var  nodemailer = require("nodemailer");
var jwt = require("jsonwebtoken")

router.get("/", (req,res) =>{
    res.render("index.ejs", {titulo: "NODE MAILER"})
})

router.post("/", (req,res) =>{
    const {nombre, apellidos, email} = req.body
    console.log(nombre)

    const token = jwt.sign({nombre}, "my_secret_key", )
    enviar_email = async () => {

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", //Dirección email
            port: 587, //Puerto requerido para el envio de emails
            auth: {
                user: process.env.correo, //Dirección de correo que enviará el email
                pass: process.env.contrasena, //Contraseña de aplicación de gmail
            },
        });
    
        let info = await transporter.sendMail({
            from: process.env.correo,  //Dirección de correo que enviará el email
            to: email,   //Dirección de correo que recibirá el email
            subject: "PRUEBA DAW",  
            text: `Hola ${nombre} ${apellidos} aquí tienes la clave que tendrás que verificar ${token}`, 
            html: `<h1>Hola ${nombre} ${apellidos}</h1>
                   <p>A continuación tienes la clave que tienes que verificar</p>
                   <h2>${token}</h2>`, 
        });
        console.log(info)
    }
    enviar_email().catch(console.error);

    res.render("validacion.ejs", {titulo: "Validación Token"})
})

router.post("/validacion",(req,res) =>{
    const {token} = req.body
    jwt.verify(token, "my_secret_key", (error, data) =>{
        if(error){
            res.send("<h1>TOKEN INCORRECTO</h1>")
        }else{
            res.send("<h1>TOKEN VALIDADO</h1>")
        }
    })
})

module.exports = router

