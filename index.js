import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import morgan from 'morgan'
const app = express()


/* console.log('desde el index.js') */

//1 configurar el puerto 
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), ()=>{
    console.log('estoy en el puerto ' + app.get('port'))
})

//2 configurar los middlewares
app.use(cors())
app.use(morgan('dev'))
//3 configurar las rutas 
app.get('/',(req, res)=>{
    //acá va la logica de la peticion
    console.log('procesando solicitud')
    res.send('Respuesta del back')
})