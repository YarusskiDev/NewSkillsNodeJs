"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificationRepository = void 0;
var Specification_1 = require("../../model/Specification");
var SpecificationRepository = /** @class */ (function () {
    function SpecificationRepository() {
        this.specifications = [];
    }
    SpecificationRepository.prototype.create = function (_a) {
        var description = _a.description, name = _a.name;
        var specification = new Specification_1.Specification();
        Object.assign(specification, {
            name: name,
            description: description,
            create_at: new Date(),
        });
        this.specifications.push(specification);
    };
    SpecificationRepository.prototype.findByName = function (name) {
        var specification = this.specifications.find(function (specification) { return specification.name === name; });
        return specification;
    };
    return SpecificationRepository;
}());
exports.SpecificationRepository = SpecificationRepository;
