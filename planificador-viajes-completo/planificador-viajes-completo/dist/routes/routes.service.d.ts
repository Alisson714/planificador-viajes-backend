import { Repository } from 'typeorm';
import { RouteEntity } from './entities/route.entity';
export declare class RoutesService {
    private routesRepository;
    constructor(routesRepository: Repository<RouteEntity>);
    findAll(): Promise<RouteEntity[]>;
    findOne(id: string): Promise<RouteEntity>;
    findByUser(userId: string): Promise<RouteEntity[]>;
    create(routeData: Partial<RouteEntity>): Promise<RouteEntity>;
    update(id: string, routeData: Partial<RouteEntity>): Promise<RouteEntity>;
    remove(id: string): Promise<void>;
}
