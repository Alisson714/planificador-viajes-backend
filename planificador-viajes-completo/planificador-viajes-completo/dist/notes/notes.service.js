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
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const note_entity_1 = require("./entities/note.entity");
let NotesService = class NotesService {
    constructor(notesRepository) {
        this.notesRepository = notesRepository;
    }
    async findAll() {
        return this.notesRepository.find({ relations: ['user', 'route', 'activity'] });
    }
    async findOne(id) {
        const note = await this.notesRepository.findOne({
            where: { id },
            relations: ['user', 'route', 'activity']
        });
        if (!note) {
            throw new common_1.NotFoundException(`Note with ID ${id} not found`);
        }
        return note;
    }
    async findByUser(userId) {
        return this.notesRepository.find({
            where: { user: { id: userId } },
            relations: ['route', 'activity']
        });
    }
    async findByRoute(routeId) {
        return this.notesRepository.find({
            where: { route: { id: routeId } },
            relations: ['user']
        });
    }
    async create(noteData) {
        const note = this.notesRepository.create(noteData);
        return this.notesRepository.save(note);
    }
    async update(id, noteData) {
        const note = await this.findOne(id);
        Object.assign(note, noteData);
        return this.notesRepository.save(note);
    }
    async remove(id) {
        const note = await this.findOne(id);
        await this.notesRepository.remove(note);
    }
};
exports.NotesService = NotesService;
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(note_entity_1.NoteEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NotesService);
//# sourceMappingURL=notes.service.js.map