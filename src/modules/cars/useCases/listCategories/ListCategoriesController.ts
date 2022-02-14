import {Request,Response} from "express";
import { ListCategoriesUseCase } from "./ListCatergoriesUseCase";

class ListCategoriesController{

    constructor(private listCaterogoriesUseCase: ListCategoriesUseCase){}
    handle(request:Request, response:Response){
        const all = this.listCaterogoriesUseCase.execute();
        return response.json(all);
    }
}

export {ListCategoriesController}