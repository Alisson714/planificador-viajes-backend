import { RouteEntity } from '../../routes/entities/route.entity';
import { PlaceEntity } from '../../places/entities/place.entity';
export declare class ActivityEntity {
    id: string;
    name: string;
    date: Date;
    description?: string;
    note?: string;
    status: string;
    cost?: number;
    type?: string;
    duration?: number;
    location?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    place?: PlaceEntity;
    route: RouteEntity;
}
