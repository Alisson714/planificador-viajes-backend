import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RouteEntity } from './entities/route.entity';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(RouteEntity)
    private routesRepository: Repository<RouteEntity>,
  ) {}

  async findAll(): Promise<RouteEntity[]> {
    return this.routesRepository.find({ relations: ['user', 'activities'] });
  }

  async findOne(id: string): Promise<RouteEntity> {
    const route = await this.routesRepository.findOne({ 
      where: { id },
      relations: ['user', 'activities']
    });
    if (!route) {
      throw new NotFoundException(`Route with ID ${id} not found`);
    }
    return route;
  }

  async findByUser(userId: string): Promise<RouteEntity[]> {
    return this.routesRepository.find({ 
      where: { user: { id: userId } },
      relations: ['activities']
    });
  }

  async create(routeData: Partial<RouteEntity>): Promise<RouteEntity> {
    const route = this.routesRepository.create(routeData);
    return this.routesRepository.save(route);
  }

  async update(id: string, routeData: Partial<RouteEntity>): Promise<RouteEntity> {
    const route = await this.findOne(id);
    Object.assign(route, routeData);
    return this.routesRepository.save(route);
  }

  async remove(id: string): Promise<void> {
    const route = await this.findOne(id);
    await this.routesRepository.remove(route);
  }
}