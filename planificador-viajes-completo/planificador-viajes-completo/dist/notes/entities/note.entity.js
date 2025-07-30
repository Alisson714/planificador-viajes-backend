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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const route_entity_1 = require("../../routes/entities/route.entity");
const activity_entity_1 = require("../../activities/entities/activity.entity");
let NoteEntity = class NoteEntity {
};
exports.NoteEntity = NoteEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], NoteEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], NoteEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 2000 }),
    __metadata("design:type", String)
], NoteEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 50 }),
    __metadata("design:type", String)
], NoteEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], NoteEntity.prototype, "isImportant", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], NoteEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], NoteEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], NoteEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, { onDelete: 'CASCADE' }),
    __metadata("design:type", user_entity_1.UserEntity)
], NoteEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => route_entity_1.RouteEntity, { nullable: true }),
    __metadata("design:type", route_entity_1.RouteEntity)
], NoteEntity.prototype, "route", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => activity_entity_1.ActivityEntity, { nullable: true }),
    __metadata("design:type", activity_entity_1.ActivityEntity)
], NoteEntity.prototype, "activity", void 0);
exports.NoteEntity = NoteEntity = __decorate([
    (0, typeorm_1.Entity)('notes')
], NoteEntity);
//# sourceMappingURL=note.entity.js.map