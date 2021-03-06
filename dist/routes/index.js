"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var categories_routes_1 = require("./categories.routes");
var specifications_routes_1 = require("./specifications.routes");
var router = (0, express_1.Router)();
exports.router = router;
router.use("/categories", categories_routes_1.categoriesRoutes);
router.use("/specifications", specifications_routes_1.specificationsRoutes);
