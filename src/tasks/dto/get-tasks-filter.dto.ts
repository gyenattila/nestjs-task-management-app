import { TaskStatus } from '../task.model';

export class GetTasksWithFilterDto {
  status?: TaskStatus;
  search?: string;
}
