"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesController = void 0;
var ListCategoriesController = /** @class */ (function () {
    function ListCategoriesController(listCaterogoriesUseCase) {
        this.listCaterogoriesUseCase = listCaterogoriesUseCase;
    }
    ListCategoriesController.prototype.handle = function (request, response) {
        var all = this.listCaterogoriesUseCase.execute();
        return response.json(all);
    };
    return ListCategoriesController;
}());
exports.ListCategoriesController = ListCategoriesController;
