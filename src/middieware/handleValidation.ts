
import {Require, Response, NextFunction} from "express"
import { validationResult } from "express-validator"

export const validate = (req: Request, res: Response, next: NextFunction) =>{

    const erros = validationResult(req)
    if(erros.isEmpty()){
        return next()
    }
    const extratecErros: Object[] = []

    erros.array().map((err)=> extratecErros.push({[err.param]: err.msg}))

    return res.status(422).json({
        erros:  extratecErros,
    })

}