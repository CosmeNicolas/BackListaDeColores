import { Router } from "express";
import {crearColor, editarColor, eliminarColor, listarColores, obtenerColor}  from "../controllers/colores.controllers.js";

const router = Router()

router.route('/colores').get(listarColores).post(crearColor)
router.route('/colores/:id').get(obtenerColor).put(editarColor).delete(eliminarColor)
export default router