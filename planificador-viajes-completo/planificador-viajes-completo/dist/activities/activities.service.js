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
exports.ActivitiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const activity_entity_1 = require("./entities/activity.entity");
const route_entity_1 = require("../routes/entities/route.entity");
let ActivitiesService = class ActivitiesService {
    constructor(activitiesRepository, routesRepository) {
        this.activitiesRepository = activitiesRepository;
        this.routesRepository = routesRepository;
    }
    async findAll() {
        return this.activitiesRepository.find({ relations: ['route', 'place'] });
    }
    async findOne(id) {
        const activity = await this.activitiesRepository.findOne({
            where: { id },
            relations: ['route', 'place']
        });
        if (!activity) {
            throw new common_1.NotFoundException(`Activity with ID ${id} not found`);
        }
        return activity;
    }
    async findByRoute(routeId) {
        return this.activitiesRepository.find({
            where: { route: { id: routeId } },
            relations: ['place']
        });
    }
    async findUpcomingByUser(userId) {
        const today = new Date();
        return this.activitiesRepository.createQueryBuilder('activity')
            .innerJoin('activity.route', 'route')
            .where('route.user.id = :userId', { userId })
            .andWhere('activity.date >= :today', { today: today.toISOString().split('T')[0] })
            .andWhere('activity.status IN (:...statuses)', { statuses: ['pending', 'active'] })
            .orderBy('activity.date', 'ASC')
            .getMany();
    }
    async findByUser(userId) {
        return this.activitiesRepository.createQueryBuilder('activity')
            .innerJoin('activity.route', 'route')
            .where('route.user.id = :userId', { userId })
            .orderBy('activity.date', 'DESC')
            .getMany();
    }
    async create(activityData) {
        const activity = this.activitiesRepository.create(activityData);
        return this.activitiesRepository.save(activity);
    }
    async update(id, activityData) {
        const activity = await this.findOne(id);
        Object.assign(activity, activityData);
        return this.activitiesRepository.save(activity);
    }
    async remove(id) {
        const activity = await this.findOne(id);
        await this.activitiesRepository.remove(activity);
    }
};
exports.ActivitiesService = ActivitiesService;
exports.ActivitiesService = ActivitiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(activity_entity_1.ActivityEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(route_entity_1.RouteEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ActivitiesService);
//# sourceMappingURL=activities.service.js.map