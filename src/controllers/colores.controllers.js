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

export const obtenerColor = async(req,res)=>{
    try {
        const colorBuscado = await Color.findById(req.params.id)
        if(!colorBuscado){
            return res.status(404).json({mensaje:'No se encontro el color con su id'})
        }
        res.status(200).json(colorBuscado)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje:'No se encontro el color con su Id'})
    }
}

export const editarColor = async(req, res)=>{
    try {
        const buscarColor = await Color.findById(req.params.id)
        if(!buscarColor){
            return res.status(404).json({mensaje:'No se pudo encontrar el color para editar'})
        }
        await Color.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensaje:'Color editado'})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje:'No se pudo editar el color'})
    }
}

export const eliminarColor = async(req, res)=>{
    try {
        const buscarColor = await Color.findById(req.params.id)
        if(!buscarColor){
            return  res.status(404).json({mensaje:'No se encontro el color a eliminar'})
        }
        await Color.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje:'Color eliminado exitosamente'})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje:'No se pudo eliminar el color'})
    }
}