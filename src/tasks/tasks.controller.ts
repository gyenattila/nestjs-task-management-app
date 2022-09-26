import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksWithFilterDto } from './dto/get-tasks-filter.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() requestQuery: GetTasksWithFilterDto): Task[] {
    /**
     * if we have any filters defined, call tasksService.getTasksWithFilters
     * otherwise, just get all tasks.
     */
    if (Object.keys(requestQuery).length) {
      return this.tasksService.getTasksWithFilters(requestQuery);
    } else {
      return this.tasksService.getAllTasks();
    }
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.getTaskById(id);
  }

  @Post()
  createTask(@Body() requestBody: CreateTaskDto): Task {
    const { title, description } = requestBody;
    return this.tasksService.createTask(title, description);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }

  /**
   * PATCH best practices
   *
   * Refer to the resource in the URL
   * Refer to a specific item by ID
   * Specify what has to be patched in the URL
   * Provide the required parameters in the request body
   */
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
