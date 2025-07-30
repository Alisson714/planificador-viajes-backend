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
exports.RoutesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const route_entity_1 = require("./entities/route.entity");
let RoutesService = class RoutesService {
    constructor(routesRepository) {
        this.routesRepository = routesRepository;
    }
    async findAll() {
        return this.routesRepository.find({ relations: ['user', 'activities'] });
    }
    async findOne(id) {
        const route = await this.routesRepository.findOne({
            where: { id },
            relations: ['user', 'activities']
        });
        if (!route) {
            throw new common_1.NotFoundException(`Route with ID ${id} not found`);
        }
        return route;
    }
    async findByUser(userId) {
        return this.routesRepository.find({
            where: { user: { id: userId } },
            relations: ['activities']
        });
    }
    async create(routeData) {
        const route = this.routesRepository.create(routeData);
        return this.routesRepository.save(route);
    }
    async update(id, routeData) {
        const route = await this.findOne(id);
        Object.assign(route, routeData);
        return this.routesRepository.save(route);
    }
    async remove(id) {
        const route = await this.findOne(id);
        await this.routesRepository.remove(route);
    }
};
exports.RoutesService = RoutesService;
exports.RoutesService = RoutesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(route_entity_1.RouteEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoutesService);
//# sourceMappingURL=routes.service.js.map