import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlaceEntity } from './entities/place.entity';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(PlaceEntity)
    private placesRepository: Repository<PlaceEntity>,
  ) {}

  async findAll(): Promise<PlaceEntity[]> {
    return this.placesRepository.find();
  }

  async findOne(id: string): Promise<PlaceEntity> {
    const place = await this.placesRepository.findOne({ where: { id } });
    if (!place) {
      throw new NotFoundException(`Place with ID ${id} not found`);
    }
    return place;
  }

  async findByCategory(category: string): Promise<PlaceEntity[]> {
    return this.placesRepository.find({ where: { category } });
  }

  async create(placeData: Partial<PlaceEntity>): Promise<PlaceEntity> {
    const place = this.placesRepository.create(placeData);
    return this.placesRepository.save(place);
  }

  async update(id: string, placeData: Partial<PlaceEntity>): Promise<PlaceEntity> {
    const place = await this.findOne(id);
    Object.assign(place, placeData);
    return this.placesRepository.save(place);
  }

  async remove(id: string): Promise<void> {
    const place = await this.findOne(id);
    await this.placesRepository.remove(place);
  }
}