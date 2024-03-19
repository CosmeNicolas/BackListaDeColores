import Color from "../database/models/color.js"

export const listarColores = (req, res)=>{
    console.log('Listando colores')
    res.send('Enviando colores')
}