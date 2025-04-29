import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { DepartmentService } from './department.service';

@Resolver()
export class DepartmentResolver {
  constructor(private departmentService: DepartmentService) {}

  @Mutation(() => String)
  async createDepartment(
    @Args('name') name: string,
    @Args('subDepartments', { type: () => [String] }) subDepartments: any[],
  ): Promise<any> {
    return this.departmentService.createDepartment(name, subDepartments);
  }
}
