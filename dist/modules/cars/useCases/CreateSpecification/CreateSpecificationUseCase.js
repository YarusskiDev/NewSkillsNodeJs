"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecificationUseCase = void 0;
var CreateSpecificationUseCase = /** @class */ (function () {
    function CreateSpecificationUseCase(specificationRepository) {
        this.specificationRepository = specificationRepository;
    }
    CreateSpecificationUseCase.prototype.execute = function (_a) {
        var name = _a.name, description = _a.description;
        var specificationAlreadyExists = this.specificationRepository.findByName((name));
        if (specificationAlreadyExists) {
            throw new Error("specification already exists!");
        }
        this.specificationRepository.create({
            name: name,
            description: description
        });
    };
    return CreateSpecificationUseCase;
}());
exports.CreateSpecificationUseCase = CreateSpecificationUseCase;
