import Color from "../database/models/color.js"

export const listarColores = async(req, res)=>{
    try {
        const colores = await Color.find()
        res.status(200).json(colores)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje:'Error al buscar el color'})
    }
}