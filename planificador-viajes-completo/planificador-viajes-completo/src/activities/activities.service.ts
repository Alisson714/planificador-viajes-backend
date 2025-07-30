import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityEntity } from './entities/activity.entity';
import { RouteEntity } from '../routes/entities/route.entity';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(ActivityEntity)
    private activitiesRepository: Repository<ActivityEntity>,
    @InjectRepository(RouteEntity)
    private routesRepository: Repository<RouteEntity>,
  ) {}

  async findAll(): Promise<ActivityEntity[]> {
    return this.activitiesRepository.find({ relations: ['route', 'place'] });
  }

  async findOne(id: string): Promise<ActivityEntity> {
    const activity = await this.activitiesRepository.findOne({ 
      where: { id },
      relations: ['route', 'place']
    });
    if (!activity) {
      throw new NotFoundException(`Activity with ID ${id} not found`);
    }
    return activity;
  }

  async findByRoute(routeId: string): Promise<ActivityEntity[]> {
    return this.activitiesRepository.find({ 
      where: { route: { id: routeId } },
      relations: ['place']
    });
  }

  async findUpcomingByUser(userId: string): Promise<ActivityEntity[]> {
    const today = new Date();
    return this.activitiesRepository.createQueryBuilder('activity')
      .innerJoin('activity.route', 'route')
      .where('route.user.id = :userId', { userId })
      .andWhere('activity.date >= :today', { today: today.toISOString().split('T')[0] })
      .andWhere('activity.status IN (:...statuses)', { statuses: ['pending', 'active'] })
      .orderBy('activity.date', 'ASC')
      .getMany();
  }

  async findByUser(userId: string): Promise<ActivityEntity[]> {
    return this.activitiesRepository.createQueryBuilder('activity')
      .innerJoin('activity.route', 'route')
      .where('route.user.id = :userId', { userId })
      .orderBy('activity.date', 'DESC')
      .getMany();
  }

  async create(activityData: Partial<ActivityEntity>): Promise<ActivityEntity> {
    const activity = this.activitiesRepository.create(activityData);
    return this.activitiesRepository.save(activity);
  }

  async update(id: string, activityData: Partial<ActivityEntity>): Promise<ActivityEntity> {
    const activity = await this.findOne(id);
    Object.assign(activity, activityData);
    return this.activitiesRepository.save(activity);
  }

  async remove(id: string): Promise<void> {
    const activity = await this.findOne(id);
    await this.activitiesRepository.remove(activity);
  }
}