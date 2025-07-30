import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    findAll(): Promise<UserEntity[]>;
    findOne(id: string): Promise<UserEntity>;
    findByEmail(email: string): Promise<UserEntity | null>;
    create(userData: Partial<UserEntity>): Promise<UserEntity>;
    update(id: string, userData: Partial<UserEntity>): Promise<UserEntity>;
    remove(id: string): Promise<void>;
}
