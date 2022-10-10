import fs from "fs";

function moveFile(pathFrom:string, pathTo:string){
    fs.renameSync(pathFrom, pathTo);
}

function deleteFile(pathFrom: string){
    fs.rmSync(pathFrom);
}

function renameFile(pathFrom: string, name:string){
    fs.renameSync(pathFrom, name);
}

function readFile(pathFrom: string){
    const files = fs.readdirSync(pathFrom);
    console.log(files);
}


export {moveFile, deleteFile, renameFile};

