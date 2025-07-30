import { Repository } from 'typeorm';
import { PlaceEntity } from './entities/place.entity';
export declare class PlacesService {
    private placesRepository;
    constructor(placesRepository: Repository<PlaceEntity>);
    findAll(): Promise<PlaceEntity[]>;
    findOne(id: string): Promise<PlaceEntity>;
    findByCategory(category: string): Promise<PlaceEntity[]>;
    create(placeData: Partial<PlaceEntity>): Promise<PlaceEntity>;
    update(id: string, placeData: Partial<PlaceEntity>): Promise<PlaceEntity>;
    remove(id: string): Promise<void>;
}
