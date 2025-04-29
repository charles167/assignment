"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentSchema = void 0;
const mongoose_1 = require("mongoose");
const SubDepartmentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
});
exports.DepartmentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    subDepartments: [SubDepartmentSchema],
});
