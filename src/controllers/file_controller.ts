import { Request, Response } from "express";

async function saveFile(req: Request, res: Response){
    try {
        const {path} = req.body;
        const file = req.files["file"][0];
        console.log(file);        
        if(!file) return res.status(400).send({message: "Você não enviou um arquivo na requisição!"});
         return res.sendStatus(200);
      } catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
}


async function readFile(req: Request, res: Response){
  try {
      const {path} = req.query;
      console.log(path);        
      if(!path) return res.status(400).send({message: "Você não enviou um arquivo na requisição!"});
       return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
}



export {saveFile, readFile};
