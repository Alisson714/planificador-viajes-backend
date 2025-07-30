import { ActivitiesService } from './activities.service';
import { ActivityEntity } from './entities/activity.entity';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
    findAll(routeId?: string): Promise<ActivityEntity[]>;
    findOne(id: string): Promise<ActivityEntity>;
    getUpcomingActivities(userId: string): Promise<ActivityEntity[]>;
    findByUser(userId: string): Promise<ActivityEntity[]>;
    create(activityData: Partial<ActivityEntity>): Promise<ActivityEntity>;
    update(id: string, activityData: Partial<ActivityEntity>): Promise<ActivityEntity>;
    remove(id: string): Promise<void>;
}
