import { UserEntity } from '../../users/entities/user.entity';
import { ActivityEntity } from '../../activities/entities/activity.entity';
export declare class RouteEntity {
    id: string;
    name: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    status: string;
    isPublic: boolean;
    totalDistance?: number;
    estimatedBudget?: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    user: UserEntity;
    activities: ActivityEntity[];
}
