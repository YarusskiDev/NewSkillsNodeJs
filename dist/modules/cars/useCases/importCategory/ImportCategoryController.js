"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportCategoryController = void 0;
var ImportCategoryController = /** @class */ (function () {
    function ImportCategoryController(importCategoryUseCase) {
        this.importCategoryUseCase = importCategoryUseCase;
    }
    ImportCategoryController.prototype.handle = function (request, response) {
        var file = request.file;
        this.importCategoryUseCase.execute(file);
        return response.send();
    };
    return ImportCategoryController;
}());
exports.ImportCategoryController = ImportCategoryController;
