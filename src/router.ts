import { validate } from './middieware/handleValidation';

import { Request } from 'express';
import { Response, Router } from 'express';
import { CreateMovies, findMovieById, getAllMovies,  removeMovie, updateMovies } from './controler/moviesController'

import {validate} from "./middieware/handleValidation"
import { movieCreateValidation } from "./middieware/movieValidation"
const router = Router()




export default router
.get("/teste", (req: Request, res: Response)=>{
    res.status(200).send("Api working")
})
.post("/movie", movieCreateValidation(), validate, CreateMovies)
.get("/movie/:id", findMovieById)
.get("/movie", getAllMovies)
.delete("/movie/:id",  removeMovie)
.patch("/movie/:id",  movieCreateValidation(), validate, updateMovies)
