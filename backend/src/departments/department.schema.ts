import { Schema } from 'mongoose';

const SubDepartmentSchema = new Schema({
  name: { type: String, required: true },
});

export const DepartmentSchema = new Schema({
  name: { type: String, required: true },
  subDepartments: [SubDepartmentSchema],
});
