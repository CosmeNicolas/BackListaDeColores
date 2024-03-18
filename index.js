import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { listarColores } from "./src/controllers/colores.controllers.js";

const app = express();
//1 configurar el puerto
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("estoy en el puerto " + app.get("port"));
});

//2 configurar los middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/public")));

//3 configurar las rutas

app.use("/api", listarColores);

/* app.get('/',(req, res)=>{
    //acá va la logica de la peticion
    console.log('procesando solicitud')
    res.send('Respuesta del back')
}) */
