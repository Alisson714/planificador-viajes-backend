import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<UserEntity[]>;
    findOne(id: string): Promise<UserEntity>;
    create(userData: Partial<UserEntity>): Promise<UserEntity>;
    update(id: string, userData: Partial<UserEntity>): Promise<UserEntity>;
    uploadAvatar(id: string, file: Express.Multer.File): Promise<{
        avatar: string;
    }>;
    remove(id: string): Promise<void>;
}
