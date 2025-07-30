import { PlacesService } from './places.service';
import { PlaceEntity } from './entities/place.entity';
export declare class PlacesController {
    private readonly placesService;
    constructor(placesService: PlacesService);
    findAll(category?: string): Promise<PlaceEntity[]>;
    findOne(id: string): Promise<PlaceEntity>;
    create(placeData: Partial<PlaceEntity>): Promise<PlaceEntity>;
    update(id: string, placeData: Partial<PlaceEntity>): Promise<PlaceEntity>;
    remove(id: string): Promise<void>;
}
