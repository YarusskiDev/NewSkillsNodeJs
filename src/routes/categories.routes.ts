import {request, response, Router} from "express";
import { Category } from "../modules/cars/model/category";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import multer from "multer";

const upload = multer({
    dest:"./tmp",
})

const categoriesRoutes = Router();


const categories: Category[] = [];

categoriesRoutes.post("/", (request,response)=>{
  
 return createCategoryController.handle(request,response)
})

categoriesRoutes.post("/import",upload.single("file"),(request,response)=>{
    return importCategoryController.handle(request,response);
});

categoriesRoutes.get("/", (request, response)=>{
  
    return listCategoriesController.handle(request,response);
});


export {categoriesRoutes}