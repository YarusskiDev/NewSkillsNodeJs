import {request, response, Router} from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { Category } from "../modules/cars/category";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";
const categoriesRepository = new CategoriesRepository();

const categoriesRoutes = Router();


const categories: Category[] = [];

categoriesRoutes.post("/", (request,response)=>{
    const {name, description} = request.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute({name,description});

})

categoriesRoutes.get("/", (request, response)=>{
    const all = categoriesRepository.list();
    return response.json(all);

});


export {categoriesRoutes}