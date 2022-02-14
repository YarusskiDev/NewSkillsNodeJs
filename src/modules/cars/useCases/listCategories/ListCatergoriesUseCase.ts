import { Category } from "../../model/category";
import { IcategoriesRepository } from "../../repositories/IcategoriesRepository";

class ListCategoriesUseCase{

    constructor(private createCategoriesRepository: IcategoriesRepository){  }

    execute():Category[]{
        const categories = this.createCategoriesRepository.list();
        return categories;
    }
}

export{ListCategoriesUseCase}