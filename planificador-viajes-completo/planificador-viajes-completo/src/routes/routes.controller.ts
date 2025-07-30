import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RouteEntity } from './entities/route.entity';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Get()
  async findAll(@Query('userId') userId?: string): Promise<RouteEntity[]> {
    if (userId) {
      return this.routesService.findByUser(userId);
    }
    return this.routesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RouteEntity> {
    return this.routesService.findOne(id);
  }

  @Post()
  async create(@Body() routeData: Partial<RouteEntity>): Promise<RouteEntity> {
    return this.routesService.create(routeData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() routeData: Partial<RouteEntity>,
  ): Promise<RouteEntity> {
    return this.routesService.update(id, routeData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.routesService.remove(id);
  }
}