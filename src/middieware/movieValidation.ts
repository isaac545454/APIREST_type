import {body} from "express-validator"

export const movieCreateValidation = ()=>{
    return [
        body("title")
            .isString()
            .withMessage("o titulo é obrigatorio")
            .isLength({min: 5})
            .withMessage("o titulo precisa de 5 caracteres"),

        body("rating")
            .isNumeric().withMessage("a nota precisa ser um numero")
            .custom((value:number)=>{
                if(value < 0 || value > 10){
                    throw new Error("a nota precisa ser entre 0 a 10");
                    
                }
                return true
            }),

        body("director").isString().withMessage("o diretor é obrigatorio"),

        body("description").isString().withMessage("a descrição é obrigatoria"),

        body("poster").isURL().withMessage("a imagem precisa ser uma URL")

    ]
}
