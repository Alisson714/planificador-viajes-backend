import { RoutesService } from './routes.service';
import { RouteEntity } from './entities/route.entity';
export declare class RoutesController {
    private readonly routesService;
    constructor(routesService: RoutesService);
    findAll(userId?: string): Promise<RouteEntity[]>;
    findOne(id: string): Promise<RouteEntity>;
    create(routeData: Partial<RouteEntity>): Promise<RouteEntity>;
    update(id: string, routeData: Partial<RouteEntity>): Promise<RouteEntity>;
    remove(id: string): Promise<void>;
}
