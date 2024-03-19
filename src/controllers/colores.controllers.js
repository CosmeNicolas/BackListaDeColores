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

export const crearColor = async(req, res)=>{
    try {
        const nuevoColor = new Color(req.body)
        await nuevoColor.save()
        res.status(201).json({mensaje:'Color creado con exito'})
    } catch (error) {
        console.log(error)
        res.status(400).json({mensaje:'El color no pudo ser creado'})
    }
}