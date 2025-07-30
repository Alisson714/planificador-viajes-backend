import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlaceEntity } from './entities/place.entity';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  async findAll(@Query('category') category?: string): Promise<PlaceEntity[]> {
    if (category) {
      return this.placesService.findByCategory(category);
    }
    return this.placesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PlaceEntity> {
    return this.placesService.findOne(id);
  }

  @Post()
  async create(@Body() placeData: Partial<PlaceEntity>): Promise<PlaceEntity> {
    return this.placesService.create(placeData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() placeData: Partial<PlaceEntity>,
  ): Promise<PlaceEntity> {
    return this.placesService.update(id, placeData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.placesService.remove(id);
  }
}