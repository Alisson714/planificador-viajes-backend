import { RouteEntity } from '../../routes/entities/route.entity';
export declare class UserEntity {
    id: string;
    email: string;
    password: string;
    name: string;
    bio?: string;
    avatar?: string;
    phone?: string;
    birthDate?: string;
    country?: string;
    city?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    routes: RouteEntity[];
}
