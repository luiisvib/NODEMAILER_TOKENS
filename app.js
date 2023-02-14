var express = require("express")
var path = require("path")
var morgan = require("morgan")
var cookieParser = require("cookie-parser")
var indexRouter = require("./routes/index")
const dotenv = require("dotenv")  //Importar el archivo env
dotenv.config()

var app = express()

// view
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "views")

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/",indexRouter)

app.listen(3000)