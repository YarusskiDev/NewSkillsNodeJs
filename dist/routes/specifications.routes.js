"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationsRoutes = void 0;
var express_1 = require("express");
var CreateSpecification_1 = require("../modules/cars/useCases/CreateSpecification");
var specificationsRoutes = (0, express_1.Router)();
exports.specificationsRoutes = specificationsRoutes;
specificationsRoutes.post("/", function (request, response) {
    return CreateSpecification_1.createSpecificationController.handle(request, response);
});
