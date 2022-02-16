"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importCategoryController = void 0;
var ImportCategoryController_1 = require("./ImportCategoryController");
var ImportCategoryUseCase_1 = require("./ImportCategoryUseCase");
var importCategoryUseCase = new ImportCategoryUseCase_1.ImportCategoryUseCase();
var importCategoryController = new ImportCategoryController_1.ImportCategoryController(importCategoryUseCase);
exports.importCategoryController = importCategoryController;
