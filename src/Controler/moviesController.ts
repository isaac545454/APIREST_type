import { Request, Response } from 'express';
import { MovieModel } from './../models/movie';
import { react } from '@vitejs/plugin-react';
import { Request, Response } from 'express';


import { MovieModel } from "../models/movie"

import Logger from "../../config/logger";

export async function CreateMovies(req: Request, res: Response){

    try {
        const data = req.body 
        const movie = await MovieModel.create(data)
        return res.status(201).json(movie)
           
    } catch (e: any) {

        Logger.error(`erro no sistema: ${e.message}`);
        return res.status(500).json({error: "por favor, tente mais tarde"})
        
        
    }
}

export async function findMovieById(req: Request, res: Response) {


     try{

        const id = req.params.id
        const movie = await MovieModel.findById(id)

        if(!movie){
            return res.status(404).json({error: "o filme não existe"})
        }

        return res.status(404).json(movie)
         

      } catch (e: any) {

        Logger.error(`erro no sistema: ${e.message}`);
          return res.status(500).json({error: "por favor, tente mais tarde"})
        
        
    }
}

export async function getAllMovies(req: Request, res: Response) {

    try {
        const movies = await MovieModel.find()
        return res.status(200).json(movies)


        
    } catch (e: any) {
          Logger.error(`erro no sistema: ${e.message}`);
          return res.status(500).json({error: "por favor, tente mais tarde"})
    }
    
}


export async function removeMovie(req: Request, res: Response) {
    try {

        const id = req.params.id 
        const movie = await MovieModel.findById(id)

        if(!movie){
            return res.status(404).json({erro: "filme não encontrado"})
        }

        await movie.delete()

        return res.status(200).json({msg: "filme deletado"})
        
    } catch (error) {

         Logger.error(`erro no sistema: ${e.message}`)
          return res.status(500).json({error: "por favor, tente mais tarde"})
    }
}

export async function updateMovies(req: Request, res: Response) {
    try {
        const id = req.params.id 
        const data = req.body
        const movie = await MovieModel.findById(id)

        if(!movie){
            return res.status(404).json({erro: "filme não encontrado"})
        }

        await MovieModel.updateOne({_id: id}, data)
        return res.status(200).json(data)
       


        
    } catch (error) {

         Logger.error(`erro no sistema: ${e.message}`)
          return res.status(500).json({error: "por favor, tente mais tarde"})
    }
}

