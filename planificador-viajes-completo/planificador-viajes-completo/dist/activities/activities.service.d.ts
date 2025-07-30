import { Repository } from 'typeorm';
import { ActivityEntity } from './entities/activity.entity';
import { RouteEntity } from '../routes/entities/route.entity';
export declare class ActivitiesService {
    private activitiesRepository;
    private routesRepository;
    constructor(activitiesRepository: Repository<ActivityEntity>, routesRepository: Repository<RouteEntity>);
    findAll(): Promise<ActivityEntity[]>;
    findOne(id: string): Promise<ActivityEntity>;
    findByRoute(routeId: string): Promise<ActivityEntity[]>;
    findUpcomingByUser(userId: string): Promise<ActivityEntity[]>;
    findByUser(userId: string): Promise<ActivityEntity[]>;
    create(activityData: Partial<ActivityEntity>): Promise<ActivityEntity>;
    update(id: string, activityData: Partial<ActivityEntity>): Promise<ActivityEntity>;
    remove(id: string): Promise<void>;
}
