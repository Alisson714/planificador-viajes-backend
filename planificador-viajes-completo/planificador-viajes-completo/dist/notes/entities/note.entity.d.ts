import { UserEntity } from '../../users/entities/user.entity';
import { RouteEntity } from '../../routes/entities/route.entity';
import { ActivityEntity } from '../../activities/entities/activity.entity';
export declare class NoteEntity {
    id: string;
    title: string;
    content: string;
    category?: string;
    isImportant: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    user: UserEntity;
    route?: RouteEntity;
    activity?: ActivityEntity;
}
