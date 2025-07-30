import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivityEntity } from './entities/activity.entity';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Get()
  async findAll(@Query('routeId') routeId?: string): Promise<ActivityEntity[]> {
    if (routeId) {
      return this.activitiesService.findByRoute(routeId);
    }
    return this.activitiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ActivityEntity> {
    return this.activitiesService.findOne(id);
  }

  @Get('upcoming/:userId')
  async getUpcomingActivities(@Param('userId') userId: string) {
    return this.activitiesService.findUpcomingByUser(userId);
  }

  @Get('user/:userId')
  async findByUser(@Param('userId') userId: string) {
    return this.activitiesService.findByUser(userId);
  }

  @Post()
  async create(@Body() activityData: Partial<ActivityEntity>): Promise<ActivityEntity> {
    return this.activitiesService.create(activityData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() activityData: Partial<ActivityEntity>,
  ): Promise<ActivityEntity> {
    return this.activitiesService.update(id, activityData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.activitiesService.remove(id);
  }
}