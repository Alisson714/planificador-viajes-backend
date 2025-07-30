"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const place_entity_1 = require("./entities/place.entity");
let PlacesService = class PlacesService {
    constructor(placesRepository) {
        this.placesRepository = placesRepository;
    }
    async findAll() {
        return this.placesRepository.find();
    }
    async findOne(id) {
        const place = await this.placesRepository.findOne({ where: { id } });
        if (!place) {
            throw new common_1.NotFoundException(`Place with ID ${id} not found`);
        }
        return place;
    }
    async findByCategory(category) {
        return this.placesRepository.find({ where: { category } });
    }
    async create(placeData) {
        const place = this.placesRepository.create(placeData);
        return this.placesRepository.save(place);
    }
    async update(id, placeData) {
        const place = await this.findOne(id);
        Object.assign(place, placeData);
        return this.placesRepository.save(place);
    }
    async remove(id) {
        const place = await this.findOne(id);
        await this.placesRepository.remove(place);
    }
};
exports.PlacesService = PlacesService;
exports.PlacesService = PlacesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(place_entity_1.PlaceEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PlacesService);
//# sourceMappingURL=places.service.js.map