"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const users_module_1 = require("./users/users.module");
const places_module_1 = require("./places/places.module");
const routes_module_1 = require("./routes/routes.module");
const activities_module_1 = require("./activities/activities.module");
const notes_module_1 = require("./notes/notes.module");
const auth_module_1 = require("./auth/auth.module");
const user_entity_1 = require("./users/entities/user.entity");
const place_entity_1 = require("./places/entities/place.entity");
const route_entity_1 = require("./routes/entities/route.entity");
const activity_entity_1 = require("./activities/entities/activity.entity");
const note_entity_1 = require("./notes/entities/note.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT || '5432', 10),
                username: process.env.DB_USERNAME || 'postgres',
                password: process.env.DB_PASSWORD || 'password',
                database: process.env.DB_DATABASE || 'planificador_viajes',
                entities: [user_entity_1.UserEntity, place_entity_1.PlaceEntity, route_entity_1.RouteEntity, activity_entity_1.ActivityEntity, note_entity_1.NoteEntity],
                synchronize: true,
            }),
            users_module_1.UsersModule,
            places_module_1.PlacesModule,
            routes_module_1.RoutesModule,
            activities_module_1.ActivitiesModule,
            notes_module_1.NotesModule,
            auth_module_1.AuthModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map