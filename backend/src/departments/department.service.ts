import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DepartmentService {
  constructor(@InjectModel('Department') private departmentModel: Model<any>) {}

  async createDepartment(name: string, subDepartments: { name: string }[]) {
    const department = new this.departmentModel({ name, subDepartments });
    return department.save();
  }
}
