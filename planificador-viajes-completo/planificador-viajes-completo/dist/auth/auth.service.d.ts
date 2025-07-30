import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserEntity } from '../users/entities/user.entity';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: UserEntity): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
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
            routes: import("../routes/entities/route.entity").RouteEntity[];
        } | null;
    }>;
    register(userData: Partial<UserEntity>): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
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
            routes: import("../routes/entities/route.entity").RouteEntity[];
        } | null;
    }>;
}
