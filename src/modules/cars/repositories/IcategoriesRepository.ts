import { Category } from "../category";
interface IcreateCategoryDto{
    name:string,
    description:string;
}

interface IcategoriesRepository{
    findByName(name:string):Category;
    list():Category[];
    create({name,description}:IcreateCategoryDto):void;

}

export{IcategoriesRepository,IcreateCategoryDto};