import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentService } from './department.service';
import { DepartmentResolver } from './department.resolver';
import { DepartmentSchema } from './department.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Department', schema: DepartmentSchema }]),
  ],
  providers: [DepartmentService, DepartmentResolver],
})
export class DepartmentModule {}
