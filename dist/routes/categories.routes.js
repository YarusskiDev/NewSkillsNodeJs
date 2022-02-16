"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
var express_1 = require("express");
var createCategory_1 = require("../modules/cars/useCases/createCategory");
var listCategories_1 = require("../modules/cars/useCases/listCategories");
var multer_1 = __importDefault(require("multer"));
var upload = (0, multer_1.default)({
    dest: "./tmp",
});
var categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
var categories = [];
categoriesRoutes.post("/", function (request, response) {
    return createCategory_1.createCategoryController.handle(request, response);
});
categoriesRoutes.post("/import", upload.single("file"), function (request, response) {
    var file = request.file;
    console.log(file);
    return response.send();
});
categoriesRoutes.get("/", function (request, response) {
    return listCategories_1.listCategoriesController.handle(request, response);
});
