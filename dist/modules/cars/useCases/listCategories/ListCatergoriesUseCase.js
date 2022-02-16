"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesUseCase = void 0;
var ListCategoriesUseCase = /** @class */ (function () {
    function ListCategoriesUseCase(createCategoriesRepository) {
        this.createCategoriesRepository = createCategoriesRepository;
    }
    ListCategoriesUseCase.prototype.execute = function () {
        var categories = this.createCategoriesRepository.list();
        return categories;
    };
    return ListCategoriesUseCase;
}());
exports.ListCategoriesUseCase = ListCategoriesUseCase;
