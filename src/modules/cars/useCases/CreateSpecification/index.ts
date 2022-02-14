import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecification.Controller";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export {createSpecificationController}